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
    animation: bubble 5s infinite;
}
$myTop : 290px;
@keyframes bubble {
    0% {
      transform:  translate(0, $myTop);
    }
    50% {
      transform:  translate(0, $myTop + 10);
    }
    100% {
      transform:  translate(0, $myTop);
    }
}
</style>
