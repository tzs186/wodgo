<template>
  <div>
    <div class="cart">
      <div class="cart-top">
        <div class="cart-top-text fl w20"></div>
        <div class="cart-top-name fl w60">购物车</div>
        <div class="cart-top-text fl w20"><span class="font-size13 col808080 disblock" id="editCart">编辑</span></div>
      </div>
      <!-- 购物车为空时 -->
      <div class="emptyCart text-center ">
        <!--<img src="skin/mobile/img/empty-cart.png" class="empty-show" alt="">-->
      </div>
      <div class="bg-fff posrel mycart  ">
        <div class="cart-list clearfix ui-flex">
          <div class="cart-list-check" data-id="true">
            <!--                <i class="fa fa-circle-o fa-lg colb5b5b5 " style="display: none"></i>-->
            <i class="fa fa-check-circle fa-lg "></i>
          </div>
          <div class="cart-list-data flex1 clearfix">
            <div class="c-data-img fl">
              <a href="" class="">
                <!--<img src="skin/mobile/img/goods_1.jpg" alt="">-->
              </a>
            </div>
            <div class="c-data-text fr">
              <h5 class="text-elli-2  ">荷兰 Herobaby/美素 婴幼儿配方奶粉 1段 800g
                （单罐另加10元邮费）</h5>
              <div><span class="badge" style="">保税</span></div>

              <div class="class_price margin-none">
                        <span class="class_price-s coldb3822  font-size12 font-weight6 ">
                            <em>¥ <span class="int font-size16 font-weight6">10</span>.00</em>
                            <span>+500积分</span>
                          <!--   产品单价放入unitprice的value-->
                            <input type="hidden" class="unitTotal" value="10" data-id="2">
                          <!--   产品所需积分放入integral的value-->
                            <input type="hidden" class="inteTotal" value="500">
                        </span>
              </div>
              <div class="num_wrap">
                <!--   产品单价放入unitprice的value-->
                <input type="hidden" class="unitprice" value="10">

                <!--   产品所需积分放入integral的value-->
                <input type="hidden" class="integral" value="500">
                <span class="minus fa fa-minus" onclick="andSubtract(this,'jian')"></span>
                <input type="tel" class="num-input" value="1" onblur="numInputBlur(this)">
                <span class="minus fa fa-plus" onclick="andSubtract(this,'zhijie')"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-list clearfix ui-flex">

          <div class="cart-list-check" data-id="true">
            <!--                <i class="fa fa-circle-o fa-lg colb5b5b5 " style="display: none"></i>-->
            <i class="fa fa-check-circle  fa-lg"></i>
          </div>
          <div class="cart-list-data flex1 clearfix">
            <div class="c-data-img fl">
              <a href="" class="">
                <!--<img src="skin/mobile/img/goods_1.jpg" alt="">-->
              </a>
            </div>
            <div class="c-data-text fr">
              <h5 class="text-elli-2  ">荷兰 Herobaby/美素 婴幼儿配方奶粉 1段 800g
                （单罐另加10元邮费）</h5>
              <div><span class="badge" style="">保税</span></div>

              <div class="class_price margin-none">
                        <span class="class_price-s coldb3822  font-size12 font-weight6 ">
                            <em>¥ <span class="int font-size16 font-weight6">100</span>.00</em>
                            <span>+200积分</span>
                          <!--   产品单价放入unitprice的value-->
                            <input type="hidden" class="unitTotal" value="100" data-id="2">
                          <!--   产品所需积分放入integral的value-->
                            <input type="hidden" class="inteTotal" value="200">
                        </span>
              </div>
              <div class="num_wrap">
                <!--   产品单价放入unitprice的value-->
                <input type="hidden" class="unitprice" value="100">
                <!--   产品所需积分放入integral的value-->
                <input type="hidden" class="integral" value="200">
                <span class="minus fa fa-minus" onclick="andSubtract(this,'jian')"></span>
                <input type="tel" class="num-input" value="1" onblur="numInputBlur(this)">
                <span class="minus fa fa-plus" onclick="andSubtract(this,'zhijie')"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="like-title bg-fff font-size16 font-weight6 padding2 margin-top margin-bottom text-center  ">猜你喜欢</div>
      <div class="clearfix ">
        <div class="class-con-list">
          <a href="goods.php">
            <div class="classImg ui-flex justify-center center">
              <!--<img src="skin/mobile/img/goods_3.png" alt="">-->
            </div>
            <h5 class="text-elli-2 font-size14">新西兰 A2/a2 白金婴幼儿奶 粉 4段（3岁以上）900g</h5>
            <div class="class_price">
                <span class="class_price-s coldb3822 font-size12 font-weight6">
                    <em>¥ <span class="int font-size17 font-weight6">1599</span>.00</em>
                    <span>+500积分</span>
                </span>

            </div>
            <div class="">
              <span class="badge">保税</span>
              <span class="badge">直邮</span>
            </div>
            <p class="font-size12 col808080">已售5000件</p>
          </a>
        </div>
        <div class="class-con-list">
          <a href="goods.php">
            <div class="classImg ui-flex justify-center center">
              <!--<img src="skin/mobile/img/goods_3.png" alt="">-->
            </div>
            <h5 class="text-elli-2 font-size14">新西兰 A2/a2 白金婴幼儿奶 粉 4段（3岁以上）900g</h5>
            <div class="class_price">
                <span class="class_price-s coldb3822 font-size12 font-weight6">
                    <em>¥ <span class="int font-size17 font-weight6">1599</span>.00</em>
                    <span>+500积分</span>
                </span>

            </div>
            <div class="">
              <span class="badge">保税</span>
              <span class="badge">直邮</span>
            </div>
            <p class="font-size12 col808080">已售5000件</p>
          </a>
        </div>
        <div class="class-con-list">
          <a href="goods.php">
            <div class="classImg ui-flex justify-center center">
              <!--<img src="skin/mobile/img/goods_3.png" alt="">-->
            </div>
            <h5 class="text-elli-2 font-size14">新西兰 A2/a2 白金婴幼儿奶 粉 4段（3岁以上）900g</h5>
            <div class="class_price">
                <span class="class_price-s coldb3822 font-size12 font-weight6">
                    <em>¥ <span class="int font-size17 font-weight6">1599</span>.00</em>
                    <span>+500积分</span>
                </span>

            </div>
            <div class="">
              <span class="badge">保税</span>
              <span class="badge">直邮</span>
            </div>
            <p class="font-size12 col808080">已售5000件</p>
          </a>
        </div>
        <div class="class-con-list">
          <a href="goods.php">
            <div class="classImg ui-flex justify-center center">
              <!--<img src="skin/mobile/img/goods_3.png" alt="">-->
            </div>
            <h5 class="text-elli-2 font-size14">新西兰 A2/a2 白金婴幼儿奶 粉 4段（3岁以上）900g</h5>
            <div class="class_price">
                <span class="class_price-s coldb3822 font-size12 font-weight6">
                    <em>¥ <span class="int font-size17 font-weight6">1599</span>.00</em>
                    <span>+500积分</span>
                </span>

            </div>
            <div class="">
              <span class="badge">保税</span>
              <span class="badge">直邮</span>
            </div>
            <p class="font-size12 col808080">已售5000件</p>
          </a>
        </div>
      </div>
      <div class="de_btn_bar" style="bottom: 50px">
        <div class=" " style="width: 25%">
          <div class="cart-check-all" id="check-all" data-id="true">
            <i class="fa fa-lg   fa-check-circle"></i>
            <span class="txt">全选</span>
          </div>
        </div>
        <div class="  text-right padding-right" style="width: 45%">
          <div class="">合计: <span class="coldb3822">¥<em id="cartTotalPrice">110.00</em></span></div>
          <div class="font-size12 col808080"><span class="coldb3822">积分：<em id="cartTotalIntegral">700.00</em></span>
          </div>
        </div>
        <div class="btn_group">
          <div class="ui-flex">
            <div class="btn btn_buy bg-de3c22" id="buyBtn2">立即购买</div>
            <div class="btn btn_buy bg-de3c22" style="display: none" id="removeCart">删除</div>
          </div>
        </div>
      </div>
    </div>
    <v-footers></v-footers>
  </div>
