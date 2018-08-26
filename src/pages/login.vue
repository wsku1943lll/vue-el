<template>
    <div>
    <el-row class="y-center" />
    <el-row type="flex" justify="center">
        <el-col :span="6">
            <el-card>
            <el-form ref="form" :model="form">
                <el-form-item label="用户名">
                    <el-input v-model="form.username" placeholder="人事编号"/>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="form.password"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onsubmit">登陆</el-button>
                    <el-button type="primary" @click="onregister">注册</el-button>
                </el-form-item>
            </el-form>
            </el-card>
        </el-col>
    </el-row>
    </div>
</template>

<script>
    import {router} from '@/router'
    import qs from 'qs'
    export default {
        name: "login",
        data(){
            return {
                form:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            onsubmit(){
                this.$axois({
                    method:'post', 
                    url:'http://localhost/api/login',
                    data:qs.stringify({
                        username:this.form.username,
                        password:this.form.password
                    }),
                    headers:{'Content-Type':'application/x-www-form-urlencoded'}
                }).then(rsp=>{
                    if(rsp.data['code']==='0000') {
                        this.$store.commit('login', rsp.data);
                        router.push('/home');
                    }else{
                        alert(rsp.data['message']);
                        next(false);
                    }
                }).catch(error=>{
                    console.log(error);
                })
            },
            onregister(){
                // alert('register');
                router.push('/register');
            }
        }
    }
</script>

<style scoped>
.login{
    position: absolute;
    height: 300px;
    width: 400px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.y-center{
    height:20vh;
}
</style>
