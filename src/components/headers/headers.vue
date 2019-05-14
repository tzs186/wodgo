<template>
    <div class="headers clearfix">
      <div class="head-fl fl" @click="backUrl()">
        <i class="fa fa-angle-left   fa-3x"></i>
      </div>
      <div class="headCenter fl text-center font-size16 ">
        {{headData.msg}}
      </div>
      <div class="head-fl fl" v-if="headData.rightShow">
        <div @click="childClickEvent">
          {{headData.rightText}}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      props:{
        headData:{
          type:Object,
          default:{}
        }
      },
      data(){
        return {
          switchs:false
        }
      },

      methods:{
        backUrl(){
          var that=this;
          this.$router.push({path:that.headData.backUrl})
        },
        childClickEvent(){
          this.switchs=this.switchs==false?true:false;
          this.$emit('parentClick',this.switchs)
        }
      }

    }
</script>

<style scoped lang="less">
  .hei{height: 70px;line-height: 70px}
  .headers{
    width: 100%;
     position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 99;
    background: #fff;

    .head-fl{
      width: 15%;
      text-align: center;
      /*font-size: 32PX;*/
      .hei
    }
    .headCenter{
      width: 70%;
      .hei;
    }

  }
</style>
