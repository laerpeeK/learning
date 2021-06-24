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
  }
}
</script>

<style scoped>

</style>
