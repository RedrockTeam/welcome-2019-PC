<template>
  <div id="title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Title',
}
</script>

<style lang="scss" scoped>
#title {
  margin: 0 auto;
  text-align: center;
  line-height: 100px;
  font-size: 32px;
  color: white;
  width: 309px;
  height: 114px;
  background-image: url(../assets/img/Title/Title.png);
}
</style>
