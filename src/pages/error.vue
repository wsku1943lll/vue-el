<template>
    <div>
        <el-row type="flex">
            <el-col span="20" justify="center">
                <p>{{code}}</p>
                <p>{{message}}</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:"error",
        data(){
            return{
                code:"",
                message:""
            }
        }
    }
</script>

<style scoped>

</style>