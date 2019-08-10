<template>
  <Frame styles="lantern">
    <frame-btn-group :btns="btns" @changePage="changePage" />
    <scroll-bar class="scroll-bar">
      <div class="contents">
        <life-content
          class="content"
          v-for="(content, index) in contents[current]"
          :key="index"
          :imgUrl="content.imgUrl"
          :title="content.title"
          :location="content.location"
        />
      </div>
    </scroll-bar>
  </Frame>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import LifeContent from '@/components/LifeContent.vue'
import zhongTong from '@/assets/img/life/tmp.png'
import FrameBtnGroup from '@/components/base/FrameBtnGroup.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'

export default {
  components: {
    Frame,
    FrameBtnGroup,
    LifeContent,
    ScrollBar,
  },
  data() {
    return {
      current: 'bank',
      contents: {
        courier: [
          {
            title: '中通快递',
            location: '位于学生公寓知行苑5栋背后超市旁边',
            imgUrl: zhongTong,
          },
          {
            title: '中通快递',
            location: '位于学生公寓知行苑5栋背后超市旁边',
            imgUrl: zhongTong,
          },
          {
            title: '中通快递',
            location: '位于学生公寓知行苑5栋背后超市旁边',
            imgUrl: zhongTong,
          },
          {
            title: '中通快递',
            location: '位于学生公寓知行苑5栋背后超市旁边',
            imgUrl: zhongTong,
          },
          {
            title: '中通快递',
            location: '位于学生公寓知行苑5栋背后超市旁边',
            imgUrl: zhongTong,
          },
          {
            title: '中通快递',
            location: '位于学生公寓知行苑5栋背后超市旁边',
            imgUrl: zhongTong,
          },
        ],
        bank: [

          {
            title: 'yinhang',
            location: '位于学生公寓知行苑5栋背后超市旁边',
            imgUrl: zhongTong,
          },
          {
            title: 'yinhang',
            location: '位于学生公寓知行苑5栋背后超市旁边',
            imgUrl: zhongTong,
          },
          {
            title: 'yinhang',
            location: '位于学生公寓知行苑5栋背后超市旁边',
            imgUrl: zhongTong,
          },
          {
            title: 'yinhang',
            location: '位于学生公寓知行苑5栋背后超市旁边',
            imgUrl: zhongTong,
          },
        ],
      },
      btns: [
        {
          tag: 'bank',
          content: '银行',
        },
        {
          tag: 'courier',
          content: '快递',
        },
        {
          tag: 'market',
          content: '超市',
        },
        {
          tag: 'food',
          content: '美食',
        },
      ],
    }
  },
  methods: {
    changePage(page) {
      this.current = page
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';

.scroll-bar {
  width: 100%;
  height: 100%;
}
.contents {
  @include frameContentStyle;
  width: 870px;
  display: flex;
  flex-wrap: wrap;
  .content:nth-child(2) {
    margin-left: 30px;
  }
  .content:nth-child(3n) {
    margin-left: 30px;
  }
  .content:nth-child(2n + 3) {
    margin-left: 30px;
  }
  .content {
    margin-bottom: 20px;
  }
}
</style>
