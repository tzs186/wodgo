<template>
  <div class="footer">
    <router-link tag="a" class="footer-col" to="/">
      <img src="../assets/img/footer_1.png" class="footer-img" alt="">
      <p>首页</p>
    </router-link>
    <router-link class="footer-col" :to="{path: 'item' , query: 2}">
      <img src="../assets/img/footer_3.png" class="footer-img" alt="">
      <p>分类</p>
    </router-link>
    <router-link class="footer-col" :to="{path: 'item', query: 1}">
      <img src="../assets/img/Invite_1.png" class="footer-imgInvite" alt="">
    </router-link>
    <router-link class="footer-col" :to="{path: 'item', query: 3}">
      <img src="../assets/img/footer_2.png" class="footer-img" alt="">
      <p>购物车</p>
    </router-link>
    <router-link class="footer-col" :to="{path: 'item', query: 4}">
      <img src="../assets/img/footer_4.png" class="footer-img" alt="">
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped lang="less">
  .footer{
    height: 50PX;
    width: 100%;
    padding-top: 5PX;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    text-align: center;
    border-top:1PX solid #e3e3e3;
    background: #fff;

  }
  .footer .active p{
    color: red;
  }
  .footer-col{
    flex: 1;
    display: block;
    position: relative;

  }
  .footer-img{
    width: 25PX;
    height: 25PX;
    vertical-align: top;
  }
  .footer-col p{
    font-size: 12PX;
  }
  .footer-imgInvite{
    vertical-align: middle;
    margin-top: -18PX;
    width: 57PX;
  }

</style>
