<template>
 <!-- <div class="masonry">
     <div class="column" v-for="(item,index) in data" :key="index">
        <div class="item" :style="{height:item.height}">
        <div class="item__content">
            {{index}}
        </div>
    </div>
     </div>
</div> -->
<div class="box">
    <div class="leftBox" ref="leftBox">
            <div class="item"  v-for="(item,index) in leftBox"   :key="index" :style="{height:item.height+'px'}">
        <img class="item__content" :src="item.url"/>
        <p>{{item.index}}</p>
        
    </div>
    </div>
     <div class="rightBox"  ref="rightBox">
      <div class="item"  v-for="(item,index) in rightBox" :key="index" :style="{height:item.height+'px'}">
        <img class="item__content" :src="item.url"/>
         <p>{{item.index}}</p>
     </div>
    </div>
</div>
</template>

<script>
export default {
    
  data() {
    return {
      data: [
        {
          height: "100",
          url:"http://dummyimage.com/500x100/f7dc6f/FFF.png&text=mainpic1",
          index:1
        },
        {
          height: "200",
          url:"http://dummyimage.com/500x200/48c9b0/FFF.png&text=mainpic2",
           index:2
        },
        {
          height: "300",
           url:"http://dummyimage.com/500x300/f1948a/FFF.png&text=mainpic3",
          index:3
        },
        {
          height: "400",
          url:"http://dummyimage.com/500x400/f7dc6f/FFF.png&text=mainpic4",
           index:4
        },
        {
          height: "500",
           url:"http://dummyimage.com/500x500/f7dc6f/FFF.png&text=mainpic5",
           index:5
        },
        {
          height: "400",
           url:"http://dummyimage.com/500x400/f1948a/FFF.png&text=mainpic6",
           index:6
        },
        {
          height: "300",
           url:"http://dummyimage.com/500x300/f1948a/FFF.png&text=mainpic7",
           index:7
        },
        {
          height: "200",
           url:"http://dummyimage.com/500x200/894FC4/FFF.png&text=mainpic8",
           index:8
        },
        {
          height: "100",
          url:"http://dummyimage.com/500x100/f1948a/FFF.png&text=mainpic9",
           index:9
        },
         {
          height: "200",
           url:"http://dummyimage.com/500x200/5faee3/FFF.png&text=mainpic10",
           index:10
        },
         {
          height: "900",
           url:"http://dummyimage.com/500x900/5faee3/FFF.png&text=mainpic11",
           index:11
        },
        {
          height: "600",
           url:"http://dummyimage.com/500x600/894FC4/FFF.png&text=mainpic12",
           index:12
        },
          {
          height: "200",
           url:"http://dummyimage.com/500x200/5faee3/FFF.png&text=mainpic13",
           index:13
        }
      ],
      rightHight: 0,
      leftHight: 0,
      rightBox: [],
      leftBox: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log("初始化");
      this.$nextTick(() => {
        console.log("leftBox", this.$refs.leftBox.offsetHeight);
        console.log("rightBox", this.$refs.rightBox.offsetHeight);
      });

      this.data.map((item, index) => {
          console.log("rightHight",this.rightHight);
          console.log("leftHight",this.leftHight);
        if (this.rightHight < this.leftHight) {
          this.rightBox.push(item);
          this.rightHight = this.rightHight + Number(item.height);
        } else {
          this.leftBox.push(item);
          this.leftHight = this.leftHight + Number(item.height);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  display: flex;
}
.leftBox,
.rightBox {
  width: calc(100% / 2);
}
.masonry {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
}
.column {
  display: flex;
  flex-direction: column;
  width: calc(100% / 2);
}
.item {
  break-inside: avoid;
  box-sizing: border-box;
  background-color: red;
  border: 1px solid #000;
 // height: 300px;
  width: 100%;
  &__content{
    height: 100%;
    width: 100%;
  }
}
.item2 {
  break-inside: avoid;
  box-sizing: border-box;
  padding: 10px;
  background-color: blue;
  border: 1px solid #000;
  height: 600px;
  width: 100%;
}
</style>