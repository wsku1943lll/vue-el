<template>
    <div class="home">
    <el-container>
        <el-header class="header" height="50px">
            <top-header/>
        </el-header>
    </el-container>
    <el-container>
        <el-aside :width="sideWidth">
            <div class="side-inf">dashboard</div>
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
        components: {TopHeader,SideMenu,BottomFotter},
        computed:{
        	sideWidth(){
        		return this.$store.state.sideWidth;
            }
        }
    }
</script>

<style scoped>
    .header{
        padding: 0;
        background-color:#fff;
    }
    .side-inf{
        height: 100px;
        background-image: url('../assets/img/side-sea.jpg');
        filter: opacity(70%);
    }
    .side-inf:hover{
        filter: opacity(90%);
    }
</style>
