<template>
  <div>
    Home
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log('Home')
  },
  destroyed() {
    console.log('destroyed')
  },
  activated() {
    this.$router.push(this.path)
  },
  //组件内导航守卫
  beforeRouteLeave(to, from, next){
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>

</style>
