<template>
  <div id="qrcode">
    <div class="qrcode_left">
    </div>
    <div class="qrcode_right">
    </div>
  </div>
</template>

<script>
export default {
  name: 'QRcode',
}
</script>

<style scoped lang="scss">
.qrcode_left {
  width: 220px;
  height: 251px;
  position: fixed;
  bottom: 150px;
  background-image: url(../assets/img/QRcode/qrcodeLeft.png);
}
.qrcode_right {
  width: 220px;
  height: 251px;
  background-image: url(../assets/img/QRcode/qrcodeRight.png);
  position: fixed;
  right: 0px;
  bottom: 150px;
}
</style>
