<template>
  <div class="hello">  
    <h3>列表渲染</h3>
    <ul>
      <li v-for="item in newList" :key="item.id">
        {{ item.title }}
      </li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      newList:[
        {
          id:1001,
          title:"今日头条1"
        },
        {
          id:1002,
          title:"今日头条2"
        },
        {
          id:1003,
          title:"今日头条3"
        },
        {
          id:1004,
          title:"今日头条4"
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
