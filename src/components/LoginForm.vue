<template>
  <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules">
    <p>Cute Shoes</p>
    <el-form-item prop="userName">
      <el-input v-model="loginForm.userName" placeholder="请输入用户名称"></el-input>
    </el-form-item>
    <el-form-item prop="userPassword">
      <el-input type="password" v-model="loginForm.userPassword" placeholder="请输入用户密码">
        <el-button type="info" slot="append">忘记密码</el-button>
      </el-input>
    </el-form-item>
    <el-button type="primary" @click="login">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        userName: '',
        userPassword: ''
      },
      loginFormRules: {
        userName: [
          {
            required: true,
            message: '用户名称不能为空',
            trigger: 'blur'
          }
        ],
        userPassword: [
          {
            required: true,
            message: '用户密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {

        } else {
          return false
        }
      })
    },
    forgetPassword () {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Monoton');

.el-form {
  p {
    color: #9c27b0;
    font-family: 'Monoton', cursive;
    text-align: center;
    font-size: 32px;
    line-height: 40px;
    height: 40px;
  }

  .el-button {
    width: 100%;
  }
}
</style>
