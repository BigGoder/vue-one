<template>
  <div class='container'>  
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="selectItem"
      background-color='#545C64'
      router
      >

      <el-menu-item index="home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="about">
        <i class="el-icon-menu"></i>
        <span slot="title">关于</span>
      </el-menu-item>
      <el-menu-item index="d3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="d4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>

    <div class='content'>
      <router-view></router-view>
      <!-- <Home v-show='showIndex ==0'></Home>
      <About v-show='showIndex == 1'></About>
      <D3 v-show='showIndex == 2'></D3>
      <D4 v-show='showIndex == 4'></D4> -->
    </div>
  </div>
</template>
<script>



  export default {
    data() {
      return {
        showIndex: 0
      }
    },

    mounted() {
      

    },

    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      selectItem(key){
        this.showIndex = key
      }
    }
  }
</script>
<style lang="less" scoped>
  body{
    padding: 0;
    margin: 0;
  }
  .el-menu-vertical-demo{
    width: 200px;
    height: 100vh;
  }
  .container{
    display: flex;
  }
</style>