<template>
  <div class="login">
    <div class="login-box">
      <img src="../assets/wel.png">
      <div class="login-form">
          <h2>登录</h2>
          <form @submit.prevent='sendLogin' autocomplete='off'>
              <div>你的名字：<input type="text" placeholder="请输入用户名" name="user" ref="userInput"/></div>
              <div>你的密码：<input type="password" placeholder="请输入密码" name="password" /></div>
              <div class="login-btn"><input type="submit" value="一键登录" /></div>
          </form>
      </div>
      <div class="back-home">
          <router-link to="/">去首页>></router-link>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      name: 'login',
      data () {
        return {}
      },
      methods: {
        sendLogin () {
          let userName = this.$refs.userInput.value
          this.$local.save('dyh', {
            login: true,
            userName: userName
          })
          let redirect = this.$route.query.redirect
          if (!redirect) {
            redirect = 'interest'
          }
          this.$router.push({
            path: '/' + redirect
          })
        }
      }
    }
</script>
<style scoped>
  .login{
    width:100%;
    background:url(../assets/login.jpg) no-repeat;
    background-size:cover;
    height:612px;;
    margin:auto;  
    padding-top:50px;
  }
  img{
    width:200px;
    height:200px;
  }
  .login-box{
    width:500px;
    height:500px;
    margin:auto;
    text-align:center;
  }
  .login-box>.back-home>a{
    color:#fff;
    text-decoration:none;
  }
  .login-box>.back-home>a:hover{
    text-decoration:underline;
  }
  .login-form{
    height:250px;
    text-align:center;
    margin-bottom:20px;
    background:rgba(45,194,242,0.5);
  }
  .login-form>h2{
    color:#fff;
    height:80px;
    line-height:80px;
  }
  .login-form>form>div{
    margin-bottom:20px;
  }
  .login-form>form>div>input{
    width:300px;
    height:30px;
    text-indent:1em;
    background:transparent;
    vertical-align:right;
    border:1px solid #fff;
  }
  .login-form>form>.login-btn{
    margin-top:30px;
  }
  .login-form>form>.login-btn>input{
    width:100px;
    text-align:center;
    text-indent:0;
    color:#fff;
    cursor:pointer;
  }
  .login-form>form>.login-btn>input:hover{
    background:rgba(217,230,235,0.3);
  }
</style>