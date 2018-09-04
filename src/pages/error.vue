<template>
    <div>
        <el-row type="flex">
            <el-col :span="20" justify="center">
                <p>{{code}}</p>
                <p>{{message}}</p>
                <div>Error</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:"error",
        // data(){
        //     return{
        //         code:"",
        //         message:""
        //     }
        // }
        computed:{
            code(){
                return this.$store.state.err_code;
            },
            message(){
                return this.$store.state.err_message;
            }
        }        
    }
</script>

<style scoped>

</style>