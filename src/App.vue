<template>
  <div>
    <div id="app">
      <router-link to="/HelloWorld">HelloWorld</router-link>
      <br>
      <router-link to="/symbol1">阿里图标symbol引用1号</router-link>
      <br>
      <router-link to="/symbol2">阿里图标symbol引用2号</router-link>
      <br>
      <router-link to="/unicode">阿里图标unicode引用</router-link>
      <br>
      <router-link to="/masonry">瀑布流 Multi-columns实现方式</router-link>
      <br>
      <router-link to="/flexbox">瀑布流 flexbox实现方式</router-link>
      <br>
      <router-link to="/waterFallDemo">瀑布流 js实现方式(一个简单的demo)</router-link>
      <br>
      <router-link to="/waterDemo">瀑布流 js实现方式(demo)</router-link>
      <br>
      <router-link to="/highlight">代码高亮插件</router-link>
      <br>
      <router-link to="/vue2AceEditor">vue2AceEditor代码编辑器</router-link>
      <br>
      <router-link to="/monacoEditor">monacoEditor代码编辑器</router-link>
      <br>
      <router-link to="/grid">CSS Grid 网格布局</router-link>
      <br>
      <router-link to="/postcssPtoViewport">postcssPtoViewport</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* for block of numbers */
.hljs-ln-numbers {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  text-align: center;
  color: #ccc;
  border-right: 1px solid #ccc;
  vertical-align: top;
  padding-right: 5px;

  /* your custom style here */
}

/* for block of code */
.hljs-ln-code {
  padding-left: 10px;
}
</style>
