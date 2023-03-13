<template>
  <div class="hello">
   <h1>{{ msg }}</h1>
  </div>
</template>

<script>

import api from  "../api/index"

export default {
  name: 'HelloWorld',
  mounted() {
     api.getChengpin().then(res =>{
      console.log(res.data)
     })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
