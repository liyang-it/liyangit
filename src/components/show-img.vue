<!--  -->
<template>
<div class='show-img' >
  <div class="show-img-head">
    微信扫一扫
  </div>
  <div class="show-img-content">
    <div class="show-img-content-img">
      <img :src="imgUrl" alt="">
    </div>
    <div class="show-img-content-btn">
      <div @click="close">关闭</div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
  imgUrl(){
    return this.$store.state.weChatImgUrl
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  close(){
    this.$store.commit('setImgOpacity',0)
    this.$store.commit('setIsShowImg',false)
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  console.info(this.$store.state.weChatImgUrl)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

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
@media (max-width: 375px){
  .show-img{
  width: 90%;
}
}
@media (min-width: 500px){
  .show-img{
  width: 400px;
}
}
.show-img{
  height: 400px;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 25%;
  background-color: white;
  border-radius: 20px;
}
.show-img .show-img-head{
  text-align:center;
  height: 40px;
  line-height: 40px;
  padding: 0px;
  color: black;
  font-size: 1.2rem;
  font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-weight: bold;
}
.show-img-content .show-img-content-img {
  width: 300px;
  height: 300px;
  margin: auto;
}.show-img-content-img img{
  width: 100%;
  height: 100%;
}
.show-img-content .show-img-content-btn{
    height: 60px;
    line-height: 60px;
}
.show-img-content-btn div{
        border: none;
        background-color: white;
        font-size: 1.2rem;
        height: 40px;
        width: 70px;
        cursor: pointer;
        margin-left: 45px;
        text-align: center;
        margin: auto;
}
.show-img-content-btn div:hover{
        color:rgb(56, 166, 240);
        font-weight: bold;
        border-bottom: 1px solid rgb(56, 166, 240);
}

</style>