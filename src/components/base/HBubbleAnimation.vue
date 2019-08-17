<template>
  <div id="bubble">
  </div>
</template>

<style lang="scss" scoped>
#bubble {
    width: 605px;
    height: 28px;
    background-image: url(../../assets/img/Flash/hBubble.png);
  background-size: 100% 100%;
    animation:  bubble 5s infinite;
}
@keyframes bubble {
    0% {
        transform:  translate(0, 4.5vw);
    }

    50% {
      transform:  translate(0, 5.2vw);
    }

    100% {
      transform:  translate(0, 4.5vw);
    }
}
</style>
