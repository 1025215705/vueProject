<template>
  <div>
    <h5>grid布局</h5>
    <div class="container">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
      <div class="item item-10">10</div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  //grid-template-columns: 33.33% 33.33% 33.33%;
  //grid-template-columns: repeat(3, 33.33%);
  grid-template-columns: repeat(2, 100px 100px 100px);
  grid-template-rows: 50px 50px 50px;
  //grid-template-rows: repeat(3, 50px);
  //单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）
  //容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充
  // grid-template-columns: repeat(auto-fill, 100px);
  //了方便表示比例关系，网格布局提供了fr关键字
  //grid-template-columns: 1fr 2fr 3fr;
  //auto 关键字
  //grid-template-columns: 100px auto 100px;
  //网格线的名称
  //grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  //grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
  //两栏式布局
  //grid-template-columns: 70% 30%;
  //十二网格布局
  //grid-template-columns: repeat(12, 1fr);
  //gap 属性
  // grid-row-gap: 20px;
  // grid-column-gap: 20px;
  //grid-gap: <grid-row-gap> <grid-column-gap>; 简写
  //根据最新标准，上面三个属性名的grid-前缀已经删除，
  //grid-column-gap和grid-row-gap写成column-gap和row-gap，grid-gap写成gap
  //grid-gap: 10px 10px;
  //grid-auto-flow  默认的放置顺序是"先行后列" --row  "先列后行" column，
  //row dense和column dense 这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置
  //grid-auto-flow: column dense;
  //place-items属性是align-items属性和justify-items属性的合并简写形式
  //place-items: <align-items> <justify-items>
  //place-items: start end;
  //place-content属性是align-content属性和justify-content属性的合并简写形式
  //place-content: <align-content> <justify-content>
  //place-content: space-around space-evenly
  //grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高
  //grid-auto-rows: 50px;
  //网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas属性用于定义区域。
  // grid-template-areas:
  //   'a b c'
  //   'd e f'
  //   'g h i';
}
.item {
  font-size: 2em;
  text-align: center;
  border: 1px solid #e5e4e9;
  //justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。
  //align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目
  //place-self属性是align-self属性和justify-self属性的合并简写形式
  //place-self: <align-self> <justify-self>;
  //place-self: center center;
}
.item-1 {
  background-color: #ef342a;
  //项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。
  // grid-column-start: 1; 左边框所在的垂直网格线(网格线)
  // grid-column-end: 3; 右边框所在的垂直网格线(网格线)
  // grid-column-start: 1;
  // grid-column-end: 3;
  // grid-row-start: 2;
  // grid-row-end: 4;
  //1号项目的左边框距离右边框跨越2个网格。
  // grid-column-start: span 2;
  // grid-column-end: span 2;
  // grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。
  // grid-column: <start-line> / <end-line>;
  //grid-row: <start-line> / <end-line>;
  //grid-area属性还可用作grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式，直接指定项目的位置
  //grid-area: e; //把1项目放到1区
}

.item-2 {
  // grid-column-start: 1;
  // grid-column-end: 3;
  background-color: #f68f26;
}

.item-3 {
  background-color: #4ba946;
}

.item-4 {
  background-color: #0376c2;
}

.item-5 {
  background-color: #c077af;
}

.item-6 {
  background-color: #f8d29d;
}
.item-7 {
  background-color: #b5a87f;
}

.item-8 {
  background-color: #d0e4a9;
  grid-row-start: 4;
  grid-column-start: 2;
}

.item-9 {
  background-color: #4dc7ec;
  grid-row-start: 5;
  grid-column-start: 3;
}
</style>
