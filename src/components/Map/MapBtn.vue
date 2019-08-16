<template>
  <div @click="$emit('go-place')">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  div {
    width: 78px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    color: #1646c4;
    font-size: 16px;
    background: url(../../assets/img/Map/btn.png);
  background-size: 100% 100%;
    cursor: pointer;
    &:hover {
      color: #fff;
      background: url(../../assets/img/Map/btn-hover.png);
  background-size: 100% 100%;
    }
  }
</style>
