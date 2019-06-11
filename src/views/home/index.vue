<template>
  <div class="bg-f4f4f4" style="padding-bottom: 50px;">
    <div class="posrel">
      <banner :listImg="listImg" :speed="preView" :opc="opc"></banner>
      <div class="homenav clearfix">
        <div class="fl w10 xs-padding"></div>
        <div class="navSearch bg-fff fl w80 xs-padding" style="border-radius: 40px;padding: 0.25em 0.2rem">
          <form action="" class="navform">
            <i class="fa fa-search colb5b5b5"></i>
            <input type="search" class="" name="searchSeek" placeholder="请输入搜索关键字">
          </form>
        </div>
        <div class="fl w10 xs-padding text-center posrel">
          <a href="">
            <i class="fa fa-envelope-open-o colfff fa-2x"></i>
            <span class="msgnum"> 0</span>
          </a>
        </div>
      </div>
    </div>
    <div class="homeClassUl clearfix bg-fff padding-left padding-right padding-top">
      <template v-for="(item,index) in homeClasslink">
        <router-link class="homeClassUl-link w20 fl text-center" :to="{path: item.url, query: {id: item.id }}">
          <div class="homeclassimg ui-flex justify-center center">
            <img :src="item.img" alt="">
          </div>
          <h5 class="homeClassUl-h">{{item.name}}</h5>
        </router-link>
      </template>
    </div>
    <div class="clearfix   clearfix bg-fff padding-left padding-right padding-bottom">
      <h4 class="recom-title posrel padding-top padding-bottom font-weight6  ">
        <span class="col333">今日特惠</span>
      </h4>
      <div class="clearfix margin-bot1">
        <banner :listImg="listImg" :speed="preView" :opc="opcss" :setClass="adsad"></banner>
      </div>
      <h4 class="recom-title posrel   padding-bottom font-weight6  ">
        <span class="col333">类目热销榜</span>
      </h4>
      <div class="clearfix">
        <template v-for="(item,index) in recomList">
          <router-link class="fl w25 disblock" :to="{path: item.url, query: {id: item.id }}">
            <img :src="item.img" alt="">
          </router-link>
        </template>
      </div>
    </div>
    <div class="  clearfix bg-fff padding-left padding-right padding-bottom">
      <h4 class="recom-title posrel padding-top padding-bottom font-weight6  ">
        <span class="col333">新发产品</span>
        <a href="" class="fr font-size12 col808080 font-weight4">
          <span>更多</span>
          <i class="fa fa-angle-right"></i>
        </a>
      </h4>
      <newProduct :newProduct="newProduct"></newProduct>
    </div>
    <div class="margin-top">
      <h4 class="recom-title posrel padding-top padding-bottom font-weight6  ">
        <span class="col333">爆款主题推荐</span>
      </h4>
    </div>
    <themeList :themeList="themeList0"></themeList>
    <themeList :themeList="themeList1"></themeList>
    <themeList :themeList="themeList2"></themeList>
    <div class="like-title bg-fff font-size16 font-weight6 padding2  margin-bottom text-center  ">猜你喜欢</div>
    <div class="index">
      <scroll ref="myScroll" :scrollState="scrollState" :page="page" :on-refresh="onRefresh" :on-pull="onPull"
              :get-scroll-top="getTop">
        <div slot="scrollList" class="clearfix">
          <div class="class-con-list" v-for="(item,index) in listdata ">
            <a href="goods.php?ID=16791">
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
            </a>
          </div>
        </div>
      </scroll>
    </div>
    <v-footers ></v-footers>
  </div>
</template>

