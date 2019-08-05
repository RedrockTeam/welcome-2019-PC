<template>
  <button @click="$emit('zoom', 0.3)">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  width: 49px;
  height: 45px;
  background: url(../../assets/img/Map/header-btn.png);
  text-align: center;
  line-height: 45px;
  color: #fff;
  &:hover {
    background: url(../../assets/img/Map/header-btn-hover.png);
  }
}
</style>
