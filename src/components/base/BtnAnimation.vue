<template>
  <div class="light-wrapper">
    <div class="red light"></div>
    <div class="blue light"></div>
    <div class="green light"></div>
  </div>
</template>

<style scoped lang="scss">
.light-wrapper {
  display: flex;
  width: 47px;
  height: 3px;
  justify-content: space-between;
  align-items: flex-end;
  .light {
    width: 12px;
    height: 3px;
    opacity: 0;
    animation: light 3s infinite;
  }
  .red {
    background: #f5b8ca;
    animation-delay: 0s;
  }
  .blue {
    background: #8c95f0;
    animation-delay: 1s;
  }
  .green {
    background: #a2fcb9;
    animation-delay: 2s;
  }
}
@keyframes light {
  0%, 20%, 40%, 100% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
}
</style>
