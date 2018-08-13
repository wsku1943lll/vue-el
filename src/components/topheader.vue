<template>
    <el-menu mode="horizontal" background-color="#545c64"
             active-text-color="#ffd04b" text-color="#FFFFFF"
    router>
      <el-menu-item index="1">
        首页
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">积分系统</template>
        <el-menu-item index="score" route="/home/score">查看积分</el-menu-item>
        <el-menu-item index="/login">提交证明</el-menu-item>
      </el-submenu>
        <el-menu-item index="npacul" route="/home/npacul">不良贷款计算</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "topheader"
    }
</script>

<style scoped>

</style>
