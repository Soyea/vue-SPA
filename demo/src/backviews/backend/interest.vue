<template>
<div>
  <div class="col-content">
    <div class="con-left">
      <h3>失去“安卓之父”的谷歌还是苹果的对手吗？</h3>
      <img src="../../assets/jobs.jpg">
      <a href="http://blog.sina.com.cn/s/blog_5dc18b3c0102y8gq.html?tj=1"><i>原文链接</i></a>
    </div>
    <div class="con-right">
      <ul class='tab-menu'>
        <li v-for='(item,index) in titles'
        :class='{active:index+1==curIndex}' @click="curIndex=index+1"><a href='#' v-text='item'></a>
        </li>
      </ul>
      <div class='tab-con'>
        <div v-for='(item,index) in tabCons' :class='{show:index+1==curIndex}'>
          <ul>
            <li v-for='item2 in item.name'><a href='#' v-text='item2'></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div id='main'>
      <input type="radio" class='menu1' name='menu' checked>
      <a href="#" class='menu1'>设计</a>

      <input type="radio" class='menu2' name='menu'>
      <a href="#" class='menu2'>教育</a>

      <input type="radio" class='menu3' name='menu'>
      <a href="#" class='menu3'>美食</a>

      <div class='scroll'>
        <div class='part part1' data-icon='D'>
          <ul>
            <li v-for="data in deData">
              <img :src="data.url" alt="">
              <p v-text="data.con"></p>
            </li>
          </ul>
        </div>
        <div class='part part2' data-icon='E'>
          <ul>
            <li v-for="data2 in eduData">
              <img :src="data2.url" alt="">
              <p v-text="data2.con"></p>
            </li>
          </ul>
        </div>
        <div class='part part3' data-icon='F'>
          <ul>
            <li v-for="data3 in fooData">
              <img :src="data3.url" alt="">
              <p v-text="data3.con"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        titles:['社会','公益'],
        curIndex:1,
        tabCons:[
          {
            name:['北京别墅群中藏内力觉醒大学(图)','女子过铁轨只顾看手机被电车撞飞','外卖小哥闯灯送餐:不准时1天白干',
            '男子发布侮辱执勤女交警视频被拘','男子撞伤环卫工后逃逸 警民齐发“朋友圈”破案','男子撞伤环卫工后逃逸 警民齐发“朋友圈”破案',
            '北京五大水系治理情况:臭水还清野鸭白鹭来作客','台高校食堂现神翻译“控肉饭”网友:理科生开的'
            ]
          },
          {
            name:['29城举办世界呼吸日徒步活动','《树冠之下》展览将在京举办','有爱的父亲节 天使爸爸在行动',
            '子研论道：企业公益的启示','2017“BMW童悦之家”全新启程','专题 | “点亮蓝灯”暨水立方公益基金成立仪式盛大开幕',
            '微博 | #善行者#穿越一座城 传递一份爱','环保 | 盈利之外，还有环境责任'
            ]
          }
        ],
        deData:[
          {url:"http://bjcache.leju.com/zxjiaju/zx_pic/20170907/07/86/_album_b/59b0d5c604b5106d4f67.jpeg",con:"由 新浪家居江西站 设计"},
          {url:"http://bjcache.leju.com/zxjiaju/zx_pic/20170828/f0/06/_album_b/59a37c9648e880943c48.jpeg",con:"由 杜鸿业 设计"},
          {url:"http://bjcache.leju.com/zxjiaju/zx_pic/20170808/57/fe/_album_b/598999c48b1b301b3fc1.jpeg",con:"由 徐静 设计"},
          {url:"http://bjcache.leju.com/zxjiaju/zx_pic/20170812/1a/73/_album_b/598eb0d853a1f01c833b.jpeg",con:"由 张强 设计"}
        ],
        eduData:[
          {url:"http://n.sinaimg.cn/edu/20170627/xFiO-fyhneam3997920.jpg",con:"大牌杂志御用超模 完美国际范儿"},
          {url:"http://n.sinaimg.cn/edu/20170627/Hoe6-fyhneam4014982.jpg",con:"老板为何灌鸡汤"},
          {url:"http://n.sinaimg.cn/edu/20170627/kivF-fyhneam4015340.jpg",con:"年薪50万每天仅剩82元"},
          {url:"http://n.sinaimg.cn/edu/20170627/YC9r-fyhneam4015822.jpg",con:"教师家庭最出学霸"}
        ],
        fooData:[
          {url:"http://image2.sina.com.cn/bj/http/blog.sina.com.cn/s/U7638P52T136D405367F3417DT20170929124019.jpg",con:"低糖低脂细腻清甜的月饼"},
          {url:"http://image2.sina.com.cn/bj/http/blog.sina.com.cn/s/U7638P52T136D405363F3417DT20170929123001.jpeg",con:"好吃不油腻的燕麦蒸排骨"},
          {url:"http://image2.sina.com.cn/bj/http/blog.sina.com.cn/s/U7638P52T136D405392F3417DT20170930113647.jpg",con:"美食煮夫的瘦身减肥记"},
          {url:"http://image2.sina.com.cn/bj/http/blog.sina.com.cn/s/U7638P52T136D405385F3417DT20170930112828.jpg",con:"蒜蓉粉丝蒸虎虾"},
          {url:"http://image2.sina.com.cn/bj/http/blog.sina.com.cn/s/U7638P52T136D405391F3417DT20170930113137.jpg",con:"和味萝卜牛腩"},
          {url:"http://image2.sina.com.cn/bj/http/blog.sina.com.cn/s/U7638P52T136D405382F3417DT20170930112721.jpg",con:"抹茶蜜红豆月饼"},
          {url:"http://image2.sina.com.cn/bj/http/blog.sina.com.cn/s/U7638P52T136D405370F3417DT20170929124148.jpg",con:"糯米珍珠丸子"},
          {url:"http://image2.sina.com.cn/bj/http/blog.sina.com.cn/s/U7638P52T136D405362F3417DT20170929122919.jpg",con:"红酒叉烧惹人醉"},
          {url:"http://image2.sina.com.cn/bj/http/blog.sina.com.cn/s/U7638P52T136D405389F3417DT20170930113031.jpg",con:"红茶坚果欧包"},
          {url:"http://image2.sina.com.cn/bj/http/blog.sina.com.cn/s/U7638P52T136D405377F3417DT20170930111018.jpg",con:"蒜泥豆角虾卷"}
        ]
      }
    }
  }
