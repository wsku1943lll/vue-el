<template>
    <div class="home">
    <el-container>
        <el-header class="header" height="50px">
            <top-header/>
        </el-header>
    </el-container>
    <el-container>
        <el-aside width="200px">
            <side-menu/>
        </el-aside>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
    </div>
</template>

<script>
    import TopHeader from "../components/topheader";
    import SideMenu from "../components/sidemenu"
    import BottomFotter from "../components/btmfooter"
    export default {
        name: "home",
        components: {TopHeader,SideMenu,BottomFotter}
    }
</script>

<style scoped>
    .header{
        padding: 0;
        background-color:gray;
    }
</style>
