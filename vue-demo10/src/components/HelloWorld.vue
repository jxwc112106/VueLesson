<template>
  <div class="hello">
    <swiper :modules="modules" :pagination="{ clickable: true }">
      <swiper-slide>
        <img src="../assets/girls1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/girls2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/grils3.jpg" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination } from 'swiper'; //添加导航栏圆点
import { Swiper, SwiperSlide } from 'swiper/vue'; //轮播图
import 'swiper/css';
import 'swiper/css/pagination';
export default {
  name: 'HelloWorld',
  data() {
    return{
      modules: [ Pagination ]
    } 
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%
}
</style>