<script>
  import banner from "@/components/Swiper"
  import newProduct from "@/components/newProduct"
  import themeList from "@/components/themeList"
  import scroll from "@/components/v-scroll"
  import vFooters from "@/components/foot"
  import {IndexGoods} from "@/api/api"

  export default {
    name: "index",
    data() {
      return {
        list: [],
        off:true,
        scrollState: false,
        page: {
          counter: 1,
          pageStart: 1,
          pageEnd: 1,
          total: 10
        },
        counter: 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
        num: 15,  // 一次显示多少条
        pageStart: 0, // 开始页数
        pageEnd: 0, // 结束页数
        listdata: [], // 下拉更新数据存放数组
        downdata: [],  // 上拉更多的数据存放数组
        themeList0: {
          img: "http://www.wodgo.com/Uploads/image/20190407/20190407042524859573.png",
          data: [
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            },
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            },
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            },
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            }
          ]
        },
        themeList1: {
          img: "http://www.wodgo.com/Uploads/image/20190407/20190407055653836384.png",
          data: [
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            },
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            },
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            },
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            }
          ]
        },
        themeList2: {
          img: "http://www.wodgo.com/Uploads/image/20190407/20190407060351837198.png",
          data: [
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            },
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            },
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            },
            {
              smallimg: "http://www.wodgo.com/Uploads/image/20170712/20170712154814901980.jpg",
              name: "澳大利亚Jack N'Jill杰克吉尔 儿童牙膏草莓味 50g",
              title: "",
              id: "2"
            }
          ]
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
          {
            smallimg: "http://www.wodgo.com/Uploads/image/20190302/20190302132050783448.jpg",
            name: "Coach 拉链购物包",
            type: "普通",
            price: "4200.00",
            id: '17173'
          },
          {
            smallimg: "http://www.wodgo.com/Uploads/image/20181228/20181228134558357930.jpg",
            name: "JUMP法国 欧美复古风拉杆箱包多功能手提包拉杆箱包大容量拉杆包",
            type: "普通",
            price: "4200.00",
            id: '17173'
          },
          {
            smallimg: "http://www.wodgo.com/Uploads/image/20181228/20181228135531396531.jpg",
            name: "JUMP拉杆箱法国进口万向轮24英寸登机箱男女时尚旅行箱",
            type: "普通",
            price: "4200.00",
            id: '17173'
          }
        ],
        recomList: [
          {img: "http://www.wodgo.com/Uploads/image/20190407/20190407031112272725.png", id: "1", url: "apple"},
          {img: "http://www.wodgo.com/Uploads/image/20190407/20190407031118555287.png", id: "2", url: "apple"},
          {img: "http://www.wodgo.com/Uploads/image/20190407/20190407031123613696.png", id: "3", url: "apple"},
          {img: "http://www.wodgo.com/Uploads/image/20190407/20190407031132609456.png", id: "4", url: "apple"},
          {img: "http://www.wodgo.com/Uploads/image/20190407/20190407031139368453.png", id: "5", url: "apple"},
          {img: "http://www.wodgo.com/Uploads/image/20190407/20190407031148953271.png", id: "6", url: "apple"},
          {img: "http://www.wodgo.com/Uploads/image/20190407/20190407031206314439.png", id: "7", url: "apple"},
          {img: "http://www.wodgo.com/Uploads/image/20190407/20190407031211613506.png", id: "8", url: "apple"},
        ],
        adsad: "asdsad",
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
        opcss: {
          pagination: '.swiper-pagination',
          slidesPerView: 3,
          initialSlide: 1,//默认第二个
          paginationClickable: true,
          loop: true,
          speed: 1000,
          autoplay: true,
          onTouchEnd: function () {
            swiper.startAutoplay()
          }
        },
        preView: "1",
        indexId: "2",
        listImg: [
          {url: require("../../assets/img/banner1.jpg")},
          {url: require("../../assets/img/banner2.jpg")},
          {url: require("../../assets/img/banner1.jpg")},
          {url: require("../../assets/img/banner2.jpg")},
          {url: require("../../assets/img/banner1.jpg")},
        ],
        homeClasslink: [
          {"img": require("../../assets/img/banner1.png"), name: "母婴", id: "0", url: 'url'},
          {"img": require("../../assets/img/banner2.png"), name: "美妆", id: "1", url: 'url'},
          {"img": require("../../assets/img/banner3.png"), name: "日用", id: "2", url: 'url'},
          {"img": require("../../assets/img/banner4.png"), name: "保健", id: "3", url: 'url'},
          {"img": require("../../assets/img/banner5.png"), name: "食品", id: "4", url: 'url'},
          {"img": require("../../assets/img/banner6.png"), name: "服饰", id: "5", url: 'url'},
          {"img": require("../../assets/img/banner7.png"), name: "积分", id: "6", url: 'url'},
          {"img": require("../../assets/img/banner8.png"), name: "供销", id: "7", url: 'url'},
          {"img": require("../../assets/img/banner9.png"), name: "拨分", id: "8", url: 'url'},
          {"img": require("../../assets/img/banner10.png"), name: "APP", id: "9", url: 'url'}
        ]
      }
    },
    created(){
      var that=this;
      window.onscroll = function(){
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        //滚动条到底部的条件
        if(scrollTop+windowHeight==scrollHeight&&that.off){
          //写后台加载数据的函数
          //that.onRefresh();
        }
      }

    },
    mounted() {
      this.onRefresh()
    },
    methods: {
      onRefresh(mun) { //刷新回调
        let that = this;
        that.$refs.myScroll.setState(3);
        IndexGoods({page: that.counter}).then((res) => {
         if(res!=undefined){
           if( that.counter>1){
             that.listdata=that.listdata.concat(res);
           }else{
             that.listdata=res;
           }
           that.counter++;
         }else{
            that.off=false;
         }
        }).catch((error) => {
          console.log(error)
        })
      },
      onPull(mun) { //加载回调\
        let that = this;
        IndexGoods({page: that.counter}).then((res) => {
          console.log(res)
          if (res.length > 0) {
            this.listParams.p++;
            res.map((v, k) => {
              this.listdata.push(v);
            });
            this.$refs.myScroll.setState(5);
          } else {
            this.$refs.myScroll.setState(7);
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      getTop(y) {//滚动条位置
        this.indexScrollTop = y;
      },
      getList() {
        let vm = this;
        /*vm.$http.get('api/Json/IndexGoods.php').then((response) => {
         console.log(response.data)
         //vm.listdata = response.data.slice(0,15);
       }, (response) => {
         console.log('error');
       });*/
        IndexGoods().then((res) => {
          vm.listdata = res;
        }).catch((error) => {
          console.log(error)
        })
      },

    },
    components: {
      banner,
      newProduct,
      themeList,
      scroll,
      vFooters
    }
  }
</script>

<style scoped lang="less">
  .homenav {
    padding: 0.6em;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;

    .msgnum {
      position: absolute;
      top: 2px;
      right: 2px;
      text-align: center;
      font-size: 9px;
      padding: 2px 3px;
      line-height: .9;
      background-color: #dd4b39;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.5em;
      color: #fff;
    }

    .navSearch .navform input {
      border: 0;
      background: #FFF;
      min-width: 400px;
      outline: none;
      height: 50px;
      line-height: 50px;
      display: inline-block;

    }
  }

  .homeClassUl {
    &-link {
      display: block;

      .homeClassUl-h {
        margin: 10px 0 19px;
      }

      .homeclassimg {
        width: 100px;
        height: 100px;
        margin: 0 auto;
      }
    }
  }

</style>
