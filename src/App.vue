<template>
  <div id="app">
    <el-container direction="vertical">
      <c-header></c-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    'c-header': Header
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
