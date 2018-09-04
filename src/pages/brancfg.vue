<template>
    <div class="bran">
        <el-row type="flex">
            <el-col :span="6" justify="center">
               <el-button type="primary" @click="getBran">getBran</el-button>
            </el-col>
            <el-col :span="18" justify="start">

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
                bran:""
            }
        },
        methods:{
            getBran(){
                this.$axois({
                    method:'get', 
                    url:'/api/user/getbran',                    
                    headers:{'Content-Type':'application/x-www-form-urlencoded'}
                }).then(rsp=>{
                    if(rsp.data['code']==='0000') {
                        var data = rsp.data['data']['bran'];
                        console.log(data);
                    }else{
                        alert(rsp.data['message']);
                        // next(false);
                    }
                }).catch(error=>{
                    console.log(error.message);
                })
            }
        }
    }
</script>

<style scoped>
.dark{
    background-color: darkblue;
    min-height: 30px
}
</style>


