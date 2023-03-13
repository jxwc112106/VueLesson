<template>
  <div class="hello">
    <button v-on:click="counter += 1"> 点击:counter = {{ counter }}</button>
    <button @click="clickHandle">Button</button>
    <p>{{ message }}</p>
    <button @click="say('hi')">say hi</button>
    <button @click="say('what')">say what</button>
    <ul>
      <li @click="say(item)" v-for="(item,index) in names" :key="index"> {{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      counter:1,
      message:"消息通知",
      names: [ "zhangsan", "lisi", "wangwu"]
    }
  },
  methods: {
    clickHandle(event) {
      // 在事件中, 读取data中属性,需要使用this.属性
      this.message = "消息被撤回"
      // 'event' 是原生 DOM event
      console.log(event);
      event.target.innerHTML = "点击之后"
    },
    say(data) {
      console.log(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
