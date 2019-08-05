<template>
  <div @click="$emit('go-place')">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  div {
    /* font-family: 'coolfont'; */
    width: 78px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    color: #1646c4;
    background: url(../../assets/img/Map/btn.png);
    &:hover {
      color: #fff;
      background: url(../../assets/img/Map/btn-hover.png);
    }
  }
</style>
