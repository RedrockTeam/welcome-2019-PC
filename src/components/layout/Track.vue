<template>
    <div id="guidao">
        <div class="left"></div>
        <div class="right"></div>
    </div>
</template>


<script>
export default {
  name: 'guidao',
}
</script>

<style lang="scss" scoped>
#guidao {
    width: 1440px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 322px;
    z-index: 0;
}
.left {
    float: left;
    width: 19px;
    height: 4562px;
    background-image: url(../../assets/img/Connect/track.png);
    transform: rotateY(180deg);
}
.right {
    float: right;
    width: 19px;
    height: 4562px;
    background-image: url(../../assets/img/Connect/track.png);
}

</style>
