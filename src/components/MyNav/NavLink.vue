<template>
  <div class="nav-link">
    <slot></slot>
    <div class="contents" v-if="contents.length">
      <div class="filler-top"></div>
      <div class="content" v-for="(content, index) of contents" :key="index">
        {{ content }}
      </div>
      <div class="filler-bottom"></div>
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
    .filler-top {
      min-height: 15px;
      background: #66b9ff;
    }
    .filler-bottom {
      min-height: 15px;
      background: url(../../assets/img/Nav/NavLink-bottom.png);
    }
    transform: translate(0, -13px);
    transition: max-height .6s ease-out;
    overflow: hidden;
    max-height: 0;
    margin-left: 7px;
    border: 2px solid #3764e4;
    border-top: none;
    display: flex;
    width: 95px;
    flex-direction: column;
    background: #66b9ff;
    .content {
      width: 91px;
      padding: 2px;
      color: #fff;
      line-height: 32px;
      font-size: $navLinkFontSize;
    }
  }
}

.nav-link:hover {
  background: url(../../assets/img/Nav/NavLinkHoverBg.png);
  color: #2d5eff;
  .contents {
    max-height: 1000px;
    .content:hover {
      color: #2d5eff;
      font-size: $navLinkHoverFontSize;
      background: #8aedff;
    }
  }
}
</style>
