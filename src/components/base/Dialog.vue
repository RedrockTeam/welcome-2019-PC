<template>
  <div class="dialog" :style="{ display: isOpen ? 'flex' : 'none' }">
    <div class="wrapper">
      <div class="close" @click="$emit('close')">
        <div class="close-icon"></div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
}
</script>

<style scoped lang="scss">
.dialog {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    position: relative;
    padding: 38px;
    background: #7195fb;
    display: flex;
    justify-content: center;
    align-items: center;
    .close {
      position: absolute;
      top: 0;
      right: 0;
      width: 38px;
      height: 38px;
      border: 1px solid #002dae;
      background: #1965d7;
      &:hover {
        cursor: pointer;
        .close-icon {
          background: #ff90b0;
          &::after {
            background: #ff90b0;
          }
        }
      }
      .close-icon {
        width: 30px;
        height: 8px;
        background: #fff;
        transform: rotate(45deg) translate(12px, 8px);
        position: relative;
        &::after {
          display: block;
          position: absolute;
          content: '';
          width: 30px;
          height: 8px;
          background: #fff;
          transform: rotate(90deg);
        }
      }
    }
  }
}
</style>
