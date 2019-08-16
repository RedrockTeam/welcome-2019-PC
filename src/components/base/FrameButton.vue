<template>
  <div :class="{ btn: true, active: isActive }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    trigger() {
      this.isActive = !this.trigger
    },
  },
}
</script>


<style scopde lang="scss">
@import '@/assets/style/variable.scss';

.btn {
  width: 187px;
  height: 60px;
  font-size: $frameButtonFontSize;
  text-align: center;
  line-height: 65px;
  color: #1645c4;
  cursor: pointer;
  background: url(../../assets/img/Button/frameButton.png);
  background-size: 100% 100%;
  &:hover, &.active {
    background: url(../../assets/img/Button/frameButtonHover.png);
  background-size: 100% 100%;
    color: #fff;
  }
}
</style>
