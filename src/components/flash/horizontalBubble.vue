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
.all {
    position: absolute;
    width: 605px;
    height: 28px;
}
#bubble {
    float: left;
    position: relative;
    width: 605px;
    height: 28px;
    background-image: url(../../assets/img/Flash/hBubble.png);
    animation:  bubble 5s infinite;
    z-index: 3;
    left: 330px;
}
$myTop : 65px ;
@keyframes bubble {
    0% {

        top:  $myTop
    }

    50% {

        top:  $myTop +10px
    }

    100% {

        top:  $myTop
    }
}
</style>
