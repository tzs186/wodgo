<template>
  <div class="classify">
    <div class="classify-title clearfix">
      <div class="classify-title-link text-right"><a href="index.php" class="act">分类</a></div>
      <div class="classify-title-link text-left"><a href="nation.php">国家</a></div>
    </div>
    <!--产品列表-->
    <div class="classify-list clearfix">
      <div class="classify-list-fl">
        <ul class="goodsLink ">
          <template v-for="(item,index) in classList">
            <li @click="selectedList(item.ID)" :class="classIndex==item.ID?'act':''">
              <span>{{item.name}}</span>
            </li>
          </template>
        </ul>
      </div>
      <div class="classify-list-fr">
        <template v-for="(item , index) in classDataList">
          <div v-show="classDataListIndex==index?true:false">
            <a href="" class="">
              <img src="../../assets/img/goods_banner.jpg" class="disblock" alt="">
            </a>
            <div class="goods-con clearfix">
              <div v-for="(items , index) in item.data" class="goods-con-list">
                <h5 class="goods-con-list-h">{{items.title}}</h5>
                <div class="clearfix">
                  <div class="col-3-1   xs-padding  text-center" v-for="(child , index) in items.data">
                    <router-link :to="{path: 'classes', query: {ID: child.ID }}">
                      <div class="goodsImg ui-flex justify-center center">
                        <img :src="child.url" alt="">
                      </div>
                      <h5 class="font-size13 overtext">{{child.name}}</h5>
                    </router-link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <v-footers></v-footers>
  </div>
</template>

<script>

  import vFooters from "@/components/foot"
  import {IndexGoods} from "@/api/api"

  export default {
    name: "classify",
    data() {
      return {
        classIndex: "0",
        classList: [
          {name: "母婴用品", ID: '0'},
          {name: "护肤彩妆", ID: '1'},
          {name: "生活日用", ID: '2'},
          {name: "保健用品", ID: '3'},
          {name: "时尚轻奢", ID: '4'},
          {name: "休闲食品", ID: '5'}
        ],
        classDataListIndex: "0",
        classDataList: [
          {
            data: [
              {
                title: "婴儿",
                data: [
                  {url: "http://www.wodgo.com/Uploads/image/20190507/20190507101734487857.jpg", name: "奶粉", ID: "1"},
                  {url: "http://www.wodgo.com/Uploads/image/20190505/20190505151022303630.jpg", name: "奶瓶", ID: "2"},
                  {url: "http://www.wodgo.com/Uploads/image/20190507/20190507154052897427.jpg", name: "奶嘴", ID: "3"},
                  {url: "http://www.wodgo.com/Uploads/image/20190507/20190507101825886560.jpg", name: "纸尿裤", ID: "4"},
                  {url: "http://www.wodgo.com/Uploads/image/20190505/20190505151139177533.jpg", name: "拉拉裤", ID: "5"},
                  {url: "http://www.wodgo.com/Uploads/image/20190505/20190505151228937967.jpg", name: "婴儿洗护", ID: "6"},
                  {url: "http://www.wodgo.com/Uploads/image/20190505/20190505151318873372.jpg", name: "婴儿餐具", ID: "7"},
                  {url: "http://www.wodgo.com/Uploads/image/20190505/20190505151349561833.jpg", name: "婴儿日用", ID: "8"},
                ]
              },
              {
                title: "孕妇",
                data: [
                  {url: "http://www.wodgo.com/Uploads/image/20190507/20190507104258620666.jpg", name: "哺乳营养品", ID: "1"},
                  {url: "http://www.wodgo.com/Uploads/image/20190505/20190505151648913766.jpg", name: "妊娠护理", ID: "2"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506151244686970.jpg", name: "孕房护理", ID: "3"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506150317771216.jpg", name: "产后用品", ID: "4"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506154133322766.jpg", name: "孕妇奶粉", ID: "5"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506154218618202.jpg", name: "吸奶器", ID: "6"},
                ]
              },
            ]
          },
          {
            data: [
              {
                title: "护肤",
                data: [
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506105147200913.jpg", name: "面膜", ID: "1"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506105205535158.jpg", name: "爽肤水", ID: "2"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506115127684943.jpg", name: "肌底液", ID: "3"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506115847592705.jpg", name: "精华", ID: "4"},
                ]
              }
            ]
          },
          {
            data: [
              {
                title: "清洁消毒",
                data: [
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506184232115912.jpg", name: "清洁剂", ID: "1"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506184248429433.jpg", name: "消毒剂", ID: "2"},
                ]
              },
            ]
          },
          {
            data: [
              {
                title: "成人",
                data: [
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506152345127602.jpg", name: "通用", ID: "1"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506152714790902.jpg", name: "女性", ID: "2"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506152402602101.jpg", name: "男性", ID: "2"},
                ]
              },
            ]
          },
          {
            data: [
              {
                title: "箱包",
                data: [
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506174629271828.jpg", name: "手提包", ID: "1"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506174646806364.jpg", name: "单肩包", ID: "2"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506174712354401.jpg", name: "双肩包", ID: "2"},
                ]
              },
            ]
          },
          {
            data: [
              {
                title: "酒类",
                data: [
                  {url: "http://www.wodgo.com/Uploads/image/20190505/20190505162426923014.jpg", name: "红酒", ID: "1"},
                  {url: "http://www.wodgo.com/Uploads/image/20190506/20190506175614271904.jpg", name: "白酒", ID: "2"},
                ]
              },
            ]
          },
        ]
      }
    },
    mounted() {

    },
    methods: {
      selectedList(Index) {
        this.classIndex = Index;
        this.classDataListIndex = Index;
      },
    },
    components: {
      vFooters
    }
  }
