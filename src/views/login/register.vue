<template>
  <div class="login   padding-top posfixed">
    <img src="../../assets/img/logo.png" class="loginLogo" alt="">
    <div class="loginForm">
      <div>
        <div class="form-group margin-bottom posrel">
          <input type="text"  v-model="loginForm.mobile" name="names" class="groupinput" placeholder="请输入手机号码">
          <span class="disblock posabs fa fa-mobile fa-2x"></span>
        </div>
        <div class="form-group margin-bottom posrel">
          <input type="text" name="pwd"  v-model="loginForm.yzm" class="groupinput" placeholder="请输入验证码">
          <span class="disblock posabs   btn-yzm" @click="sendMessage">{{word}}</span>
        </div>
        <div class="form-group margin-bottom posrel">
          <input type="password"  v-model="loginForm.pwd" name="pwd" class="groupinput" placeholder="请输入密码">
          <span class="disblock posabs  fa fa-lock  fa-2x"></span>
        </div>
        <div class="form-group margin-bottom posrel">
          <input type="password"  v-model="loginForm.confirmPwd" name="pwd" class="groupinput" placeholder="确认密码">
          <span class="disblock posabs  fa fa-lock  fa-2x"></span>
        </div>
        <div class="form-group margin-bottom posrel">
          <input type="checkbox" id="boxBtn" name="box" checked class="">
          <label for="boxBtn"> 同意注册协议/Agreement on registration!</label>
        </div>
        <button @click="CheckLogin()" class="form-btn btn">注册/Register</button>
      </div>
      <div>
        <p class="text-center margin-bottom font-size14">- 或者 -</p>
        <div class="form-group margin-bottom posrel">
          <router-link to="/login" class="btn form-link-a bg-00a65a">
            <i class="fa fa-user-plus"></i>
            <span>已有用户登录/Existing user login</span>
          </router-link>
        </div>
        <div class="form-group margin-bottom posrel">
          <router-link to="/" class="btn form-link-a bg-00c0ef">
            <i class="fa fa-home"></i>
            <span>返回首页/Return to the home page</span>
          </router-link>
        </div>
        <router-link to="/GetPass">忘记密码？/Forget the password</router-link>
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
        }
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      sendMessage(){
        if(this.isOvertime){
          return false;
        }
        let that = this,
          time = 60;
        var sendTimer = setInterval(function(){
          that.isOvertime = true;
          time--;
          that.word = "重新发送"+time;
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
    background: rgb(210, 214, 222);

    &Logo {
      display: block;
      margin: 100px auto;
      width: 50%;
    }

    &Form {
      display: block;
      width: 90%;
      margin: 0 auto;
      padding: 30px;
      background: #ffffff;

      .form-group {
        .groupinput {
          display: block;
          width: 100%;
          height: 70px;
          padding: 10px 100px 10px 20px;
          color: #555;
          background-color: #fff;
          background-image: none;
          border: 1px solid #ccc;
        }

        span {
          right: 20px;
          top: 12px;
        }
        .btn-yzm{
          display: block;
          height: 70px;
          line-height: 70px;
          width:150px;
          top: 0;
          right: 0;
          text-align: center;
          background: red;
          color: #fff;
          cursor: pointer;

        }
      }

      .form-btn {
        display: block;
        width: 100%;
        height: 70px;
        background: #f39c12;
        border-color: #e08e0b;
        color: #fff;
        margin-bottom: 70px;
      }

      .form-link-a {
        position: relative;
        padding-left: 88px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        width: 100%;
        height: 70px;
        line-height: 70px;
        color: #fff;

        > :first-child {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 70px;
          height: 70px;
          line-height: 70px;
          font-size: 1.6em;
          text-align: center;
          border-right: 1PX solid rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
</style>
