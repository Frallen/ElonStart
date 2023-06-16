<template>
  <div class="background"></div>
  <div class="container">

  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.background {
  position:fixed;
  top:0;
  left:0;
  z-index: -1;
  background: url("bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: block;
}
</style>