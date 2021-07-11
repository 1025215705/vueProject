<template>
 <div class="masonry">
    <div class="item">
        <div class="item__content">
        </div>
    </div>
    <div class="item">
        <div class="item__content">
        </div>
    </div>
    <div class="item">
        <div class="item__content">
        </div>
    </div>
    <div class="item">
        <div class="item__content">
        </div>
    </div>
    <div class="item">
        <div class="item__content">
        </div>
    </div>
    <div class="item">
        <div class="item__content">
        </div>
    </div>
    <div class="item">
        <div class="item__content">
        </div>
    </div>
      <div class="item">
        <div class="item__content">
        </div>
    </div>
      <div class="item">
        <div class="item__content">
        </div>
    </div>
      <div class="item">
        <div class="item__content">
        </div>
    </div>
    <!-- more items -->
    flexbox 实现瀑布流

</div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
 
    }
  };
</script>

<style scoped>
 .masonry {
     -moz-column-count:5; /* Firefox */
-webkit-column-count:5; 
    column-count: 5;
    column-gap: 5;
    background-color: blue;
}

.item {
    break-inside: avoid;
    box-sizing: border-box;
    padding: 10px;
     background-color:red;
     border: 1px solid #000;
     height: 300px;
     width: 300px;
}

</style>