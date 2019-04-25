<template>
  <div class="clearfix">
    <div class="homeNew fl" v-for="(item,index) in newProduct">
      <a href="goods.php">
        <div class="homeNewImg ui-flex justify-center center">
          <img :src="item.smallimg" alt="">
        </div>
        <h5 class="text-elli-2 homeNewName">{{item.name}}</h5>
        <h4 class="coldb3822 font-weight6  font-size13 ">￥{{item.price}}</h4>
        <div class="class_price margin-none">
          <span class="badge">{{item.type}}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "newProduct",
    props: {
      newProduct: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped lang="less">
  .homeNew {
    width: 33.33%;
    position: relative;
    margin-bottom: 0.2rem;
    padding: 10px;
  }

  .homeNewImg {
    width: 200px;
    height: 200px;
    position: relative;
  }

  .homeTheme {
    margin-top: -9%;
    /*margin-left: 4%;*/
    padding-bottom: 0.15rem;
    position: relative;
    background: #fff;
  }

  .homeNewName {
    height: 70px;
    line-height: 35px;
  }
</style>
