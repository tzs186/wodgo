<template>
  <div class="login posfixed">
    <heads :headData="headData" v-on:parentClick="parentClickEvent"></heads>
    <div class="loginform">
      <div class="text-center font-size19 font-weight6">账号密码登录</div>
      <div class="loginCon">

          <div class="loginCon-group">
            <input type="text" v-model="loginForm.mobile"   @keyup="getInputValue" class="loginCon-control" placeholder="手机号/邮箱">
          </div>
          <div class="loginCon-group">
            <input :type="mytype"  v-model="loginForm.pwd"  @keyup="getInputValue"  class="loginCon-control" placeholder="密码">
            <div class="eyeOff" id="eyeOff">
              <i class=" fa fa-eye" :class="{'fa-eye-slash':pwdText,'fa-eye':!pwdText}" @click="pwdText=!pwdText" id="eyeOffSpan"></i>
            </div>
          </div>
          <button  v-if="!buttonShow" disabled  class="tBtn loginBtn">登录</button>
          <button  v-if="buttonShow"    class="tBtn loginBtn" style="background: rgb(240, 60, 60)" @click="CheckLogin">登录</button>
          <a href="LostPass.php" class="fr col808080 font-size14">忘记密码</a>

      </div>
    </div>
    <vdialog v-show="showDialog"  :dialog-option="dialogOption"  ref="dialog"></vdialog>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        headData: {msg: "登录", backUrl: "/", rightText: "注册", rightShow: true, backgrounds: "#fff"},

        showDialog: false,
        loginForm: {
          mobile: "",
          pwd: ""
        },
        dialogOption: {
          title: "提示",
          text: "",
          isShowCancelButton: false
        },
        buttonShow:false,
        pwdText:true
      }
    },
    created() {},
    mounted() {},

    computed:{
      rightText(){
        return this.headData.rightText
      },
      mytype(){
        return this.pwdText?"password":"text"
      }
    },
    watch: {
      rightText(newValue, oldValue) {
        console.log(newValue+":"+oldValue)
      }
    },
    methods: {
      getInputValue(){
        (this.loginForm.mobile.length>1&&this.loginForm.pwd.length>1)?this.buttonShow=true:this.buttonShow=false;
      },
      parentClickEvent(switchs) {
        if (switchs) {
          this.$router.push({path:'/register'})
        }
      },
      CheckLogin() {
        var reg = 11 && /^((12|13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
        if (this.loginForm.mobile == "") {
          this.dialogOption.text = "请输入有户名!";
          this.showDialog = true;
          setTimeout(() => {
            this.showDialog = false;
          }, 1000);
          return false;
        }
        if (!reg.test(this.loginForm.mobile)) {
          this.dialogOption.text = "手机号码格式有误！";
          this.showDialog = true;
          setTimeout(() => {
            this.showDialog = false;
          }, 1000);
          return false;
        }
        if (this.loginForm.pwd == "") {
          this.dialogOption.text = "请输入密码!";
          this.showDialog = true;
          setTimeout(() => {
            this.showDialog = false;
          }, 1000);
          return false;
        }
        /*this.$refs.dialog.confirm().then(() => {
          this.showDialog = false;
          console.log("sad")
        }).catch(() => {
          this.showDialog = false;
          console.log("asdsdsad")
        })*/
      }
    },
    components: {

    }
  }
</script>

<style scoped lang="less">
  .login {
    height: 100%;
    background: #fff;
  }
  .loginform {
    padding-top: 140px;
  }
  .loginCon {
    width: 93%;
    margin: 0.5rem auto 0;
    position: relative;
  }
  .loginCon-group {
    border-bottom: 1PX solid #e9e9e9;
    padding: 15px  12px 0;
    margin-bottom:11px;
    position: relative;
  }
  .loginCon-control {
    height: 60px;
    width: 70%;
    line-height:60px;
    font-family: "microsoft yahei";
    font-size: 14PX;
  }
  .eyeOff {
    width: 0.4rem;
    position: absolute;
    right: 0.2rem;
    top: 0.3rem;
    font-size: 18PX;
    text-align: center;
  }
  .loginBtn {
    display: block;
    width: 100%;
    height:  80px;
    font-size: 16PX;
    margin: 160px 0 30px 0;
    background: #e6e6e6;
    color: #fff;
  }
  .reg-title {
    background: #fff;
    border-bottom: 1PX solid #a8a8a8;
  }
  .reg-titletext {
    top: 0;
    left: 50%;
    margin-left: -15px;
    height: 50px;
    line-height: 50px;
  }

</style>
