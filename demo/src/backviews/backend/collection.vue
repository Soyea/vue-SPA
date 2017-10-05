<template>
    <div class='coll-content'>
      <div class='con-disc'>
        <ul>
          <h3 v-text='disc'></h3>
          <li v-for='info in discs'><a :href='info.url' v-text='info.name'></a></li>
        </ul>
      </div>
      <div class='con-banner'> 
        <ul>
          <li v-for='item in bannerUrl'><img :src='item'></li>
        </ul>  
      </div>
    </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'  
  export default {
    data () {
      return {
        bannerUrl:[
          'http://n.sinaimg.cn/eladies/transform/20160510/qwiT-fxryhhu2384213.jpg',
          'http://n.sinaimg.cn/fashion/transform/20160330/gmjh-fxqtiwa5327750.jpg',
          'http://n.sinaimg.cn/fashion/transform/20160120/euxn-fxnqriz9955466.jpg',
          'http://n.sinaimg.cn/fashion/transform/20160516/DnrB-fxsenvx1021571.jpg'
        ],
        disc:'时尚之星',
        discs:[
          {name:'《我是歌手》 王晰',url:'http://blog.sina.com.cn/s/blog_49974e5d0102wioq.html'},
          {name:'《LOHAS》李小璐',url:'http://blog.sina.com.cn/s/blog_5f15a13c0102wdp1.html?tj=lady'},
          {name:'《老炮儿》里的叛逆姑娘',url:'http://blog.sina.com.cn/s/blog_5d49f7d80102vzuq.html?tj=lady'},
          {name:'《So Cool》徐海乔',url:'http://blog.sina.com.cn/s/blog_5d49f7d80102wca9.html?tj=lady'}
        ]
      }  
    }
  }
</script>

<style scoped>
  li{
    list-style:outside none none;
  }
  h3{
    color:#333
  }
  a{
    text-decoration:none;
    color:brown;
  }
  a:hover{
    text-decoration:underline;
  }
  .coll-content{
    width:1000px;
    height:100%;
    margin:auto;
  }
  img{
    width:400px;
    height:250px;
  }
  .coll-content>.con-banner{
    margin-left:200px;
  }
  .coll-content>.con-banner>ul>li{
    display:inline-block; 
  }
  .coll-content>.con-disc{
    width:180px;
    height:100%;
    float:left;
    margin-top:150px;
    line-height:50px;
  }
</style>