<template>
    <el-aside width="200px" class="sidemenu" >
        <el-menu v-if="menu_data.length>0">
            <div v-for="menu in menu_data" :key="menu.name" class="menu_main">
                <el-submenu v-if="menu.hasSub" index="menu.name" :key="menu.name">
                    <template slot="title"><i :class="menu.logo"></i>{{menu.name}}</template> 
                    <div v-for="sub in menu.sub" :index="sub.name" :key="sub.name" class="menu_sec">
                        <el-submenu v-if="sub.hasSub" index="sub.name" >
                            <template slot="title"><i :class="sub.logo"></i>{{sub.name}}</template> 
                            <el-menu-item v-for="end in sub.sub" :key="end.name" index="end.name">
                                <template slot="title"><i :class="end.logo"></i>{{end.name}}</template>
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-if="!sub.hasSub" index="sub.name">
                            <template slot="title"><i :class="sub.logo"></i>{{sub.name}}</template>
                        </el-menu-item>
                    </div>
                </el-submenu>
                <el-menu-item v-else index="menu.name">
                    <template slot="title"><i :class="menu.logo"></i>{{menu.name}}</template>
                </el-menu-item>
            </div>
        </el-menu>
    </el-aside>
</template>

<script>
    import menuData from '../store/menu';
    export default {
        name: "sidemenu",
      data() {
        return {
          isCollapse: true,
          menu_data:menuData
        };
      },
      methods: {

      }
    }
</script>

<style scoped>
    .el-menu{
        height: calc(100vh - 50px);
        font-size: 16px;
    }
</style>
