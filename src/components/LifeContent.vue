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
    width: 234px;
    height: 139px;
  }
  .title {
    font-size: 18px;
  }
  .location {
    span {
      background: url(../assets/img/life/locationIcon.png);
    }
    font-size: 14px;
  }
}
</style>
