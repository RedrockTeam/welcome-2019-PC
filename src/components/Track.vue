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
    top:300px;
}
.left {
    float: left;
    width: 19px;
    height: 4562px;
    background-image: url(../assets/img/Connect/guidaoLeft.png);
}
.right {
    float: right;
    width: 19px;
    height: 4562px;
    background-image: url(../assets/img/Connect/guidaoRight.png);
}

</style>
