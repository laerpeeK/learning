<template>
  <div>
    <h1>{{userId}}</h1>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId(){
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