</script>

<style scoped lang="less">
  /*产品分类*/
  .classify {
    padding-bottom: 50px; /*no*/
    height: 100%;
  }

  .classify-title {

    line-height: 39px; /*no*/
    border-bottom: 1px solid #ececec;
    margin: 0 auto;
    display: flex;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    background: #fff;

  }

  .classify-title-link {
    flex: 1;
  }

  .classify-title-link a {
    display: inline-block;
    padding: 0 0.1rem;
    border-bottom: 3px solid transparent;
    margin: 0 0.6rem;
  }

  .classify-title-link a.act {
    border-bottom: 3px solid #f03c3c;
    font-size: 17px; /*no*/
    font-weight: 600;
  }

  .classify-list {
    position: relative;
    padding-top: 40px; /*no*/
  }

  .classify-list-fl {
    width: 150px;
    position: fixed;
    left: 0;
    top: 42px; /*no*/
    bottom: 50px; /*no*/
    z-index: 9;
    background: #f6f6f6;
    overflow-y: scroll;
  }

  .goodsLink li {
    height: 100px;
    text-align: center;
    display: table;
    width: 100%;
  }

  .goodsLink li span {
    display: table-cell;
    vertical-align: middle;
    font-size: 12px; /*no*/
    position: relative;
  }

  .goodsLink li.act {
    background: #fff;
    font-size: 14px; /*no*/
    color: #000000;
  }

  .goodsLink li.act span {
    font-size: 14px; /*no*/
    color: #000000;
  }

  .goodsLink li.act span:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 35%;
    width: 3px; /*no*/
    height: 30px;
    background: #f03c3c;
  }

  .classify-list-fr {
    margin-left: 150px;
    padding: 10px; /*no*/
    position: relative;
    background: #fff;
  }

  .goods_banner {
    display: block;
  }

  .goods-con-list {
    padding: 0.2rem 0;
    border-bottom: 1px solid #ececec;
  }

  .goods-con-list-h {
    color: #141414;
    line-height: 30px;
    font-size: 14px; /*no*/
  }

  .goods-con-list-a {
    display: block;
    width: 100%;
    margin-bottom: 15px;
  }

  .goodsImg {
    width: 100%;
    height: 180px;
    margin-bottom: 0.1rem;

  }

  .brand .goodsImg {
    border: 1px solid #fafafa; /*no*/
  }

  .goods-con .goods-con-list:last-child {
    border-bottom: none;
  }
</style>
