<template>
  <div id="app">
    <h1>Hello Vue</h1>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link :to="'/user/'+userId">User</router-link>
    <router-link :to="{
      path: '/profile',
      query: {
        name: 'jack',
        age: 23
      }
    }">Profile</router-link>
<!--    通过代码修改路由-->
    <button @click="homeClick">首页</button>
    <button @click="profileClick">档案</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: 'jack'
    }
  },
  methods: {
    homeClick() {
      this.$router.replace('/home')
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'jack',
          age: 23
        }
      })
      console.log(this.$router)
      console.log(this.$route)
    }
  }
}
</script>

<style>

</style>
