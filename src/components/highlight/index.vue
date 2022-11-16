<template>
  <div>
    <div>
      <p>vue-highlightjs的高亮</p>
      <el-button type="primary"
                 @click="stop">暂停按钮</el-button>
      <el-button type="primary"
                 @click="clear">清除按钮</el-button>
      <el-button type="primary"
                 @click="start">开始按钮</el-button>
      <br>
      <br>
      <el-row style="height:500px;overflow:scroll;background:black">
        <el-col>
          <pre v-highlightjs="code"
               :key="key"><code class="javascript"></code></pre>
        </el-col>
      </el-row>
      <a href="https://github.com/metachris/vue-highlightjs">安装流程</a>
    </div>
    <div>
      <p>highlightjs的高亮</p>
      <el-button type="primary"
                 @click="stop">暂停按钮</el-button>
      <el-button type="primary"
                 @click="clear">清除按钮</el-button>
      <el-button type="primary"
                 @click="start">开始按钮</el-button>
      <br>
      <br>
      <el-row style="height:500px;overflow:scroll;background:black">
        <el-col>
          <highlightjs language='javascript'
                       :code="code" />
        </el-col>
      </el-row>
      <div>
        <p>
          <a href="https://github.com/wcoder/highlightjs-line-numbers.js">安装地址</a>
        </p>
        <p>
          <a href="https://github.com/highlightjs/highlight.js">highlight</a>
        </p>
        <p>
          <a href="https://blog.csdn.net/weixin_54858833/article/details/126031245?spm=1001.2101.3001.6650.8&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-8-126031245-blog-107076641.pc_relevant_3mothn_strategy_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-8-126031245-blog-107076641.pc_relevant_3mothn_strategy_recovery&utm_relevant_index=15">vue实现html代码高亮+行号</a>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      code: `
      let x = 5;
      let y=10;
      let obj={
        age:12,
        name:'lihao'
      }`,
      timeId: null,
      key: 1
    }
  },
  mounted () {
    $(document).ready(function () {
      $('code.hljs').each(function (i, block) {
        hljs.lineNumbersBlock(block);
      });
    });
  },
  methods: {
    start () {

      this.timeId = setInterval(() => {
        this.code = this.code + `
      let x = 5;
      let y=10;
      let obj={
        age:12,
        name:'lihao'
      }`+ this.key
        console.log(this.key)
        this.key++;
      }, 500);
    },
    stop () {
      clearInterval(this.timeId)
    },
    clear () {
      this.key = 0;
      this.code = '';
    }
  }

}
</script>
<style lang="scss">
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


