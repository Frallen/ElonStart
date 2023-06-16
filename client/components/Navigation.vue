<template>
  <div class="nav">
    <div class="container">
      <div class="nav-wrapper">
        <div class="nav-logo">
          <NuxtImg src="logo.png"></NuxtImg>
        </div>
        <div class="nav-list"><NuxtLink class="nav-list-item"></NuxtLink></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.nav {
  background: #150a0021;
  border-bottom: 1px solid #989393;
  &-wrapper{
    display: flex;
    align-items: center;

  }
  &-logo{

  }
  &-list{
    &-item{

    }
  }
}
</style>