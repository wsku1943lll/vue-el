<template>
    <div class="main">
        <el-row type="flex" justify="start" class="row1">
            <el-col :span="22" :offset="1" class="npa-side">
                <el-form label-width="100px" :model="npa" :inline="true">
                    <el-form-item label="客户号" >
                        <el-input v-model="npa.custid"/>
                    </el-form-item>
                    <el-form-item label="贷款本金">
                        <el-input v-model="npa.loan_cpt"/>
                    </el-form-item>
                    <el-form-item label="贷款利率">
                        <el-input v-model="npa.int"  placeholder="年利率"/>
                    </el-form-item>
                    <el-form-item label="逾期上浮比例">
                        <el-input v-model="npa.float"/>
                    </el-form-item>
                    <el-form-item label="每期还款额">
                        <el-input v-model="npa.ret_amt" placeholder="万元"/>
                    </el-form-item>
                    <el-form-item label="起息日">
                        <el-input v-model="npa.start_dt"/>
                    </el-form-item>
                    <el-form-item label="到期日">
                        <el-input v-model="npa.end_dt"/>
                    </el-form-item>
                    <el-form-item label="还款顺序">
                        <el-select v-model="npa.retorder">
                            <el-option label="先本后息" value="cpt"></el-option>
                            <el-option label="先息后本" value="int"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>

            </el-col>
        </el-row>
        <el-row type="flex" justify="start" class="row2">
            <el-col :offset="3">
            <el-button type="primary" @click="onsubmit('npa')" size="medium">开始计算</el-button>
            <el-button type="primary" @click="onreset('npa')" size="medium">重置数据</el-button>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" class="row3">
            <el-col :span="22" class="npa-table">
                <el-table :data="data" >
                    <el-table-column prop="cpt" label="计息本金" width="110"/>
                    <el-table-column prop="sdate" label="起息日" width="85"/>
                    <el-table-column prop="edate" label="止息日" width="85"/>
                    <el-table-column prop="days" label="计息天数" width="80"/>
                    <el-table-column prop="nrate" label="正常利率" width="80"/>
                    <el-table-column prop="mrate" label="逾期利率" width="80"/>
                    <el-table-column prop="nint" label="正常利息" width="110"/>
                    <el-table-column prop="mint" label="逾期利息" width="110"/>
                    <el-table-column prop="int" label="利息总额" width="110"/>
                    <el-table-column prop="retamt" label="当期还款" width="110"/>
                    <el-table-column prop="int" label="欠息额" width="110"/>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "NPA_Caculate",
        data(){
            return {
                npa:{
                    custid:'',
                    loan_cpt:'',
                    int:'',
                    float:'',
                    retorder:'cpt',
                    ret_amt:0,
                    start_dt:'',
                    end_dt:''
                },
                data:[{
                    cpt:40000000.11,
                    sdate:'2018-1-1',
                    edate:'2018-2-1',
                    days:30,
                    nrate:'7.00%',
                    mrate:'3.50%',
                    nint:20412.12,
                    mint:1023.72,
                    int:0,
                    retamt:0,
                    editable:true
                }]
            }
        },
        methods:{
            onsubmit(npa){
                console.log("ajax 获取客户数据...");
            }
        },
        computed:{
            npadata(){
                this.data.forEach((val,index)=>{
                    val['int']=val['nint']+val['mint'];
                });
                return this.data;
            }
        }
    }
</script>

<style scoped>
.main{
    width: 100%;
}
.npa-side{
    min-width: 100px;
    border-right: blue;
}
.row2{
    margin-bottom: 20px;
}

</style>
