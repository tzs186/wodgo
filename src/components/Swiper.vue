<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg">
        <img :src="str.url" alt="">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>


</template>

<script>
  import Swiper from 'swiper';
  import '@/styles/swiper/swiper.min.css';

  export default {
    name: "Swiper",
    props: {
      speed:{
        type:String,
        default: "500"
      },
      listImg:{
        type:Array,
        default: []
      }
    },
    mounted() {
      var that=this;
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,

        speed: 4000,
        autoplay: true,
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      });
    }
  }
</script>

<style scoped lang="less">
  .swiper-container {
    width: 100%;
    height: 500px;

    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      display: inline-block;
      background: #7c5e53;
    }
  }


</style>
