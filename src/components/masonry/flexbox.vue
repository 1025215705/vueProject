<template>
 <div class="masonry">
     <div class="column">
        <div class="item">
        <div class="item__content">
        </div>
    </div>
     </div>
    <div class="column">
    <div class="item2">
        <div class="item__content">
        </div>
    </div>
    </div>
     <div class="column">
    <div class="item">
        <div class="item__content">
        </div>
    </div>
     </div>
      <div class="column">
    <div class="item2">
        <div class="item__content">
        </div>
    </div>
      </div>
       <div class="column">
    <div class="item">
        <div class="item__content">
        </div>
    </div>
       </div>
        <div class="column">
    <div class="item2">
        <div class="item__content">
        </div>
    </div>
        </div>
         <div class="column">
    <div class="item">
        <div class="item__content">
        </div>
    </div>
         </div>
          <div class="column">
      <div class="item2">
        <div class="item__content">
        </div>
    </div>
          </div>
           <div class="column">
      <div class="item">
        <div class="item__content">
        </div>
    </div>
           </div>
            <div class="column">
      <div class="item2">
        <div class="item__content">
        </div>
    </div>
            </div>
</div>

</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {

  }
};
</script>

<style scoped>
.masonry {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
}
.column {
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
}
.item {
  break-inside: avoid;
  box-sizing: border-box;
  padding: 10px;
  background-color: red;
  border: 1px solid #000;
  height: 300px;
  width: 100%;
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