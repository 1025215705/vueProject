<template>
  <div id="app">
        <router-link to="/HelloWorld">HelloWorld</router-link>
         <br>
        <router-link to="/symbol1">阿里图标symbol引用1号</router-link>
         <br>
          <router-link to="/symbol2">阿里图标symbol引用2号</router-link>
         <br>
         <router-link to="/unicode">阿里图标unicode引用</router-link>
        <router-view></router-view>
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
</style>