</template>

<script>
  import vFooters from "@/components/foot"

  export default {
    name: "cart",
    components: {
      vFooters
    }
  }
</script>

<style scoped lang="less">
  /*购物车*/
  .cart {
    padding-top: 51px;
    padding-bottom: 108px;
    position: relative;
    background: #f4f4f4;
  }

  .cart-top {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    border-bottom: 1px solid #c1c1c1;
    background: #ffffff;
    text-align: center;
    z-index: 99;
  }

  .cart-top > div {
    height: 50px;
    line-height: 50px;
  }

  .cart-list {
    position: relative;
    /*margin-bottom: 0.2rem;*/
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .cart-list-check {
    width: 0.55rem;
    text-align: center;
  }

  .cart-list-data {
    margin: 0.2rem 0.1rem 0.1rem 0;
    padding: 0.1rem 0.05rem;
    box-shadow: 0 0 13px #f4f4f4;
  }

  .c-data-img {
    width: 1.55rem;
    height: 1.55rem;
  }

  .c-data-text {
    width: 4rem;
  }

  .num_wrap {
    position: absolute;
    right: 0.2rem;
    bottom: 0.3rem;
    z-index: 9;

  }

  .num_wrap .num-input {
    width: 0.59rem;
    height: 0.34rem;
    padding: 0.1rem;
    text-align: center;
    border: none;
    color: #2e2d2d;
    background: #f6f6f6;
    font-size: 10px;
  }

  .cart-check-all {
    text-align: center;
    line-height: 50px;
    width: 80%;
    margin: 0 auto;
  }

  .cart-list-check .fa-circle-o, .cart-check-all .fa-circle-o {
    color: #b5b5b5 !important;
  }

  .cart-list-check .fa-check-circle, .cart-check-all .fa-check-circle {
    color: #FF0000 !important;
  }

  .emptyCart {
    margin-top: 1.0rem;
  }

  .emptyCart i {
    font-size: 110px;
    color: #b5b5b5;
  }

  .joinCart {
    -webkit-transition: -webkit-transform .25s ease;
    transition: -webkit-transform .25s ease;
    transition: transform .25s ease;
    transition: transform .25s ease, -webkit-transform .25s ease;
    -webkit-transform: translate3d(0, 100%, 0);
    -o-transform: translate3d(0, 100%, 0);
    -moz-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: #333;
    background-color: #FFFFFF;

  }

  .joinCart.show {
    z-index: 301;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .joinCart-title {

  }

  .joinCartName {
    padding-left: 2rem;
    min-height: 2rem;

  }

  .cartnamimg {
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 1.8rem;
    height: 1.8rem;
  }

  .joinCartBtn {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background: #de3c22;
    font-size: 16px;
  }

  .de_btn_bar {
    position: fixed;
    width: 100%;
    height: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  .cart-check-all {
    text-align: center;
    line-height: 50px;
    width: 80%;
    margin: 0 auto;
  }

  .de_btn_bar .btn_group {
    display: block;
    width: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    position: relative;
    height: 50px;
  }

  .de_btn_bar .btn {
    position: relative;
    z-index: 10;
    line-height: 50px;
    text-align: center;
    background: #e4393c;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    -webkit-user-select: none;
    display: block;
    width: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
</style>
