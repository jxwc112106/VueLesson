<template>
  <div class="hello">
  <input type="text" v-model="username">
  <input type="text" v-model.lazy="password">
  <p>{{ username }}</p>
  <p>{{ password }}</p>
  <button @click="clickGetUserName()">获取用户名</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      username: " ",
      password: " "
    }
  },
  methods: {
    clickGetUserName() {
      console.log(this.username);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
