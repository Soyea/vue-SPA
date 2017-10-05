<template>
  <div class="rec">
    <div class="rec-content">
      <h3>文史博客</h3>
      <div class="history">
        <ul>
          <li v-for="item in hisBlog">
            <a class="tit" :href="item.http" :title="item.tit">
              <i v-text="item.tit"></i>
            </a>
            <a class="author" href="#" :title="item.author">
              <strong v-text="item.author"></strong>
            </a>
          </li>
        </ul>
      </div>
      <h3>老照片</h3>
      <div class="old-pic">
        <ul>
          <li v-for="info in recInfo">
            <img :src='info.url' alt="" :title="info.disc">
            <a :href='info.http'>
              <p v-text='info.disc'></p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="rec-footer">
      <a href="#" v-text="footerOne"></a>
      <span v-text="footerTwo"></span>
      <ul>
        <li v-for="item in footerInfo"><a href="#" v-text="item"></a></li>
      </ul>
      <p v-text="footerEng"></p>
      <p v-text="footerEnd"></p>
    </div>
  </div>  
</template>
<script>
  export default {
    data () {
      return {
        recInfo:[
          {url:'http://n.sinaimg.cn/blog/20170511/xsFp-fyfeutp6874197.jpg',disc:'我曾陪钱其琛出访以色列',http:'http://blog.sina.com.cn/s/blog_4ab761450102wvd5.html?tj=1'},
          {url:'http://n.sinaimg.cn/blog/20170825/K565-fykkfas8084621.jpg',disc:'寻找30年前 "背手小姑娘”',http:'http://blog.sina.com.cn/s/blog_4e51189a0102x7ha.html?tj=1'},
          {url:'http://n.sinaimg.cn/www/transform/20170911/a20o-fykufif4157830.jpg',disc:'1988年的模特时装秀长这样',http:'http://blog.sina.com.cn/s/blog_4e51189a0102x82o.html?tj=1'},
          {url:'http://n.sinaimg.cn/www/transform/20170906/kTmO-fykpyua5789969.jpg',disc:'2002年国足打入世界杯庆祝之夜',http:'http://blog.sina.com.cn/s/blog_4e2087320102x403.html?tj=1'},
          {url:'http://n.sinaimg.cn/blog/transform/20170829/rkT1-fykiuex7006900.jpg',disc:'首位战地女摄影师还是个爬楼党',http:'http://blog.sina.com.cn/s/blog_659c7e980102x40b.html?tj=1'},
          {url:'http://n.sinaimg.cn/blog/20170511/8K0i-fyfeutp6864537.jpg',disc:'老照片：大陆首位试管婴儿',http:'http://blog.sina.com.cn/s/blog_4e51189a0102x380.html?tj=1'}
        ],
        hisBlog:[
          {tit:'伊拉克与世界为敌也要吃掉科威特',author:'袁载誉',http:'http://blog.sina.com.cn/s/blog_68f165ba0102xfij.html?tj=hist'},
          {tit:'太平洋战争之杜立特空袭东京',author:'青梅煮酒',http:'http://blog.sina.com.cn/s/blog_169e4c8f80102x5s9.html?tj=hist'},
          {tit:'五代时期帝王王曦的荒唐的嗜好',author:'丽华心语',http:'http://blog.sina.com.cn/s/blog_6f61fd590102x3n1.html?tj=hist'},
          {tit:'诗经玩味：钱钟书妙解“窈窕淑女”',author:'潇湘蓝xxl',http:'http://blog.sina.com.cn/s/blog_603ca7490102xize.html?tj=hist'},
          {tit:'隋唐生活掠影：唐代的忌讳',author:'毕宝魁',http:'http://blog.sina.com.cn/s/blog_67c197970102x6s3.html?tj=hist'},
          {tit:'自古金就比银贵：谁动了我们的黄金',author:'李开周',http:'http://blog.sina.com.cn/s/blog_4865b35c0102xcym.html?tj=hist'}
        ],
        footerOne:"新浪BLOG意见反馈留言板",
        footerTwo:"电话：4006900000 提示音后按1键（按当地市话标准计费） 欢迎批评指正",
        footerInfo:["新浪简介","About Sina","广告服务","联系我们","招聘信息","网站律师","SINA English","通行证注册","产品答疑","使用须知"],
        footerEng:"Copyright © 1996 - 2017 SINA Corporation, All Rights Reserved",
        footerEnd:"新浪公司 版权所有"
      }
    }
  }
</script>

<style scoped>
  li{
    list-style:outside none none;
  }
  a{
    text-decoration:none;
  }
  a:hover{
    text-decoration:underline;
  }
  .rec{
    width:100%;
    background:url(../../assets/recommend.jpg);
    background-size:cover;
  }
  .rec>.rec-footer{
    text-align:center;
    font-size:14px;
    color:gray;
    line-height:30px;
    padding-top:20px;
  }
  .rec>.rec-footer>ul>li{
    display:inline-block;
    padding:5px 10px;
    height:5px;
    line-height:5px;
    border-right:1px solid gray;
  }
  .rec>.rec-footer>ul>li:last-child{
    border:none;
  }
  .rec>.rec-footer a{
    text-decoration:none;
    color:gray;
  }
  .rec>.rec-footer a:hover{
    color:brown;
  }
  .rec-content{
    width:1000px;
    height:100%;
    margin:auto;
  }
  .rec-content>h3{
    padding-left:25px;
    padding-top:15px;
    padding-bottom:15px;
    color:purple;
  }
  .history>ul>li{
    margin-bottom:15px;
  }
  .history>ul>li>a{
    color:#333;
    text-align:right;
  }
  .history>ul>li>.tit{
    color:gray;
    margin-right:300px;
  }
  .old-pic,.history{
    margin-left:180px;
  }
  .old-pic>ul>li{
    margin-right:60px;
    display:inline-block;
    text-align:center;
  }
  .old-pic>ul>li>img{
    width:300px;
    height:140px;
  }
  .old-pic>ul>li>a{
    color:orange;
  }
  .old-pic>ul>li>a>p{
    font-size:18px;
    padding-top:15px;
    padding-bottom:15px;
  }
  .rec-footer{
    background:#fff;
    width:100%;
    height:100px;
  }
</style>