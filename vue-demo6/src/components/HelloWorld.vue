<template>
  <div class="hello">
  <MyComponent></MyComponent> 
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue';
export default {
  name: 'HelloWorld',
  components: {
    MyComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
