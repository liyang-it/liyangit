<!--  -->
<template>
<div class='liyang' >
  <!--左边卡片-->
  <left-card ></left-card>
  <!-- 终端-->
  <right-cmd></right-cmd>
  <!--尾部-->
  <foot ></foot>
</div>
</template>

<script>
/* eslint-disable */
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
const foot = () =>import('@/components/foot')
const rightCmd = () =>import('@/components/right-cmd')
const leftCard = () =>import('@/components/left-card')
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  foot,
  leftCard,
  rightCmd
},
data() {
//这里存放数据
return {
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
document.onkeydown=function (e){
        var currKey=0,evt=e||window.event;
        currKey=evt.keyCode||evt.which||evt.charCode;
        if (currKey == 123) {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
    }
},
beforeCreate() {}, // 生命周期 - 创建之前
beforeMount() {}, // 生命周期 - 挂载之前
beforeUpdate() {}, // 生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, // 生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
/** scoped 表示 样式自在当前组件有效*/
//@import url(); 引入公共css类
</style>