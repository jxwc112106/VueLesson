<template>
  <div class="hello">
    <p>{{ chengpin.title }}</p>
  </div>
</template>

<script>
//在改组件中引入
// import axios from "axios"
// import querystring from "querystring"

export default {
  name: 'HelloWorld',
  data() {
    return {
      chengpin:{}
    }
  },
  mounted() {
    // axios({
    //   method:"get",
    //   url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
    // }).then(res => {
    //   console.log(res.data);
    //   this.chengpin = res.data.chengpinDetails[0]
    // })
    //快捷方式
    // axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php").then(res =>{
    //   console.log(res.data)
    // })
    // axios({
    //   method: "post",
    //   url: "http://iwenwiki.com/api/blueberrypai/login.php",
      // data: querystring.stringify({
      //   user_id: "iwen@qq.com",
      //   password: "iwen123",
      //   verification_code: "crfvw"
      // })
    // }).then(res => {
    //   console.log(res.data);
    // })
    // 快捷方式
    // axios.post("http://iwenwiki.com/api/blueberrypai/login.php", querystring.stringify({
    //     user_id: "iwen@qq.com",
    //     password: "iwen123",
    //     verification_code: "crfvw"
    //   })).then(res => {
    //   console.log(res.data)
    // })
    this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php").then(res =>{
      console.log(res.data)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
