<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Mycomponent :title="title" :ages="ages"></Mycomponent>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Mycomponent from './components/Mycomponent.vue'

export default {
  name: 'App',
  data() {
    return {
      title:"这是一个标题",
      ages: ["12","23","34"]
    }
  },
  components: {
    Mycomponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
