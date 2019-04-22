<template>
  <div class="">
    <banner :listImg="listImg" :speed="speed" ></banner>
  </div>
</template>

<script>
  import banner from "@/components/Swiper"
  export default {
    name: "index",
    data(){
      return{
        speed:"1",
        indexId:"2",
        listImg:[
          {url:require("../../assets/img/banner1.jpg")},
          {url:require("../../assets/img/banner2.jpg")},
          {url:require("../../assets/img/banner1.jpg")},
          {url:require("../../assets/img/banner2.jpg")},
          {url:require("../../assets/img/banner1.jpg")},

          ]
      }
    },
    components: {
      banner
    }
  }
</script>

<style scoped>

</style>
