<template>
    <el-aside width="200px" class="sidemenu" >
        <el-menu v-if="menu_data.length>0">
            <div v-for="menu in menu_data" :key="menu.name">
                <el-submenu v-if="menu.hasSub" index="menu.name" :key="menu.name">
                    <template slot="title"><i :class="menu.logo"></i>{{menu.name}}</template> 
                    <div v-for="sub in menu.sub" :index="sub.name" :key="sub.name" >
                        <el-submenu v-if="sub.hasSub" index="sub.name" v-for="end in sub.sub" :key="end.name">
                        </el-submenu>
                        <el-menu-item v-else index="sub.name">
                            <template slot="title"><i :class="sub.logo"></i>{{sub.name}}</template>
                        </el-menu-item>
                    </div>
                </el-submenu>
                <el-menu-item v-else index="menu.name">
                    <template slot="title"><i :class="menu.logo"></i>{{menu.name}}</template>
                </el-menu-item>
            </div>
            <!-- <el-submenu v-for="menu in menu_data" :index="menu.name" :key="menu.name" :menu-data="menu">
                <template slot="title"><i :class="menu.logo"></i>{{menu.name}}</template>
                <el-menu-item index="1-1">选项1</el-menu-item> -->
                <!-- <el-menu-item index="1-2">选项2</el-menu-item>
                <el-submenu v-if="menu.sub.length>1" >
                    <el-menu-item index="sub.name" v-for="sub in menu.sub" :key="sub.name">{{sub.name}}</el-menu-item>
                </el-submenu>
            </el-submenu>
            <div>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            </div> -->
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
