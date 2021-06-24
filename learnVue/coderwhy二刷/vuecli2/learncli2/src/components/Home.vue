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
  created() {
  },
  destroyed() {
    console.log('destroyed')
  },
  activated() {
    this.$router.push(this.path)
  },
  deactivated() {

  }
}
</script>

<style scoped>

</style>
