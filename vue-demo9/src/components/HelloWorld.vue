<template>
  <div class="hello">
  <button @click="message='数据'">点击</button>
  <p> {{  message }}</p>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data() {
     return {
        message:""
     }
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    // 设置网络请求
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("onUpdated")
  },
  beforeUnmount() {
    //处理高消耗的组件
    console.log("beforeUnmount")
  },
  unmounted() {
    console.log("unmounted")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
