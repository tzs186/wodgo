<template>
  <div>
    <div class="user" style="padding-bottom: 51px;background: #f4f4f4">
      <div class="user-top" :style ="note" >
        <div class="posrel text-center padding2 font-size18 colfff">
          个人中心
          <a href="?MyInfo" class="user-top-set">
            <img src="../../assets/img/user_set.png" alt="">
          </a>
          <a href="?MyMsg" class="user-top-mes">
            <img src="../../assets/img/mes.png" alt="">
          </a>
        </div>
        <div class="posrel padding2" style="padding-bottom: 50px">
          <img src="../../assets/img/mes.png" class="user-portrait" alt="">
          <div class="user-name">
            <h4 class="margin-bot1"></h4>
            <p class="font-size13">可用积分：0</p>
          </div>
        </div>
      </div>
      <div class="user-order">
        <div class="user-order-list ui-flex justify-center margin-bottom">
          <div class="flex1">
            <a href="?MyOrder&amp;Status=UnPay">
              <p class="font-size14 margin-bot1">待支付</p>
              <p>0</p>
            </a>
          </div>
          <div class="flex1">
            <a href="?MyOrder&amp;Status=UnSend">
              <p class="font-size14 margin-bot1">待发货</p>
              <p>0</p>
            </a>
          </div>
          <div class="flex1">
            <a href="?MyOrder&amp;Status=Sended">
              <p class="font-size14 margin-bot1">待收货</p>
              <p>0</p>
            </a>
          </div>
        </div>
        <div class="user-order-all ui-flex justify-center text-center">
          <div class="flex1">
            <a href="?MyOrder">
              <img src="../../assets/img/user_order.png" class="user-order-img" alt="">
              <p class="font-size12">我购买的</p>
            </a>
          </div>
          <div class="flex1">
            <a href="?MyOrder">
              <img src="../../assets/img/user_order_1.png" class="user-order-img" alt="">
              <p class="font-size12">所有订单</p>
            </a>
          </div>
        </div>
      </div>
      <div class="xs-padding">
        <a href="?Score_Share">
          <img src="../../assets/img/user_Invite.jpg" alt="">
        </a>
      </div>
      <div class="user-list bg-fff">
        <div class="user-list-link clearfix">
          <a href="?MyAccount">
            <span class="font-size14">我的余额</span>
            <div class="fr font-size12">
              <span class="coldb3822  ">0.00</span>
              <i class="fa fa-angle-right"></i>
            </div>
          </a>
        </div>
        <div class="user-list-link clearfix">
          <a href="?Score">
            <span class="font-size14">我的积分</span>
            <div class="fr font-size12">
              <span class="coldb3822  ">0</span>
              <i class="fa fa-angle-right"></i>
            </div>
          </a>
        </div>
        <div class="user-list-link clearfix">
          <a href="?MyIncome">
            <span class="font-size14">我的收入</span>
            <div class="fr font-size12">
              <span class="coldb3822  "></span>
              <i class="fa fa-angle-right"></i>
            </div>
          </a>
        </div>
        <div class="user-list-link clearfix">
          <a href="?MyUsers">
            <span class="font-size14">我的伙伴</span>
            <div class="fr font-size12">
              <span class="coldb3822 "> </span>
              <i class="fa fa-angle-right"></i>
            </div>
          </a>
        </div>
        <div class="user-list-link clearfix">
          <a href="?MyUsers">
            <span class="font-size14">我的团队</span>
            <div class="fr font-size12">
              <span class="coldb3822 "> </span>
              <i class="fa fa-angle-right"></i>
            </div>
          </a>
        </div>
        <div class="user-list-link clearfix">
          <a href="?Address">
            <span class="font-size14">收货地址</span>
            <div class="fr font-size12">
              <span class="coldb3822  "></span>
              <i class="fa fa-angle-right"></i>
            </div>
          </a>
        </div>
        <div class="user-list-link clearfix">
          <a href="?Logout">
            <span class="font-size14">退出登录</span>
            <div class="fr font-size12">
              <span class="coldb3822  "></span>
              <i class="fa fa-angle-right"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
    <v-footers></v-footers>
  </div>
</template>

<script>
  import vFooters from "@/components/foot"
  export default {
    name: "user",
    data(){
      return{
        note: {
          backgroundImage: "url(" + require("../../assets/img/user_bg.jpg") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }
      }
    },
    components: {
      vFooters
    }
  }
</script>

<style scoped lang="less">
  .user-top {
    /*background: url("/../../assets/img/user_bg.jpg") ;*/
    /*background-size: 100% 100%;*/
    position: relative;
    width: 100%;
  }
  .user-top-set, .user-top-mes {
    position: absolute;
    top: 0.2rem;
    width: 0.4rem;
    height: 0.4rem;
    display: block;
  }
  .user-top-set {
    right: 1rem;
  }
  .user-top-mes {
    right: 0.2rem;
  }
  .user-top-mes {
    right: 0.2rem;
  }
  .user-name {
    padding-left: 1.8rem;
    position: relative;
    color: #fff;
  }
  .user-portrait {
    position: absolute;
    left: 0.4rem;
    top: 0rem;
    width: 1.3rem;
    height: 1.3rem;
    border: 2px solid #fff;
    border-radius: 50%;
  }
  .user-order {
    width: 90%;
    margin: -20px auto 0;
    position: relative;
    background: #fff;
    box-shadow: 0 0 9px #e2e2e2;
    padding: 0.2rem;
  }
  .user-order-list {
    position: relative;
    padding-bottom: 0.1rem;
    border-bottom: 1px #f4f4f4 dashed;
    text-align: center;
  }
  .user-order-img {
    width: 0.5rem;
  }
  .user-list-link {
    margin-left: 0.2rem;
    padding-right: 0.2rem;
    height: 40PX;
    line-height: 40PX;
    border-bottom: 1px solid #e8e8e8;
  }
  .user-list-link>a{
    display: block;
  }
  .user-list-link:last-child {
    border: none;
  }
</style>
