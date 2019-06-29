<template>
  <div class="goods bg-gray">
    <hreaderBack :titleData="headerData"></hreaderBack>
    <banner :listImg="listImg" :speed="preView" :opc="opc"></banner>
    <div class="goodsTop">
      <div class="coldb3822">
        <em>￥</em>
        <span class="font-size19 font-weight6">1380.00</span>
        <span class="badge"  style="vertical-align: top">普通</span>
      </div>
      <p class="coldb3822 font-size14 margin-bottom">¥1280.00+100积分</p>
      <div class="details-h text-elli-2 font-size17 col333 font-weight6 margin-bottom" style=" ">韩国 WHOO/后 天气丹花献光彩紧颜系列套装  6件套</div>
      <div class="col999 font-size12">
        <p class="margin-bot1">
          <img src="../../assets/img/aodaliya.jpg" style="width: 0.4rem;vertical-align: -0.04rem;" alt="">
          <span>韩国品牌 · WHOO/后 </span>
        </p>
        <p>世界购自营发货 · 税费(包税) · 不支持7天无理由退货</p>
      </div>
    </div>
    <div class="goodsBrand bg-fff">
      <div class="goods_row_tit ">
        <div class="col999 margin-right w10">已选</div>
        <div class="goods_row_content">1件</div>
      </div>
      <div class="goods_row_tit ">
        <div class="col999 margin-right w10">运费</div>
        <div class="goods_row_content">包邮</div>
      </div>
    </div>
    <div class="  bg-fff brandContent">
      <img src="../../assets/img/goods-details-brand.jpg" class="brandContentImg" alt="">
      <div class="brandContentText flex1">
        <h4 class=" margin-bottom col333 font-size14  " style="padding-top: 0.1rem"> Bellamy's/贝拉米 </h4>
        <div class="font-size13">在售商品<span class="coldb3822">200</span>件</div>
      </div>
      <div class="brandContentJr font-size12"><span class="coldb3822">进入品牌</span> <i class="fa fa-angle-right"></i>
      </div>
    </div>
    <div class="like-title bg-fff font-size16 font-weight6 padding2  text-center ">猜你喜欢</div>
    <div class="goodsLike clearfix bg-fff">
      <newProduct :newProduct="newProduct"></newProduct>
    </div>
    <div class="image-text bg-fff">
      <div class="image-text-title">
        <img src="../../assets/img/img-left.png" class="image-text-title-img left  " alt="">
        <img src="../../assets/img/img-left.png" class="image-text-title-img   right" alt="">
        <span>图文详情</span>
      </div>
    </div>
    <div class="image-text">
      <img src="../../assets/img/img-text.jpg" alt="">
      <img src="../../assets/img/img-text1.jpg" alt="">
    </div>
    <div class="de_btn_bar">
      <div class="icon_btn">
        <i class="fa fa-headphones  coldb3822 fa-lg"></i>
        <span class="txt">在线顾问</span>
      </div>
      <div class="icon_btn">
        <i class="fa fa-bank fa-lg"></i>
        <span class="txt">品牌</span>
      </div>
      <div class="icon_btn" @click="routerLinkCart">
        <i class="fa fa-shopping-cart fa-lg"></i>
        <span class="txt">购物车</span>
      </div>
      <div class="btn_group">
        <div class="ui-flex">
          <div class="btn btn_orange bg-ff9600" id="addCart2">加入购物车</div>
          <div class="btn btn_buy bg-de3c22" id="buyBtn2">积分换购</div>
          <!--禁止状态下新增bg-999 colfff这两个类-->
          <!--<div class="btn btn_buy bg-999 colfff">积分换购</div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import banner from "@/components/Swiper"
  import hreaderBack from "@/components/headerBack"
  import newProduct from "@/components/newProduct"

  export default {
    name: "goods",
    data() {
      return {
        headerData: {
          titleName: "商品详情",
          showForm: false
        },
        listImg: [
          {url: require("../../assets/img/banner1.jpg")},
          {url: require("../../assets/img/banner2.jpg")},
          {url: require("../../assets/img/banner1.jpg")},
          {url: require("../../assets/img/banner2.jpg")},
          {url: require("../../assets/img/banner1.jpg")},
        ],
        preView: "1",
        opc: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop: true,
          speed: 1000,
          autoplay: true,
          onTouchEnd: function () {
            swiper.startAutoplay()
          }
        },
        newProduct: [
          {
            smallimg: "http://www.wodgo.com/Uploads/image/20190415/20190415141911464416.jpg",
            name: "PINKO  女士时尚单肩斜挎包",
            type: "普通",
            price: "4200.00",
            id: '17173'
          },
          {
            smallimg: "http://www.wodgo.com/Uploads/image/20190415/20190415161819709722.jpg",
            name: "美国MK 女士手提包",
            type: "普通",
            price: "4200.00",
            id: '17173'
          },
          {
            smallimg: "http://www.wodgo.com/Uploads/image/20190412/20190412181751588363.jpg",
            name: "新西兰 A2/a2 白金婴幼儿奶粉 3段（1-3岁）900g （单罐另加10元邮费）",
            type: "保税",
            price: "4200.00",
            id: '17173'
          },
        ],
      }
    },
    mounted(){},
    methods:{
      routerLinkCart(){
        this.$router.push('/cart')
      }
    },
    components: {
      hreaderBack,
      banner,
      newProduct
    }
  }
