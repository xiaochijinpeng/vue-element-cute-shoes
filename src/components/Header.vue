<template>
  <el-header :height="headerHeight">
    <p>Cute Shoes</p>
    <el-menu router :default-active="$route.path" mode="horizontal" :background-color="backgroundColor" :text-color="textColor" :active-text-color="activeTextColor">
      <el-menu-item index="/">主页</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  data () {
    return {
      headerHeight: 80 + 60 + 'px',
      backgroundColor: '#fff',
      textColor: '#9c27b0',
      activeTextColor: '#9c27b0'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Monoton');

.el-header {
  padding: 0;

  p {
    color: #9c27b0;
    font-family: 'Monoton', cursive;
    font-size: 40px;
    height: 80px;
    line-height: 80px;
    margin: 0;
    text-align: center;
  }

  .el-menu {
    border-bottom: none;
    width: 80px;
    margin: 0 auto;

    .el-menu-item {
      font-size: 20px;
    }
  }
}
</style>
