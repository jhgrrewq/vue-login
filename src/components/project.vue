<template>
  <ul>
    <li v-for="(item, index) in project" :key="index" @click=jump(item)>
      <div class="left project-avatar">
        <img :src="item.owner.avatar_url" alt="">
      </div>
      <div class="right">
        <div class="project-name">{{item.name}}</div>
        <!-- <div class="project-intro">{{}}</div> -->
        <div class="project-time">{{item.updated_at}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import api from '@/service/api'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      project: []
    }
  },
  mounted() {
    this.title('我的项目')
    this.getProject()
  },
  methods: {
    getProject() {
      this.$axios.get(api.project)
        .then(res => {
          console.log(res.data)
          this.project = res.data
        })
    },
    jump(item) {
      window.open(item.html_url, '_blank')
    },
    ...mapActions([
      'title'
    ])
  }
}
</script>

<style scoped lang="less">
  ul {
    padding-top: 40px;
    width: 600px;
    margin: 0 auto;
    list-style: none;
    li {
      margin-bottom: 30px;
      box-shadow: 0 0 5px gray;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 5px black;
      }
      .left {
        float: left;
        width: 150px;
        height: 150px;
        img {
          width: 100%;
          height: auto;
        }
      }
      .right{
        margin-left: 200px;
        text-align: left;
        .project-name {
          margin-top: 40px;
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: 800;
        }
      }
    }
  }
</style>