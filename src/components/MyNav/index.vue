<template>
  <nav>
    <img class="logo" src="../../assets/img/Nav/logo.png" />
    <nav-link v-for="(data, index) of navLinkData" :key="index" :contents="data.contents">
      {{ data.title }}
    </nav-link>
  </nav>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  data() {
    return {
      navLinkData: [
        {
          title: '首页',
          contents: [],
        },
        {
          title: '邮子攻略',
          contents: ['新生清单', '交通路线', '学生食堂', '学生宿舍', '校园公众号', '周边生活', '网址大全'],
        },
        {
          title: '军训特辑',
          contents: ['军训贴士', '训练内容', '历年视频', '军训纪律'],
        },
        {
          title: '迎新活动',
          contents: ['学长学姐帮帮忙'],
        },
        {
          title: '数据揭秘',
          contents: ['男女比例', '最难科目', '生源比例'],
        },
        {
          title: '重邮风采',
          contents: ['组织大全', '宣传视频', '优秀代表', '邮苑风采'],
        },
        {
          title: '关于我们',
          contents: [],
        },
      ],
    }
  },

  components: {
    NavLink,
  },
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  width: 1440px;
  height: 63px;
  background: url(../../assets/img/Nav/NavBg.png);
  font-size: 0;
  padding: 0 220px;
  position: fixed;
  top: 0;
  left: 0;
  .logo {
    margin-right: 30px;
    width: 141px;
    height: 48px;
    align-self: center;
  }
}
</style>