</script>

<style scoped>
  li{
    list-style:outside none none;
  }
  a{
    color:#000;
    text-decoration:none;
  }
  .col-content{
    width:1000px;
    height:100%;
    margin:auto;
  }
  ul{list-style:none;}
    #main{
      width:100%;height:650px;
      position:relative;
      overflow:hidden;
    }
    #main>a,#main>input{
      width:20%;
      height:50px;
      line-height:50px;
      position:absolute;
      bottom:0;
    }
    #main>a{
      font-size:20px;
      text-decoration:none;
      color:#333;text-align:center;
      background-color:lightblue;
      z-index:99;
    }
    #main>input{z-index:100;opacity:0;cursor:pointer;}
    #main>.menu1{left:0%;} 
    #main>.menu2{left:40%;}
    #main>.menu3{left:80%;}
    #main>input:hover+a{background-color:lightcoral;}
    #main>input:checked+a{background-color:pink;}
    #main>input:checked+a:before{
      content:'';
      display:block;
      width:0;height:0;line-height:0;
      border-style:dotted dashed solid dashed;
      border-color:transparent;
      border-bottom-color:lightcoral;
      border-width:20px;
      position:absolute;
      left:50%;bottom:100%;
      transform:translateX(-50%);
    }
    #main>input.menu1:checked~.scroll{
      transform:translateY(0%);
    }
    #main>input.menu2:checked~.scroll{
      transform:translateY(-20%);
    }
    #main>input.menu3:checked~.scroll{
      transform:translateY(-40%);
    }
    #main>input.menu4:checked~.scroll{
      transform:translateY(-60%);
    }
    #main>input.menu5:checked~.scroll{
      transform:translateY(-80%);
    }
    #main>.scroll{
      width:100%;height:500%;
      margin:auto;
      transition:all 0.6s linear;
    }
    #main>.scroll>.part{
      width:100%;height:20%;position:relative;
      color:gray;
    }
    #main>.scroll>.part1>ul{
      padding-top:200px;
      margin-left:80px;
    }
    #main>.scroll>.part1>ul>li{
      display:inline-block;
      margin-right:20px;
    }
    #main>.scroll>.part1>ul>li>img{
      width:280px;
      height:210px;
    }
    #main>.scroll>.part1>ul>li>p{
      text-align:center;
    }
    #main>.scroll>.part2>ul{
      padding-top:200px;
      margin-left:70px;
    }
    #main>.scroll>.part2>ul>li{
      display:inline-block;
      margin-right:10px;
    }
    #main>.scroll>.part2>ul>li>img{
      width:290px;
      height:220px;
    }
    #main>.scroll>.part2>ul>li>p{
      text-align:center;
    }
    #main>.scroll>.part3>ul{
      padding-top:180px;
      margin-left:170px;
    }
    #main>.scroll>.part3>ul>li{
      display:inline-block;
      margin-right:30px;
      margin-bottom:30px;
      padding:10px;
      border:1px solid gray;
    }
    #main>.scroll>.part3>ul>li>p{
      text-align:center;
      font-size:14px;
    }
    #main>.scroll>.part:before{
      content:'';
      position:absolute;top:0;left:50%;
      border-style:solid dashed dotted dashed;
      border-width:120px;
      border-color:transparent;
      width:0;height:0;line-height:0;
      transform:translateX(-50%);
    }
    #main>.scroll>.part:nth-child(odd):before{
      border-top-color:lightblue;
    }
    #main>.scroll>.part:nth-child(even):before{
      border-top-color:white;
    }
    #main>.scroll>.part:after{
      content:attr(data-icon);
      font-family:'myFont';
      position:absolute;top:20px;left:50%;
      transform:translateX(-50%);
      font-size:50px;
    }
    #main>.scroll>.part:nth-child(odd):after{
      color:white;
    }
    #main>.scroll>.part:nth-child(even):after{
      color:lightblue;
    }
    #main>.scroll>.part:nth-child(even){
      background-color:lightblue;
    }
    .col-content>.con-left{
      width:510px;
      height:100%;
      float:left;
      padding-top:15px;
    }
    .col-content>.con-left>h3{
      padding-bottom:20px;
    }
    .col-content>.con-left>a:hover{
      text-decoration:underline;
    }
    .col-content>.con-right{
      width:476px;
      height:100%;
      float:right;
      border:1px solid gray;
    }
    .col-content>.con-right>.tab-menu>li{
      display:inline-block;
      border:1px solid gray;
      border-right:none;
      padding:10px 15px;
    }
    .col-content>.con-right>.tab-menu>li:hover{
      background:lightblue;
    }
    .col-content>.con-right>.tab-menu>li>a:hover{
      color:gray;
    }
    .col-content>.con-right>.tab-menu>li:last-child{
      border-right:1px solid gray;
    }
    .col-content>.con-right>.tab-menu>li:first-child{
      border-left:0;
    }
    .col-content>.con-right>.tab-menu>li.active{
        border-bottom-color:white;
        background-color:white;
    }
    .tab-con{
        width:450px;
        height:315px;
        position:relative;
        perspective:1200px;
    }
    .tab-con>div{
      position:absolute;
      left:0;top:0;
      width:100%;height:100%;
      padding:20px;
      box-sizing:border-box;
      transform:rotateY(90deg);
    }
    .tab-con>div.show,
    .tab-con>div.hide{
      animation-timing-function:linear;
      animation-duration:0.3s;
      animation-fill-mode:forwards;
    }
    .tab-con>div.show{
      animation-name:show;
      animation-delay:0.3s;
    }
    .tab-con>div.hide{
      animation-name:hide;
    }
    @keyframes show{
      from{
        transform:rotateY(90deg);
        opacity:0;
      }
      to{
        transform:rotateY(0deg);
        opacity:1;
      }
    }
    @keyframes hide{
      from{
        transform:rotateY(0deg);
        opacity:1;
      }
      to{
        transform:rotateY(-90deg);
        opacity:0;
      }
    }
    .tab-con>div>ul>li{
      padding:5px;
    }
    .tab-con>div>ul>li>a:hover{
      text-decoration:underline;
    }
</style>