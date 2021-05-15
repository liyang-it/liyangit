<!--  -->
<template>
<div id='card'>
  <div class="left-card">
    <!--头像-->
    <div class="left-card-img">
      <!-- <img src="../assets/portrait.jpg" alt=""> -->
      <!--使用云储存-->
      <img :src="cardPortait" alt="">
    </div>
    <!--卡片内容-->
    <div class="left-card-content">
      <div class="left-card-content-title">
        <p>{{title}}</p>
      </div>
      <hr>
      <div class="left-card-content-desc">
        <p id="showContent1" v-html="cardContent1"><p>
        <p id="showContent2" v-html="cardContent2"></p>
        <p id="showContent3" v-html="cardContent3"></p>
      </div>
      <div class="left-card-content-btn" id="showBtn">
        <div @click="showWeChat('http://file.liyangit.top/weapp/me.png')">小程序中查看</div>
        <div>简历</div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
/* eslint-disable */
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {card} from '@/api/user.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {card},
data() {
//这里存放数据
return {
  title: '_',
};
},
//监听属性 类似于data概念
computed: {
  cardContent1 () {
    return card.cardContent1
  },
  cardContent2 () {
    return card.cardContent2
  },
  cardContent3 () {
    return card.cardContent3
  },
  cardPortait () {
    return card.cardPortait
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    showWeChat(url){
      console.info(this.$store)
    this.$store.commit('setWeChatImgUrl',url)
    this.$store.commit('setImgOpacity',1)
    this.$store.commit('setIsShowImg',true)
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    // 延迟显示内容
    let t = this
    setTimeout(()=>{
    //去除透明
    document.getElementById('card').style.opacity = 1
    // 喜欢穿着淡黄长裙的女生
    let title = card.cardTitle
    // 计时器每隔一段时间输出一个字 ，直到输出一整行停止
    let i = 0
    let interval = setInterval(()=>{
        if(t.title.length === title.length){
          // title 输出完后 显示个人简介
          t.title = title
          clearInterval(interval)
          setTimeout(()=>{document.getElementById('showContent1').style.opacity = 1},500)
          setTimeout(()=>{document.getElementById('showContent2').style.opacity = 1},1000)
          setTimeout(()=>{document.getElementById('showContent3').style.opacity = 1},1500)
          setTimeout(()=>{document.getElementById('showBtn').style.opacity = 1},2000)
        }else{
          t.title = title.slice(0,i) + '_'
          i++
        }
      },300)
    },700)
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
/** scoped 表示 样式自在当前组件有效*/
//@import url(); 引入公共css类
// 屏幕小于 768px
@media(max-width: 1200px){
  .left-card{
    margin-left: 0px;
    margin-top: -50px;
    width: 300px;
    margin: auto;
}
}
@media(min-width: 1201px){
.left-card{
    margin-left: 250px;
    // margin-top: 500px;
    width: 300px;
    position: fixed;
    z-index: 125;
}
}
#card{
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  // 设置元素为透明
  opacity: 0;
  filter: Alpha(opacity=50)
}

.left-card-img{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  top: 60px;
  margin:0 auto;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  z-index: 3;
}
.left-card-content{
  z-index: 4;
  width: 300px;
  height: 22rem;
  background-color:white;
  border-radius: 10px;
  transition: 0.3s transform;
  -webkit-transition:  0.3s transform;
  .left-card-content-title{
    width: 230px;
    margin: 0 auto;
    top: 55px;
    position: relative;
    text-align: center;
    p{
      font-size: 1.2rem;
      font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
      font-weight: bold;
      // border-right: 1px solid black;
      // animation: typing 2s steps(20, end), blink-caret .3s step-end infinite alternate;
      transition: all 0.3s linear;
      -webkit-transition: all 0.3s linear;
    }
  }
  .left-card-content-desc{
      width: 95%;
      margin: 0 auto;
      top: 40px;
      position: relative;
      text-align: center;
      p{
        font-size: 1.05rem;
        font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
        transition: all 0.5s linear;
        -webkit-transition: all 0.5s linear;
        opacity: 0;

      }
    }
    .left-card-content-btn{
      opacity: 0;
      transition: all 0.5s linear;
      -webkit-transition: all 0.5s linear;
      top: 65px;
      position: relative;
      width: 90%;
      margin: auto;
      text-align: center;
      div{
          border: none;
          background-color: white;
          font-size: 1.2rem;
          height: 30px;
          cursor: pointer;
          float: left;
          margin-left: 35px;
          text-align: center;
      }
      div:hover{
        color:rgb(56, 166, 240);
        // text-decoration: underline;
        font-weight: bold;
        border-bottom: 1px solid rgb(56, 166, 240);
      }
    }
  hr{
    position: relative;
    top: 50px;
    width: 90%;
    background-image: linear-gradient(to left, #3498db, #2980b9);
    height: 1.5px;
  }
  
}
@keyframes typing {
    from {
        width: 0;
    }
}
@keyframes blink-caret {
    50% {
        border-color: transparent;
    }
}
.left-card-content:hover{
  transform: scale(1.1);
}

</style>
