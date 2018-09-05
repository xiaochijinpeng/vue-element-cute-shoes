<template>
  <div id="app">
    <el-container direction="vertical">
      <c-header v-if="showHeader"></c-header>
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
  },
  computed: {
    showHeader () {
      return this.$route.path !== '/login'
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
