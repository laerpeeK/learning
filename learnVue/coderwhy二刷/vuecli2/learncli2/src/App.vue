<template>
  <div>
    <router-link to="home">首页</router-link>
    <router-link to="about">关于</router-link>
    <router-link to="user">用户</router-link>
    <router-link to="profile">档案</router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>

</style>
