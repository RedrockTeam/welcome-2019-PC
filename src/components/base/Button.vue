<template>
  <div id="button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style lang="scss" scoped>
#button {
  font-size: 20px;
  color: rgb(22, 69, 169);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 133px;
  height: 48px;
  line-height: 2px;
  background: url(../../assets/img/Button/button.png);
  background-size: 100% 100%;
  cursor: pointer;
}
#button:hover {
  background-image: url(../../assets/img/Button/buttonHover.png);
  background-size: 100% 100%;
  color: white;
}
</style>
