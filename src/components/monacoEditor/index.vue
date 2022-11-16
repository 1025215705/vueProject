<template>
  <div>
    <div class="monaco-editor myEditor" ref="editor"></div>
    <p>
      <a href="https://blog.csdn.net/Ag_wenbi/article/details/126884724">参考文章地址(具体操作)</a>
    </p>
    <p>
      <a href="https://blog.csdn.net/qq_37262037/article/details/127608117">参考文章地址(整体对比)</a>
    </p>
  </div>

</template>
<script>
import loader from '@monaco-editor/loader';
export default {
  data () {
    return {

    }
  },
  mounted () {
    loader.init().then(monaco => {
      monaco.languages.getLanguages(); //支持的所有语言在这里可以看到
      const monacoElem = monaco.editor.create(this.$refs.editor/*或document.getElementById('xxx')*/, {
        value: `
      let x = 5;
      let y=10;
      let obj={
        age:12,
        name:'lihao111111111111111111'
      }`,
        language: 'javascript',// 代码对应的语言，可查看文档
        theme: 'vs-dark'
      })
    });
  }
}
</script>
<style lang="scss" scoped>
.myEditor {
  height: 500px;
  width: 100%;
}
</style>

