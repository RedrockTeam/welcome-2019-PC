<template>
  <div class="life-content">
    <img :src="imgUrl" />
    <div class="title">{{ title }}</div>
    <div class="location">
      <span></span>
      {{ location }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    title: String,
    location: String,
  },
}
</script>

<style scopde lang="scss">
.life-content {
  width: 269px;
  height: 278px;
  background: #b0cfff;
  border: 2px solid #397dda;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  img {
    width: 225px;
    height: 139px;
    border: 2px solid #0235c7;
  }
  .title {
    font-size: 0.0125vw;
    margin: 10px 0 7px;
    font-family: '微软雅黑';
    font-size: 18px;
    color: #0231a9;
  }
  .location {
    span {
      display: block;
      width: 13px;
      height: 17px;
      float: left;
      background: url(../assets/img/life/locationIcon.png) no-repeat;
  background-size: 100% 100%;
    }
    text-indent: 6px;
    font-size: 14px;
    color: #124ce3;
    line-height: 20px;
    font-family: '微软雅黑';
  }
}
</style>
