<template>
  <el-card>
    <login-form></login-form>
  </el-card>
</template>

<script>
import LoginForm from '../components/LoginForm'

export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  width: 400px;
  margin: 200px auto 0;
}
</style>
