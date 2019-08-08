<template>
    <div class="all">
        <div id="bubble">
        </div>
    </div>
</template>

<script>
export default {
  name: 'horizontalBubble',
}
</script>

<style lang="scss" scoped>
#bubble {
    width: 605px;
    height: 28px;
    background-image: url(../../assets/img/Flash/hBubble.png);
    animation:  bubble 5s infinite;
}
$myTop : 65px ;
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
