<template>
  <div class="hello">
   <h3>跨域解决方案</h3>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  mounted() {
    //跨域地址：http://iwenwiki.com/api/FingerUnion/list.php
    //跨域地址：/api/FingerUnion/list.php
    axios.get("api/FingerUnion/list.php").then(
        res =>{
          console.log(res.data);
        }   
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
