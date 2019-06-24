<template>
  <div class="childClass bg-gray">
    <header-backs :titleData="headerData">
      <div class="seek-screen">
        <div>默认</div>
        <div>
          <span>价格</span>
          <i class="fa fa-caret-up  seek-stack1x "></i>
          <i class="fa fa-caret-down  seek-stack2x"></i>
        </div>
        <div>
          <span>筛选</span>
          <img src="../../assets/img/filtrate.png" style="width: 12px" alt="">
        </div>
      </div>
    </header-backs>
    <div class="  clearfix">
      <div class="class-con-list" v-for="(item,index) in listdata ">
        <router-link :to="'/goods?ID='+item.ID">
          <div class="classImg ui-flex justify-center center">
            <img :src="'http://www.wodgo.com/'+item.smallimg" alt="">
          </div>
          <h5 class="text-elli-2 font-size14">{{item.name}}</h5>
          <div class="class_price">
              <span class="class_price-s coldb3822 font-size12 font-weight6">
              <em>¥ <span class="int font-size17 font-weight6">{{item.price.slice(0,item.price.indexOf("."))}}</span>{{item.price.slice(item.price.indexOf("."))}}</em>
              </span>
            <span class="badge">{{item.type}}</span>
          </div>
          <p class="font-size12 col808080">已售{{item.nub}}件</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import headerBacks from "@/components/headerBack"

  export default {
    name: "classes",
    data() {
      return {
        headerData:{
          titleName:"商品详情",
          showForm:true
        },
        listdata: [
          {
          smallimg: "Uploads/image/20190529/20190529101516226849.jpg",
          link: "goods.php?ID=19323",
          name: "资生堂惠润柔净洗发露220ml 绿野芳香",
          nub: "0",
          price: "39.00",
          score: "34.00+5积分",
          type: "完税"
        },
          {
            link: "goods.php?ID=19323",
            name: "资生堂惠润柔净洗发露220ml 绿野芳香",
            nub: "0",
            price: "39.00",
            score: "34.00+5积分",
            smallimg: "Uploads/image/20190529/20190529102558894125.jpg",
            type: "完税"
          },
          {
            link: "goods.php?ID=19570",
            name: "韩国爱茉莉美妆仙护发精油70ml 2瓶装",
            nub: "0",
            price: "104.00",
            score: "94.00+10积分",
            smallimg: "Uploads/image/20190530/20190530172858906230.jpg",
            type: "直邮"
          },
          {
            smallimg: "Uploads/image/20190529/20190529101516226849.jpg",
            link: "goods.php?ID=19323",
            name: "资生堂惠润柔净洗发露220ml 绿野芳香",
            nub: "0",
            price: "39.00",
            score: "34.00+5积分",
            type: "完税"
          },
          {
            link: "goods.php?ID=19323",
            name: "资生堂惠润柔净洗发露220ml 绿野芳香",
            nub: "0",
            price: "39.00",
            score: "34.00+5积分",
            smallimg: "Uploads/image/20190529/20190529102558894125.jpg",
            type: "完税"
          },
          {
            link: "goods.php?ID=19570",
            name: "韩国爱茉莉美妆仙护发精油70ml 2瓶装",
            nub: "0",
            price: "104.00",
            score: "94.00+10积分",
            smallimg: "Uploads/image/20190530/20190530172858906230.jpg",
            type: "直邮"
          },
          {
            smallimg: "Uploads/image/20190529/20190529101516226849.jpg",
            link: "goods.php?ID=19323",
            name: "资生堂惠润柔净洗发露220ml 绿野芳香",
            nub: "0",
            price: "39.00",
            score: "34.00+5积分",
            type: "完税"
          },
          {
            link: "goods.php?ID=19323",
            name: "资生堂惠润柔净洗发露220ml 绿野芳香",
            nub: "0",
            price: "39.00",
            score: "34.00+5积分",
            smallimg: "Uploads/image/20190529/20190529102558894125.jpg",
            type: "完税"
          },
          {
            link: "goods.php?ID=19570",
            name: "韩国爱茉莉美妆仙护发精油70ml 2瓶装",
            nub: "0",
            price: "104.00",
            score: "94.00+10积分",
            smallimg: "Uploads/image/20190530/20190530172858906230.jpg",
            type: "直邮"
          },
          {
            smallimg: "Uploads/image/20190529/20190529101516226849.jpg",
            link: "goods.php?ID=19323",
            name: "资生堂惠润柔净洗发露220ml 绿野芳香",
            nub: "0",
            price: "39.00",
            score: "34.00+5积分",
            type: "完税"
          },
          {
            link: "goods.php?ID=19323",
            name: "资生堂惠润柔净洗发露220ml 绿野芳香",
            nub: "0",
            price: "39.00",
            score: "34.00+5积分",
            smallimg: "Uploads/image/20190529/20190529102558894125.jpg",
            type: "完税"
          },
          {
            link: "goods.php?ID=19570",
            name: "韩国爱茉莉美妆仙护发精油70ml 2瓶装",
            nub: "0",
            price: "104.00",
            score: "94.00+10积分",
            smallimg: "Uploads/image/20190530/20190530172858906230.jpg",
            type: "直邮"
          },
        ],
      }
    },
    components: {
      headerBacks
    }
  }
</script>

<style scoped lang="less">
  .childClass {
    padding-top: 170px;
    position: relative;

    .seek-screen {
      display: -webkit-box !important;
      display: -webkit-flex !important;
      display: -ms-flexbox !important;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      text-align: center;
      height: 80px;

      > div {
        flex: 1;
        font-size: 14PX;
      }
    }
  }
</style>
