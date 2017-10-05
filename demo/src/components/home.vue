<template>
  <div class="main">
    <div class="home-header">
      <div class="portrait" :class={portraitLogin:isLogin}>
        <router-link v-if="!isLogin" to="/login" tag="span">登录</router-link>
        <img v-if="isLogin" src="../assets/login.png"/>
      </div>
    </div>
    <div class="text">
      <marquee>欢迎进入DDDyh_的博客家园</marquee>
    </div>
    <div class="btns">
      <router-link to="/recommend" tag="div" class="rec">推荐</router-link>
      <router-link to="/interest" tag="div" class="int">感兴趣</router-link>
      <router-link to="/collection" tag="div" class="col">个人收藏</router-link>
    </div>
    <div class="blog-address">
      博客地址：
      <a href="http://blog.sina.com.cn/u/5344069668">http://blog.sina.com.cn/u/5344069668</a>
      <p>博客名：DDDyh_</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      isLogin: false
    }
  },
  created () {
    let info = this.$local.fetch('dyh')
    this.isLogin = info.login
  }
}
</script>
<style scoped>
  .main{
    width:100%;
    height:662px;
    margin:auto;
    background:url(../assets/home.jpg);
    background-size:cover;
  }
  .main>.home-header{
    width:1200px;
    height:100px;
  }
  .main>.blog-address{
    color:white;
    text-align:center;
  }
  .main>.blog-address>a{
    color:lightblue;
    margin-bottom:10px;
  }
  .main>.blog-address>p{
    margin-top:15px;
  }
  .main>.home-header>.portrait{
    float:right;
  }
  .main>.home-header>.portrait>span{
    color:#fff;
    line-height:100px;
    vertical-align:middle;
    cursor:pointer;
  }
  .main>.home-header>.portrait>span:hover{
    text-decoration:underline;
  }
  .main>.home-header>.portrait>img{
    width:50px;
    height:50px;
    padding-top:20px;
  }
  .main>.text{
    width:800px;
    height:60px;
    margin:auto;
    margin-top:100px;
    line-height:60px;
    text-align:center;
    color:#fff;
    font-size:32px;
  }
  .main>.btns{
    margin-top:120px;
    margin-bottom:60px;
  }
  .main>.btns>div{
    margin-top:30px;
    color:#fff;
    text-align:center;
    font-size:18px;
    cursor:pointer;
  }
  .main>.btns>div:hover{
    color:gray;
  }
</style>