</script>

<style scoped lang="less">
  .goodsTop {
    position: relative;
    background: #fff;
    padding: 15px;
    margin-bottom: 20px;
  }
  .goodsBrand {
    position: relative;
    padding: 0 15px 15px;
    margin-bottom: 20px;
    .goods_row_tit {
      border-bottom: 1px solid #e8e8e8;
      height: 80px;
      line-height: 80px;
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      .goods_row_content {
        display: block;
        width: 100%;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        font-size: 14px;
        color: #333;
        overflow: hidden;
      }
    }
  }
  .brandContent {
    position: relative;
    display: flex;
    padding: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
    &Img {
      display: block;
      width: 160px;
      height: 160px;
      margin-right: 15px;
    }
    &Jr {
      position: absolute;
      right: 20px;
      bottom: 30px;
      z-index: 9;
    }
  }
  .goodsLike {
    padding: 15px;
    margin-bottom: 20px;
    position: relative;
    .brand-list {
    }
  }
  .image-text-title {
    position: relative;
    text-align: center;
    width: 1.5rem;
    margin: 0 auto;
    height: 70px;
    line-height:  70px;
    font-size: 13PX;
    color: #333;
  .image-text-title-img {
      position: absolute;
      display: block;
      top: 0.4rem;
      width: 4rem;
    }
   .image-text-title-img.left {
      left: -1.55rem;
    }
    .image-text-title-img.right {
      right: -1.55rem;
    }
  }
  .de_btn_bar {
    position: fixed;
    width: 100%;
    height: 50PX;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }
  .de_btn_bar .icon_btn {
    width: 14%;
    position: relative;
    text-align: center;
    cursor: pointer;
    display: block;
    -webkit-user-select: none;
  }
  .de_btn_bar .btn_group {
    display: block;
    width: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    position: relative;
    height: 50PX;
  }
  .de_btn_bar .btn {
    position: relative;
    z-index: 10;
    line-height: 50PX;
    text-align: center;
    background: #e4393c;
    color: #fff;
    font-size: 14PX;
    cursor: pointer;
    -webkit-user-select: none;
    display: block;
    width: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    border-radius: inherit;
  }
  .de_btn_bar .icon_btn > i {
    display: block;
    width: 23PX;
    height: 20PX;
    margin: 9px auto 0;
    color: #3c3b3b;
  }
  .de_btn_bar .icon_btn .txt {
    font-size: 10PX;
    color: #999;
    display: block;
    line-height: 20PX;
  }















</style>
