<template>
  <div>
    Profile
    {{info}}
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed:{
    info() {
      return this.$route.query
    }
  },
  created() {
    console.log('profile created')
  },
  destroyed() {
    console.log('profile destroyed')
  }
}
</script>

<style scoped>

</style>
