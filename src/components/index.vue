<template>
  <div>
    <router-link :to="{path: '/project'}" tag="button" class="view">查看我的项目</router-link>
  </div>
</template>

<script></script>

<style scoped lang="less">
  .view{
    margin-top: 50px;
    padding: 5px 10px;
    font-size: 20px;
    text-decoration: none;
    background: black;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
</style>