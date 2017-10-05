<template> 
   <div class="header-nav"> 
        <div class="el-main-nav">
            <div class="blog-title">
            <h2>DDDyh_的博客</h2>
            <a href="http://blog.sina.com.cn/u/5344069668">http://blog.sina.com.cn/u/5344069668
            </a>
            </div>
            <div class="user-info" v-show="isLogin">
                <div class="sub-title">
                    <img src="../assets/login.png">
                    <span v-text="userName"></span>
                </div>
                <div class="sub-menu">
                    <ul class="menu-nav">
                        <li class="el-menu-item" @click="loginOut">退出</li>
                    </ul>
                </div>
            </div>
            <ul class="main-menu">
                <router-link to="/" class="main-logo" exact tag="li">
                    <img src="../assets/backhome.png">
                </router-link>
                <router-link to="/recommend" class="el-menu-item" tag="li">推荐</router-link>
                <router-link to="/interest" class="el-menu-item" tag="li">感兴趣</router-link>
                <router-link to="/collection" class="el-menu-item" tag="li">个人收藏</router-link>
                <router-link to="/" class="el-menu-item" tag="li">去首页</router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'Header',
      data () {
        return {
          userName: '',
          isLogin: false
        }
      },
      created () {
        let info = this.$local.fetch('dyh')
        this.isLogin = info.login
        this.userName = info.userName
      },
      methods: {
        loginOut () {
          this.$local.save('dyh', null)
          this.$router.push('/login')
        }
      }
    }
</script>
<style scoped>
  li{
    list-style:outside none none;
    color:white;
    cursor:pointer;
    display:inline-block;
    margin-right:30px;
  }
  li:hover{
      text-decoration:underline;
  }
  .header-nav{
      width:100%;
      background:lightblue;
  }
  .el-main-nav{
      width:1200px;
      height:100%;
      margin:auto;
  }
  .el-main-nav>.blog-title{
      height:100px;
  }
  .el-main-nav>.blog-title>h2{
      padding-top:25px;
      margin-bottom:10px;
  }
  .el-main-nav>.blog-title>a{
      color:#000;
  }
  .el-main-nav>.main-menu{
      margin-top:50px;
      margin-bottom:50px;
  }
  .el-main-nav>.main-menu>.main-logo>img{
      width:30px;
      height:30px;
      vertical-align:middle;
  }
  .el-main-nav>.user-info{
      float:right;
  }
  .el-main-nav>.user-info>.sub-title>img{
      width:50px;
      height:50px;
      vertical-align:middle;
  }
  .el-main-nav>.user-info>.sub-title>span{
      color:gray;
      background:lightblue;
      cursor:pointer
  }
</style>