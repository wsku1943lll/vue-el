<template>
    <div class="bran">
        <el-row type="flex" :gutter="50">
            <el-col class="tree">
                <el-tree :props="props1" node-key="dpt_id" ref="tree" :data="treeData" accordion
                @node-click="handleNodeClick" :check-on-click-node="true" :highlight-current="true"/>
            </el-col>
            <el-col class="form">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import qs from 'qs'
    export default {
        name:"brancfg",
        data(){
            return {
                props1:{
                    label:'dpt_name',
                    children:'children'
                },
                rawData:[],
                treeData:[],
                form:{
                    id:'',
                    name:'',
                    group_id:''
                }
            }
        },
        computed:{
        },
        methods:{
            getBran(){
                var dataArray = [];
                this.rawData.forEach(function(data,index,array) {
                    var dpt_father_id = data.dpt_father_id;
                    if( dpt_father_id === 0 ) {
                        var dpt_id = data.dpt_id;
                        var dpt_name = data.dpt_name;
                        var group_id = data.group_id;
                        var objTemp = {
                            dpt_father_id: dpt_father_id,
                            dpt_id: dpt_id,
                            dpt_name: dpt_name,
                            group_id:group_id
                        }
                        dataArray.push(objTemp);
                    }
                });
                console.log(dataArray);
                this.treeData = data2treeDG(this.rawData, dataArray);
                console.log(this.treeData);
            },
            handleNodeClick(data) {
                console.log(data);
            }
        },
        created() {
            this.$axois({
                method:'get', 
                url:'/api/user/getbran',                    
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            }).then(rsp=>{
                if(rsp.data.code==='0000') {
                    this.rawData = rsp.data.data.bran;

                    //转换结构
                    var dataArray = [];
                    this.rawData.forEach(function(data,index,array) {
                        var dpt_father_id = data.dpt_father_id;
                        if( dpt_father_id === 0 ) {
                            var dpt_id = data.dpt_id;
                            var dpt_name = data.dpt_name;
                            var group_id = data.group_id;
                            var objTemp = {
                                dpt_father_id: dpt_father_id,
                                dpt_id: dpt_id,
                                dpt_name: dpt_name,
                                group_id:group_id
                            }
                            dataArray.push(objTemp);
                        }
                    });

                    this.treeData = data2treeDG(this.rawData, dataArray);

                }else{
                    alert(rsp.data['message']);
                    // next(false);
                }
            }).catch(error=>{
                console.log(error.message);
            })
        }
    }

    /**
     * 
     * @param {Object} datas  所有数据
     * @param {Object} dataArray 父节点组成的数组
     */
    function data2treeDG(datas,dataArray){
        for(var j = 0; j < dataArray.length; j++) {
            var dataArrayIndex = dataArray[j];
            var childrenArray = [];
            var dpt_id = dataArrayIndex.dpt_id;

            for(var i = 0; i < datas.length; i++) {
                var data = datas[i];
                var dpt_father_id = data.dpt_father_id;                
                if(dpt_father_id === dpt_id) {//判断是否为儿子节点
                    var tmpdpt_id = data.dpt_id;
                    var dpt_name = data.dpt_name;
                    var group_id = data.group_id;
                    var objTemp = {
                        dpt_father_id: dpt_father_id,
                        dpt_id: tmpdpt_id,
                        dpt_name: dpt_name,
                        group_id:group_id
                    }
                    childrenArray.push(objTemp);
                }                
            }
            dataArrayIndex.children = childrenArray;
            if(childrenArray.length > 0) {//有儿子节点则递归
                data2treeDG(datas, childrenArray);
            }
        }
        return dataArray;
    };
</script>

<style scoped>
.dark{
    background-color: darkblue;
    min-height: 30px
}
.tree{
    width: 350px;
}
.form{
    width: 300px;
}
</style>


