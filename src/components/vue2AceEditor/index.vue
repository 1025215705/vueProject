<template>
  <div>
    <MyEditor v-model="code"
              language="dockerfile"
              title="dockerfile">
    </MyEditor>
    <p>
      <a href="https://blog.csdn.net/pgzero/article/details/124293083">安装流程</a>
    </p>
  </div>

</template>

<script>
import MyEditor from "./vue2AceEditor";
export default {
  components: {
    MyEditor
  },
  data () {
    return {
      code: `
      let x = 5;
      let y=10;
      let obj={
        age:12,
        name:'lihao'
      }`,
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>

