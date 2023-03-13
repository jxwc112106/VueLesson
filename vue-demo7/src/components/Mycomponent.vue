<template>
    <p> "Props 传递数据"</p>
    <p> {{ title }}</p>
    <ul>
        <li v-for="(item,index) in ages" :key="index"> {{  item  }}</li>
    </ul>
    <!-- <p> {{ age }}</p> -->
</template>

<script>
export default{
    name: 'my-component',
    props: {
        title: {
            type:String,
            default:""
        },
        ages: {
            type:Array,
            //数组和对象必须使用函数类型返回
            default:function() {
                return []
            }
        }
    }
}

</script>

<style>

</style>