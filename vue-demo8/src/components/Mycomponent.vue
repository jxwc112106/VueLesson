<template>
    <p>这是子组件</p>
    <button @click="sendHandle()">点击传递</button>
</template>

<script>
export default {
    name: 'my-component',
    data() {
        return {
            message:"子组件的数据"
        }
    },
    methods: {
        sendHandle() {
            // 两个参数
            // 字符串：用于对事件类型进行解释
            // 需要传递的参数
            this.$emit("onEvent",this.message)
        }
    }
}

</script>


<style>

</style>