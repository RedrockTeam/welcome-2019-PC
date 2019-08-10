<template>
  <div class="scroll-wrapper">
    <div class="scroll-overflow">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroll-wrapper {
  position: relative;
  .scroll-overflow {
    width: 100%;
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 15px;
      border-left: 1px solid #5e93ff;
      border-right: 1px solid #5e93ff;
      background: #82c3ff;
    }
    &::-webkit-scrollbar-thumb {
      width: 17px;
      background:
        url(../../assets/img/Scroll/scroll-thumb-top.png) no-repeat top,
        url(../../assets/img/Scroll/scroll-thumb-bottom.png) no-repeat bottom,
        url(../../assets/img/Scroll/scroll-thumb-content.png);
    }
    &::-webkit-scrollbar-button:start {
      height: 16px;
      background: url(../../assets/img/Scroll/arrowUp.png) no-repeat;
    }
    &::-webkit-scrollbar-button:end {
      height: 16px;
      background: url(../../assets/img/Scroll/arrowDown.png) no-repeat;
    }
  }
}
</style>
