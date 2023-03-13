<template>
  <div class="hello">
  <p v-if="flag">vue v-if</p>
  <p v-else>vue else</p>
  <p v-show="flag">vue v-show</p>
  <div v-if="flag">
      <p>1</p>
      <p>2</p>
      <p>3</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      flag:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
