<template>
  <div class="login   padding-top posfixed" style="background: #f0f0f0">
    <heads :headData="headData" v-on:parentClick="parentClickEvent"></heads>

      <div class="rgeform" style="">
        <div class="">
          <div class="loginCon-group" style="margin-bottom: 0">
            <span class="margin-right font-size14">+86</span>
            <input type="number" v-model="loginForm.mobile" @keyup="getInputValue"   id="MobileCode" class="loginCon-control" placeholder="请输入手机号码">
          </div>
          <div class="loginCon-group">
            <input type="text"  v-model="loginForm.yzm" @keyup="getInputValue"  id="CheckCode" class="loginCon-control" placeholder="验证码">
            <div class="yzmOff" id="yzmOff" @click="sendMessage">
              {{word}}
            </div>
          </div>
          <div class="loginCon-group">
            <input type="password" v-model="loginForm.pwd" @keyup="getInputValue"   id="PassWord" class="loginCon-control" placeholder="请输入密码">
          </div>
          <div class="loginCon-group">
            <input type="password" v-model="loginForm.confirmPwd" @keyup="getInputValue"   id="RePassWord" class="loginCon-control" placeholder="确认密码">
          </div>
        </div>
      </div>
      <div class="padding-right padding-left margin-bottom">
        <button v-if="!buttonShow" disabled    class="tBtn loginBtn"  >确认</button>
        <button  v-if="buttonShow"    class="tBtn loginBtn" style="background: rgb(240, 60, 60)" @click="CheckLogin">确认</button>
      </div>
      <p class="font-size12 col999 text-center"> 注册账号就视为已阅读并同意 <a href="protocol.php" class="col6494e5">用户协议</a></p>

    <vdialog v-show="showDialog"  :dialog-option="dialogOption"  ref="dialog"></vdialog>
  </div>
</template>

<script>

  export default {
    name: "login",
    data() {
      return {
        headData: {msg: "注册", backUrl: "/login", rightText: "邮箱注册", rightShow: false, backgrounds: "#fff"},
        loginForm:{
          mobile:"",
          yzm:"",
          pwd:"",
          confirmPwd:""
        },
        showDialog: false,
        word:"获取验证码",
        isOvertime: false,
        dialogOption: {
          title: "提示",
          text: "",
          isShowCancelButton: false
        },
        buttonShow:false,
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      getInputValue(){
        (this.loginForm.mobile.length>1&&this.loginForm.pwd.length>1&&this.loginForm.yzm.length>1&&this.loginForm.confirmPwd.length>1)?this.buttonShow=true:this.buttonShow=false;
      },
      parentClickEvent(switchs) {
        if (switchs) {
          this.$router.push({path:'/register'})
        }
      },
      sendMessage(){
        if(this.isOvertime){
          return false;
        }
        let that = this,
          time = 60;
        var sendTimer = setInterval(function(){
          that.isOvertime = true;
          time--;
          that.word = "重新发送"+time+"s";
          if(time < 0){
            that.isOvertime = false;
            clearInterval(sendTimer);
            that.word = "获取验证码";
          }
        },1000)
      },
      CheckLogin() {
        var reg=11 && /^((12|13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
        if(this.loginForm.mobile==""){
          this.dialogOption.text = "请输入有户名!";
          this.showDialog = true;
          setTimeout(() => {
            this.showDialog = false;
          }, 1000);
          return false;
        }
        if(!reg.test(this.loginForm.mobile)){
          this.dialogOption.text = "手机号码格式有误！";
          this.showDialog = true;
          setTimeout(() => {
            this.showDialog = false;
          }, 1000);
          return false;
        }
        if(this.loginForm.yzm==""){
          this.dialogOption.text = "请输入验证码!";
          this.showDialog = true;
          setTimeout(() => {
            this.showDialog = false;
          }, 1000);
          return false;
        }
        if(this.loginForm.pwd==""){
          this.dialogOption.text = "请输入密码!";
          this.showDialog = true;
          setTimeout(() => {
            this.showDialog = false;
          }, 1000);
          return false;
        }
        if(this.loginForm.confirmPwd!=this.loginForm.pwd){
          this.dialogOption.text = "两次密码不一致!";
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
    padding-top: 72px;
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
  .rgeform {
    background: #fff;
    margin-top: 0.2rem;
  }
  .yzmOff{
    position: absolute;
    width: 200px;
    height: 100%;
    line-height: 90px;

    right: 0;
    top: 0;
    border-left: 1px solid #e9e9e9;
    text-align: center;
    cursor: pointer;
    color: rgb(240, 60, 60);
  }
  .rgeform .loginCon-group{
    padding:   15px;
  }
</style>
