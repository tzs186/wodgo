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
    <div class="">
      <div class="clLayer"></div>
      <div class="clLayerContent">
        <div class="clLayerContentInner">
          <div class="mod_list margin-bottom">
            <div class="mod_list_inner">
              <div class="big">价格区间</div>
              <div class="right">
                <span class="words_10"></span></div>
            </div>
            <div class="mod_list_price mod_list_inner ui-flex">
              <input type="tel" class="mod_list_price_inp">
              <div class="mod_list_price_hyphen"></div>
              <input type="tel" class="mod_list_price_inp">
            </div>
          </div>

          <template v-for="(item,index) in screenData">
            <div class="mod_list">
              <div class="mod_list_inner">
                <div class="big">{{item.titles}}</div>
                <div class="right">
                  <span class="words_10">{{classText[index]}}</span>
                  <span class="mod_list-off" v-on:click="dianji(index)">全部 <i class="fa fa-angle-down"></i></span>
                </div>
              </div>
            </div>
            <div class="mod_list clearfix bg-fff padding2 " :class='{"mod_list-over":classItem[index]}'>
              <div class="tags_selection text-elli " v-for="(childItem,indexs) in item.data"
                   :class="{'selected':classArr[index][indexs]}"
                   @click="classTextSelect(index,childItem.name,childItem.id,indexs)">{{childItem.name}}
              </div>
            </div>
          </template>
        </div>
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
        act: -1,
        classItem: [],
        classText: [],
        classArr: [[], []],
        headerData: {
          titleName: "商品详情",
          showForm: true
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
        screenData: [
          {
            titles: "品牌",
            data: [
              {id: '1', name: "Cow＆Gate/牛栏"},
              {id: '2', name: "Devondale/德运"},
              {id: '3', name: "Blackmores/澳佳宝"},
              {id: '4', name: "新贝"},
              {id: '5', name: "施巴"},
              {id: '6', name: "池田模范堂"},
            ]
          },
          {
            titles: "产地",
            data: [
              {id: '7', name: "新西兰"},
              {id: '8', name: "日本"},
              {id: '9', name: "英国"},
              {id: '10', name: "韩国"},
              {id: '11', name: "美国"},
              {id: '12', name: "外国"},
            ]
          },
        ]

      }
    },
    methods: {
      dianji(index) {
        if (this.classItem[index]) {
          this.$set(this.classItem, index, false)
        } else {
          this.$set(this.classItem, index, true)
        }
      },
      classTextSelect(index, NameS, Id, childIndex) {
        let arr = [];
        if (this.classText[index]) {
          if (this.classArr[index][childIndex]) {
            this.$set(this.classText, index, this.classText[index].replace(NameS, ""));
            this.$set(this.classArr[index], childIndex, false);
          } else {
            this.$set(this.classArr[index], childIndex, true);
            this.$set(this.classText,index, this.classText[index]+" "+NameS);
          }
        } else {
          this.$set(this.classArr[index], childIndex, true);
          this.$set(this.classText,index,  NameS);
        }

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

    .clLayer {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: 1;
      visibility: visible;
      -webkit-transition: opacity .5s ease, visibility .5s ease;
      transition: opacity .5s ease, visibility .5s ease;
      -moz-transition: opacity .5s ease, visibility .5s ease;
      -o-transition: opacity .5s ease, visibility .5s ease;
      background-color: rgba(0, 0, 0, .7);
      z-index: 301;
    }

    .clLayerContent {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 302;

      width: 85%;
      background-color: #f8f8f8;

      &Inner {
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
        padding-bottom: 50PX;

        .mod_list {
          background: #fff;
          position: relative;

          &_inner {
            height: 70px;
            line-height: 50px;
            padding: 10px 10PX;
            font-family: arial;
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;

            .big {
              overflow: hidden;
              font-size: 16PX;
              color: #333;
              text-overflow: ellipsis;
            }

            .right {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              flex: 1;
              margin-left: 10px;
              text-align: right;
              font-size: 12PX;
              color: #999;

              .words_10 {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
                vertical-align: top;
                text-align: right;
                max-width: 110PX;
                color: #f03c3c !important;
              }
            }

            .mod_list_price_inp {
              height: 50px;
              border: 0;
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              flex: 1;
              width: 100%;
              -webkit-appearance: none;
              appearance: none;
              text-align: center;
              border-radius: 25px;
              font-size: 12px;
              color: #333;
              background-color: #f7f7f7;
            }

            .mod_list_price_hyphen {
              height: 40px;
              width: 50px;
              position: relative;

              &::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -15px;
                width: 30px;
                height: 2px;
                background-color: #6d6d6d;
              }
            }
          }

          .tags_selection {
            float: left;
            width: 31%;
            height: 50px;
            line-height: 50px;
            margin-right: 2.5%;
            margin-bottom: 10px;
            position: relative;
            display: block;
            padding: 0 10px;
            color: #2e2e2e;
            background-color: #f7f7f7;
            border-radius: 25px;
            font-size: 12px;
            text-align: center;
            border: 1px solid transparent;

            &:nth-child(3n) {
              margin-right: 0;
            }
          }

          .selected {
            color: #f03c3c;
            border: 1px solid #f03c3c;
            background: #fff;
          }
        }
      }
    }
  }

  .mod_list-over {
    height: 76px;
    overflow: hidden;
  }
</style>
