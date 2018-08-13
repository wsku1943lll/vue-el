<template>
    <el-container>
        <el-header>
            <topheader/>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
    import Topheader from "../components/topheader";
    export default {
        name: "home",
        components: {Topheader}
    }
</script>

<style scoped>
    .aside-menu{
        padding-left: 20px;
    }
</style>
