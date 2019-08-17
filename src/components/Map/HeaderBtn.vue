<template>
  <button @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  width: 49px;
  height: 45px;
  background: url(../../assets/img/Map/header-btn.png);
  background-size: 100% 100%;
  text-align: center;
  line-height: 45px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: url(../../assets/img/Map/header-btn-hover.png);
    background-size: 100% 100%;
  }
}
</style>
