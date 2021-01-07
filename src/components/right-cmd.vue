
<template>
<div class='cmd' >
  <div class="right-cmd" id="cmd1">
    <div class="right-cmd-head" >{{title}}</div>
    <div class="right-cmd-content">
      <span>{{label}}</span><span class="command">./tianqi.sh</span><br>
      <span class="command">&nbsp;实况天气:&nbsp;&nbsp;当前</span>
      <div style="margin-top: -10px;margin-bottom: 13px;">
        <div v-for="(item,index) in tianqi" :key="index" class="tianqi" @click="toWeb(item.value.fxLink)">
          <span>&nbsp;{{item.city}}</span>
          <img :src="require('@/assets/tianqi-ico/'+item.value.now.icon+'.png')" alt=""><span>{{item.value.now.text}}</span>
          <span>{{item.value.now.temp}}°</span>
          <span>{{item.value.now.windDir}}</span>
        </div>
      </div>
      <span>{{label}}</span><span class="command">cat me.txt</span><br>
        <ul>
          <li @click="toWeb('https://github.com/liyang-it/')"><span>GitHub</span></li>
          <li @click="toWeb('https://blog.csdn.net/qq_40739917')"><span>CSDN博客</span></li>
          <li @click="toWeb('https://www.cnblogs.com/liyangit-bky')"><span>博客园</span></li>
          <li @click="toWeb('http://www.liyangit.top/jy')"><span>简语</span></li>
          <li >
            <span>网抑云音乐:</span>
            <span @click="toWeb('http://www.liyangit.top/wyy')">Vue版</span>
            <span @click="showWeChat('http://file.liyangit.top/wyy/scan.png')">小程序版</span>
          </li>
        </ul>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {centos} from '@/api/user.js'
import axios from 'axios'
export default {
//import引入的组件需要注入到对象中才能使用
components: {centos},
data() {
//这里存放数据
return {
  key: 'c5e46449a8d349c09e9de5e6c09b1eeb',// 和风天气 应用的key
  city: ['嘉禾','岳麓区','东莞'], // 查询城市数组
  cityId:['101250503','101250109','101281601'],// 城市id 通过 https://geoapi.qweather.com/v2/city/lookup?location=嘉禾&key=c5e46449a8d349c09e9de5e6c09b1eeb;获取
  tianqi:[],
  isLoadCity: false

};
},
//监听属性 类似于data概念
computed: {
  title(){
    return centos.title
  },
  label(){
    return centos.label
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  toWeb(url){
    window.location.href = url
  },
  showWeChat(url){
    this.$store.commit('setWeChatImgUrl',url)
    this.$store.commit('setImgOpacity',1)
    this.$store.commit('setIsShowImg',true)
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
/**
 * getCityIdUrl: 'https://geoapi.qweather.com/v2/city/lookup?location=jiahe&key=',
  getTianQiUrl:'https://devapi.qweather.com/v7/weather/now?location=101250109&key=c5e46449a8d349c09e9de5e6c09b1eeb'
 */
   let t = this
   // 根据城市Id请求获取天气
   axios.all(
     [
       axios.get('https://devapi.qweather.com/v7/weather/now?location=101250503&key='+t.key),//嘉禾
       axios.get('https://devapi.qweather.com/v7/weather/now?location=101250109&key='+t.key),//岳麓区
       axios.get('https://devapi.qweather.com/v7/weather/now?location=101281601&key='+t.key)//东莞
     ]
   ).then(res=>{
    let object1 = new Object()
    object1.city = '嘉禾县'
    object1.value = res[0].data
   
    let object2 = new Object()
    object2.city = '岳麓区'
    object2.value = res[1].data

    let object3 = new Object()
    object3.city = '东莞市'
    object3.value = res[2].data

    t.tianqi.push(object1)
    t.tianqi.push(object2)
    t.tianqi.push(object3)
   })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  setTimeout(()=>{
    let cmd1 = document.getElementById('cmd1')
    cmd1.style.opacity = 1
     
  },2500)
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
// 屏幕小于 1200px
  .right-cmd{
    margin-left: 800px;
    width: 700px;
    height: 500px;
    margin-top: -450px;
    background-color: rgb(54, 52, 52);
    // 设置 左右顶部边框圆角
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    //设置左右顶部边框圆角
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
  }
@media(max-width: 668px){
    .right-cmd{
    width: 99%;
    height: 320px;
    margin-left: 0;
    margin-right: 0;
    margin: 0 auto;
    margin-top: 20px;
  }
}
@media(min-width: 668px) and (max-width: 1199px){
    .right-cmd{
    width: 668px;
    height: 400px;
    margin-left: 0;
    margin-right: 0;
    margin: 0 auto;
    margin-top: 20px;
  }
}

.right-cmd{
  transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  opacity: 0;
}
.right-cmd:hover{
  box-shadow: 0px 0px 10px 5px rgb(141, 138, 138);
  // transform: scale(1.1);
}
.right-cmd-head{
  width: 100%;
  height: 30px;
  color: white;
  text-align: center;
  line-height: 32px;
  // 终端内容区域 把鼠标样式更改为拖动
  cursor: Move;
}
.right-cmd-content{
  width: 100%;
  color: rgb(54, 52, 52);
  background-color:rgb(235, 232, 232);
  height: 100%;
  // 终端内容区域 把鼠标样式更改为编辑
  cursor: text;
  .command{
    font-weight: bold;
  }

  .tianqi {
    padding: 0px 10px;
    height: 25px;
    cursor: pointer;
  img{
    width: 30px;
    height: 30px;
    position: relative;
    top: 8px;
  }
  }
  .tianqi:hover{
    text-decoration: underline;
    color:rgb(56, 166, 240);
  }
  ul{
    margin-top: 2px;
    li{
      cursor: pointer;
    }
    li span:hover{
      color:rgb(56, 166, 240);
    }
  }
}

</style>