<template>
    <div id="bubble">
    </div>
</template>

<script>
export default {
  name: 'verticalBubble',
}
</script>

<style lang="scss" scoped>
#bubble {
    width: 36px;
    height: 77px;
    background-image: url(../../assets/img/Flash/vBubble.png);
  background-size: 100% 100%;
    animation: bubble 5s infinite;
}
@keyframes bubble {
    0% {
      transform:  translate(0, 20.4vw);
    }
    50% {
      transform:  translate(0, 21.2vw);
    }
    100% {
      transform:  translate(0, 20.4vw);
    }
}
</style>
