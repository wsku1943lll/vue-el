<template>
    <el-aside width="170px" class="sidemenu" >
        <el-menu v-if="menu_data.length>0" :collapse="isCollapse">
            <template v-for="menu in menu_data" class="menu_main">
                <el-submenu v-if="menu.hasSub" index="menu.name" :key="menu.name">
                    <template slot="title"><i :class="menu.logo"></i><span slot="title">{{menu.name}}</span></template> 
                    <template v-for="sub in menu.sub" :index="sub.name" class="menu_sec">
                        <el-submenu v-if="sub.hasSub" index="sub.name" :key="sub.name">
                            <template slot="title"><i :class="sub.logo"></i>{{sub.name}}</template> 
                            <el-menu-item v-for="end in sub.sub" :key="end.name" index="end.name">
                                <template slot="title"><i :class="end.logo"></i>{{end.name}}</template>
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-if="!sub.hasSub" index="sub.name" :key="sub.name">
                            <template slot="title"><i :class="sub.logo"></i>{{sub.name}}</template>
                        </el-menu-item>
                    </template>
                </el-submenu>
                <el-menu-item v-else index="menu.name" :key="menu.name">
                    <i :class="menu.logo"></i><span slot="title">{{menu.name}}</span>
                </el-menu-item>
            </template>
            <!-- 收起菜单按钮 -->
            <i class="el-icon-arrow-left" @click="collapse"/>
        </el-menu>
    </el-aside>
</template>

<script>
    import menuData from '../store/menu';
    export default {
        name: "sidemenu",
      data() {
        return {
          isCollapse: false,
          menu_data:menuData
        };
      },
      methods: {
        collapse(){
            this.isCollapse=!this.isCollapse;
        }
        }
    }
</script>

<style scoped>
    .el-menu{
        height: calc(100vh - 50px);
        font-size: 16px;
    }
</style>
