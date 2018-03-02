<template>
  <div id="app">
    <div class="nav">
      <div class="base-width">
        <a class="left" href="https://github.com/">
          <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          <span class="title">{{title}}</span>
        </a>
        <div class="right" v-show="token" @click="clickLogout">登出</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'token',
      'title'
    ])
  },
  methods: {
    clickLogout() {
      this.logout()
      this.$router.push({
        path: '/'
      })
    },
    ...mapActions([
      'logout'
    ])
  }
}
</script>

<style scoped lang="less">
#app {
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: black;
  }
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .base-width{
    width: 1200px;
    margin: 0 auto;
  }
  .nav{
    padding: 10px;
    border-bottom: 1px solid black;
    overflow: hidden;
    font-size: 20px;
    .left {
      float: left;
      svg {
        vertical-align: middle;
      }
      .title {
        margin-left: 10px;
        vertical-align: middle;
      }
    }
    .right {
      float: right;
      vertical-align: middle;
      cursor: pointer;
    }
  }
}
</style>