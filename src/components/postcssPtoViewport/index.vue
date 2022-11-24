<template>
  <div class="bgColor">
    <p>1: npm install postcss-px-to-viewport --save-dev</p>
    <p>2: 在postcss.config.js添加配置</p>
    <p>3:npm install postcss-loader postcss-px-to-viewport --save-dev</p>
    <p>4:vue-cli3：vue.config.js配置(css 属性设置，本文也是用的这种)</p>
    <p>5:采坑：/* 不能直接在元素 上使用style 是不会生效的 /</p>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.bgColor {
  width: 750px;
  height: 400px;
  background-color: black;
  color: white;
}
</style>

