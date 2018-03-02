<template>
  <div>
    <input type="password"
      v-model="token"
      placeholder="输入个人令牌 token 并回车"
      @keypress.13="click">
    <a href="https://github.com/settings/tokens/new" target="view_window">生成个人令牌 token</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      token: ''
    }
  },
  mounted() {
    this.title('登录')
  },
  methods: {
    click() {
      if (this.token) {
        this.login(this.token)
        let redirect = decodeURIComponent(this.$route.query.redirect || '/')
        this.$router.push({
          path: redirect
        })
      }
    },
    ...mapActions([
      'login',
      'title'
    ])
  }
}
</script>

<style scoped lang="less">
  div {
    input {
      width: 300px;
      margin-top: 50px;
      padding: 10px 0;
      outline: none;
      border: none;
      border-bottom: 1px solid black;
      font-size: 20px;
    }
    a {
      padding: 5px 10px;
      background: black;
      color: #fff;
      font-size: 20px;
      text-decoration: none;
      border-radius: 10px;
      cursor: pointer;
    }
  }
</style>