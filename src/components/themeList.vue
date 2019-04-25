<template>
  <div class="clearfix bg-fff">
    <img :src="themeList.img" alt="">
    <div class="homeTheme">
      <div class="homeThemeOwl" >
        <div class="clearfix homeThemeOwl-y"    :style="{width:(widths*lengths)+'px'}">
          <div v-for="(item,index) in themeList.data " class=" homeThemeOwl-div">
            <div class="item">
              <a href="goods.php">
                <div class="ThemeImg ui-flex justify-center center">
                  <img :src="item.smallimg" alt="">
                </div>
                <div class="textName">
                  <h5 class="overtext col333 font-size15 margin-bot1">{{item.name}}</h5>
                  <p class="font-size12 col808080 overtext">{{item.title}}</p>
                </div>
              </a>
            </div>
          </div>
          <div ref="abc"  class="homeThemeOwl-div ">
            <div class="item" style="border: #EEE 1px solid;">
              <a href="class.php">
                <div class="ThemeImg ui-flex justify-center center">
                  <img src="../assets/img/ShowMore.png" alt="">
                </div>
                <div class="textName">
                  <h5 class="overtext col333 font-size15">查看更多</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: "themeList",
    data(){
      return{
        lengths:1,
        widths:2
      }
    },
    props: {
      themeList: {
        type: Object,
        default: {}
      }
    },
    computed:{

    },
    methods:{

    },
    mounted() {
      var that = this;
      that.lengths=this.themeList.data.length+1;
      that.widths = this.$refs.abc.offsetWidth;

    }
  }
</script>

<style scoped lang="less">
  .homeTheme {
    margin-top: -9%;
    /*margin-left: 4%;*/
    padding-bottom: 0.15rem;
    position: relative;
    background: #fff;
  }

  .ThemeImg {
    position: relative;
    width: 240px;
    height: 240px;
    margin: 0 auto;
  }
  .homeThemeOwl{
    overflow: hidden;
    overflow-x: scroll;

    -webkit-overflow-scrolling:touch;
  }

  .homeThemeOwl .item {
    border: #EEE 1PX solid;
    border-right: 0;
  }

  .homeThemeOwl .item .textName {
    min-height: 100px;
    text-align: center;
    border-top: #EEE 1PX solid;
    padding: 6px;
    position: relative;
  }
  .homeThemeOwl-div{
    width:750/2.5px;
    float: left;
  }
  .like-title {
  }
</style>
