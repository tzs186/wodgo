<template>
    <div class="headerBack">
      <div class="seek-top clearfix">
        <div class="seek-top-fl text-center  ">
          <span   id="backStorage" @click="backStorage">
            <i class="fa fa-angle-left " style="font-size: 32px;vertical-align: -5px;"></i>
          </span>
        </div>
        <div class="seek-top-from   w70">
          <div v-if="!titleData.showForm" class="font-size14">{{titleData.titleName}}</div>
          <form v-else action="">
            <input type="text" class="seekInput" name="SearchWord">
            <button>搜索</button>
          </form>
        </div>
        <div class="seek-top-fl"></div>
      </div>
      <slot></slot>
    </div>
</template>

<script>
    export default {
      props:{
        titleData:{
          type:Object,
          default: {}
        }
      },
      methods:{
        backStorage(){
          this.$router.go(-1);//返回上一层
        }
      }
    }
</script>

<style scoped lang="less">
  .headerBack{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: #fff;
    z-index: 9;
    border-bottom: 1px solid #f4f4f4;
    .seek-top{
      height: 80px;
      display: flex;
      text-align: center;
      align-items: center;
      border-bottom: 1px solid #f4f4f4;
      &-fl{
        flex: 1;
      }
      .seekInput{
        background: #f6f6f6;

        height: 50px;
        width: 70%;
        border-radius: 25px;
        padding: 0 15px;

      }
    }
  }
</style>
