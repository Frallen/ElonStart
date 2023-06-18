<template>
  <div>
    <Navigation></Navigation>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const {getNavigation} = useMain()
await getNavigation()
</script>

<style scoped lang="less">

</style>