<template>
    <div class="register">
        <el-card  class="reg-form" >
            <el-form ref="form" :model="form" label-width="100px" :rules="rules" >
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" placeholder="人事编号"/>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input v-model="form.pass" type="password" />
                </el-form-item>
                <el-form-item label="确认密码" prop="checkpass">
                    <el-input v-model="form.checkpass" type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">确定</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                    <el-button @click="cancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
            return {
                form:{
                    username:'',
                    pass:'',
                    checkpass:''
                },
                rules:{
                    username:[
                        { required: true, message: '人事编号不能为空', trigger: 'blur' },
                        // {min:8,max:8,message:'必须为8位字符',trigger:'blur'}
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ]
                }
            };
        },
        methods:{
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            cancel(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
.register{
    height: 70vh;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
}

.reg-form{
     width: 400px;
     /*border: 1px solid #ebebeb;*/
     /*padding: 24px;*/
 }
</style>
