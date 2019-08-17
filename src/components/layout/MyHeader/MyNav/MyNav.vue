<template>
  <nav>
    <div class="wrapper">
      <img class="logo" src="../../../../assets/img/Nav/logo.png" />
      <nav-link
        v-for="(data, index) of navLinkData"
        :key="index"
        :contents="data.contents"
        :route="data.route"
      >
        <router-link to="/" v-if="index === 0">
          <div class="link">{{ data.title }}</div>
        </router-link>
        <a href="https://redrock.team/aboutus/" target="block" v-else-if="index === navLinkData.length - 1">
          <div class="link">{{ data.title }}</div>
        </a>
        <div class="link" v-else>{{ data.title }}</div>
      </nav-link>
    </div>
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
          route: '',
          contents: [],
        },
        {
          title: '邮子攻略',
          route: 'raider',
          contents: [
            {
              title: '新生清单',
              route: 'list',
            },
            {
              title: '交通路线',
              route: 'traffic',
            },
            {
              title: '学生食堂',
              route: 'canteen',
            },
            {
              title: '学生宿舍',
              route: 'dorm',
            },
            {
              title: '校园公众号',
              route: 'public',
            },
            {
              title: '周边生活',
              route: 'life',
            },
            {
              title: '网址大全',
              route: 'website',
            },
          ],
        },
        {
          title: '军训特辑',
          route: 'training',
          contents: [
            {
              title: '军训贴士',
              route: 'tips',
            },
            {
              title: '训练内容',
              route: 'content',
            },
            {
              title: '历年视频',
              route: 'video',
            },
            {
              title: '军训纪律',
              route: 'discipline',
            },
          ],
        },
        {
          title: '迎新活动',
          route: 'event',
          contents: [
            {
              title: '学长学姐帮帮忙',
              route: 'help',
            },
            {
              title: '邮子画像',
              route: 'portrait',
            },
          ],
        },
        {
          title: '数据揭秘',
          route: 'data',
          contents: [
            {
              title: '男女比例',
              route: 'ratio',
            },
            {
              title: '最难科目',
              route: 'subject',
            },
            {
              title: '生源比例',
              route: 'source',
            },
          ],
        },
        {
          title: '重邮风采',
          route: 'styles',
          contents: [
            {
              title: '组织大全',
              route: 'organization',
            },
            {
              title: '宣传视频',
              route: 'propaganda',
            },
            {
              title: '优秀代表',
              route: 'excellent',
            },
            {
              title: '邮苑风采',
              route: 'style',
            },
          ],
        },
        {
          title: '关于我们',
          route: 'about',
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
  width: 100%;
  height: 63px;
  background:
    url(../../../../assets/img/Nav/NavBgLeft.png) no-repeat left/auto 100%,
    url(../../../../assets/img/Nav/NavBgRight.png) no-repeat right/auto 100%,
    url(../../../../assets/img/Nav/NavBg.png) repeat center/ auto 100%;
  font-size: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 2;
  .wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1000px;
    .logo {
      margin-right: 20px;
      width: 151px;
      align-self: center;
    }
    .link {
      width: 100%;
      height: 100%;
      color: #fff;
    }
  }
}
</style>
