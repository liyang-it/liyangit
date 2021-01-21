<!--  -->
<template>
<div class='foot' id="foot">
  <div class="content">
    <p>©&nbsp;&nbsp;{{year}}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/">{{bah}}</a></p><br>
    <p>Main producer: {{enName}}</p><br>
    <!-- <p>总访问量&nbsp;&nbsp;{{accessNumber}}</p><br> -->
    <p @click="toYpy('https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral')">本网站由&nbsp;<img src="http://www.file.liyangit.top/liyangit/%E5%8F%88%E6%8B%8D%E4%BA%91_logo6.png">&nbsp;提供CDN加速/云储存服务</p>
  </div>
</div>
</template>

<script>
/* eslint-disable */
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from 'axios'
import {foot} from '@/api/user.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  foot
},
data() {
//这里存放数据
return {
  accessNumber: ""
};
},
//监听属性 类似于data概念
computed: {
  enName(){
    return foot.enName
  },
  year(){
    return new Date().getFullYear()
  },
  bah(){
    return foot.bah
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
toYpy(url){
  window.location.href = url
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  let t = this
  // axios.all(
  //   [
  //     axios.get('http://www.liyangit.top/liyang/incrAccessNumber.json'),
  //     axios.get('http://www.liyangit.top/liyang/getAccessNumber.json')
  //   ]
  // ).then(res=>{
  //   t.accessNumber = res[1].data.data
  // })
  setTimeout(()=>{
    //去除透明
     document.getElementById('foot').style.opacity = 1
  },1800)
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
@media (max-width: 668px){
  .content{
    position: relative;
  }
}
@media (min-width: 1200px){
  .content{
    position: fixed;
  }
}
.foot{
  width: 100%;
  // 设置元素为透明
  opacity: 0;
  filter: Alpha(opacity=50);
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  margin-top: 15px;
  
}
.content{
  width: 98%;
  bottom: 10px;
  text-align: center;
  p{
    display: inline;
    padding: 0px;
    color: white;
    font-weight: bold;
    font-family: FiraCode;
    a{
      cursor:pointer;
      transition: all 0.3s linear;
      -webkit-transition: all 0.3s linear;
      text-decoration: none;
      color: white;
    }
    a:hover{
      // background: linear-gradient(to left, rgb(204, 177, 235), rgb(116, 204, 211));
      color: rgb(204, 177, 235);
    }
    img{
      height: 34px;
      position: relative;
      top: 12px;
    }
  }
}
</style>