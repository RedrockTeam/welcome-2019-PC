<template>
  <div class="nav-link">
    <slot></slot>
    <div class="contents">
      <div class="content" v-for="(content, index) of contents" :key="index">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: Array,
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';

.nav-link {
  width: 107px;
  height: 59px;
  background: url(../../assets/img/Nav/NavLinkBg.png);
  line-height: 59px;
  text-align: center;
  font-size: $navFontSize;
  color: #fff;
  .contents {
    display: none;
  }
}

.nav-link:hover {
  background: url(../../assets/img/Nav/NavLinkHoverBg.png);
  color: #2d5eff;
  .contents {
    margin-left: 7px;
    border: 2px solid #007fea;
    border-top: none;
    display: flex;
    width: 95px;
    flex-direction: column;
    background: #21beff;
    .content {
      width: 91px;
      min-height: 32px;
      color: #fff;
      line-height: 32px;
      &:hover {
        color: #ff99b6;
        font-size: $navHoverFontSize;
        background: #007fea;
      }
    }
  }
}
</style>
