<template>
  <div class="wrapper">
    <div class="title">
      <slot></slot>
    </div>
    <div :style="{ opacity: isFire ? 1 : 0 }" class="left-fire fire"></div>
    <div :style="{ opacity: isFire ? 1 : 0 }" class="right-fire fire"></div>
  </div>
</template>

<script>
export default {
  props: {
    isFire: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
.title {
  position: relative;
  text-align: center;
  line-height: 100px;
  font-size: 32px;
  color: white;
  width: 309px;
  height: 114px;
  z-index: 1;
  background: url(../../assets/img/Title/Title.png) no-repeat;
  background-size: 100% 100%;
  cursor: default;
}
.fire {
  transition: .4s;
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 30px;
  background: url(../../assets/img/Title/fire.png) no-repeat;
  background-size: 100% 100%;
  animation: shack 1s infinite;
}
.right-fire {
  right: 61px;
  animation-delay: .3s;
}
.left-fire {
  left: 61px;
}
@keyframes shack {
  0%{
    transform: translate(1px);
  }
  25%{
    transform: translate(-1px);
  }
  50%{
    transform: translate(0px, 0px);
  }
  75%{
    transform: translate(1px, -1px);
  }
  100%{
    transform: translate(-1px, 1px);
  }
}
</style>
