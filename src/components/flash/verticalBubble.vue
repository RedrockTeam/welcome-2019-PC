<template>
    <div class="all">
        <div id="bubble">
        </div>
    </div>
</template>

<script>
export default {
  name: 'verticalBubble',
}
</script>

<style lang="scss" scoped>
.all {
    position: absolute;
    width: 36px;
    height: 77px;
}
#bubble {
    float: left;
    width: 36px;
    height: 77px;
    background-image: url(../../assets/img/Flash/vBubble.png);
    z-index: 3;
    position: relative;
    top: 290px;
    left: 145px;
    animation: bubble 3s infinite;
}
$myTop : 290px;
@keyframes bubble {
    0% {
        top : $myTop
    }
    50% {
        top : $myTop + 10
    }
    100% {
        top : $myTop
    }
}
</style>
