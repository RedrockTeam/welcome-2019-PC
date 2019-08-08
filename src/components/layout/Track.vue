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
    top: -402px;
    z-index: 0;
}
.left {
    float: left;
    width: 19px;
    height: 4580px;
    background:
      url(../../assets/img/Connect/track.png) no-repeat,
      url(../../assets/img/Connect/trackbg.png);
    transform: rotateY(180deg);
}
.right {
    float: right;
    width: 19px;
    height: 4580px;
    background:
      url(../../assets/img/Connect/track.png) no-repeat,
      url(../../assets/img/Connect/trackbg.png);
}
</style>
