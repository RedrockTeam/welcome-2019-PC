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
import FrameBtnGroup from '@/components/base/FrameBtnGroup.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'
import nongye from '@/assets/img/Strategy/zhoubianshenghuo/yinhang/img1.jpg'
import youzheng from '@/assets/img/Strategy/zhoubianshenghuo/yinhang/img2.jpg'
import gongshang from '@/assets/img/Strategy/zhoubianshenghuo/yinhang/img3.jpg'
import shangye from '@/assets/img/Strategy/zhoubianshenghuo/yinhang/img4.jpg'
import jingdong from '@/assets/img/Strategy/zhoubianshenghuo/kuaidi/img1.jpg'
import yunda from '@/assets/img/Strategy/zhoubianshenghuo/kuaidi/img2.jpg'
import zhongtong from '@/assets/img/Strategy/zhoubianshenghuo/kuaidi/img3.jpg'
import ems from '@/assets/img/Strategy/zhoubianshenghuo/kuaidi/img5.jpg'
import baishi from '@/assets/img/Strategy/zhoubianshenghuo/kuaidi/img6.jpg'
import cainiao from '@/assets/img/Strategy/zhoubianshenghuo/kuaidi/img7.jpg'
import baishuo from '@/assets/img/Strategy/zhoubianshenghuo/chaoshi/img1.jpg'
import yonghui from '@/assets/img/Strategy/zhoubianshenghuo/chaoshi/img2.jpg'
import shiji from '@/assets/img/Strategy/zhoubianshenghuo/chaoshi/img3.jpg'
import gong from '@/assets/img/Strategy/zhoubianshenghuo/meishi/img1.jpg'
import cha from '@/assets/img/Strategy/zhoubianshenghuo/meishi/img2.jpg'
import mi from '@/assets/img/Strategy/zhoubianshenghuo/meishi/img3.jpg'
import da from '@/assets/img/Strategy/zhoubianshenghuo/meishi/img4.jpg'
import yi from '@/assets/img/Strategy/zhoubianshenghuo/meishi/img5.jpg'
import he from '@/assets/img/Strategy/zhoubianshenghuo/meishi/img6.jpg'
import kao from '@/assets/img/Strategy/zhoubianshenghuo/meishi/img7.jpg'
import wu from '@/assets/img/Strategy/zhoubianshenghuo/meishi/img8.jpg'
import mao from '@/assets/img/Strategy/zhoubianshenghuo/meishi/img9.jpg'
import jiu from '@/assets/img/Strategy/zhoubianshenghuo/meishi/img10.jpg'
import e from '@/assets/img/Strategy/zhoubianshenghuo/meishi/img11.jpg'

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
            title: '京东&顺丰&圆通',
            location: '位于樱花园6栋，二教与马克思主义学院下面居民区石碑处。',
            imgUrl: jingdong,
          },
          {
            title: '韵达&申通',
            location: '位于15栋楼下靠近太极操场一侧。',
            imgUrl: yunda,
          },
          {
            title: '中通快递',
            location: '重邮南部校区62栋二单元',
            imgUrl: zhongtong,
          },
          {
            title: '邮政自提柜&EMS快递',
            location: '位于香樟园四号，八十万厕所旁边。',
            imgUrl: ems,
          },
          {
            title: '百世快递',
            location: '位于阳光图文后面。',
            imgUrl: baishi,
          },
          {
            title: '菜鸟驿站&丰巢',
            location: '老校门对面左手边大茶杯奶茶店旁斜坡上行右边巷子处。',
            imgUrl: cainiao,
          },
        ],
        bank: [
          {
            title: '农业银行',
            location: '新校门出门右转，新世纪超市旁边。',
            imgUrl: nongye,
          },
          {
            title: '中国邮政储蓄银行',
            location: '老校门出门右转，绝味鸭脖旁边。',
            imgUrl: youzheng,
          },
          {
            title: '中国工商银行自助服务点',
            location: '新校门出门，左转直走，老校门出门，右转直走。',
            imgUrl: gongshang,
          },
          {
            title: '重庆农村商业银行',
            location: '老校门出门，过马路，右转。',
            imgUrl: shangye,
          },
        ],
        market: [
          {
            title: '渝芳百货商场',
            location: '新校门出门，左转直走。老校门出门，右转直走。',
            imgUrl: baishuo,
          },
          {
            title: '永辉超市',
            location: '新校门出门过马路，右转直走。',
            imgUrl: yonghui,
          },
          {
            title: '新世纪超市',
            location: '新校门出门，左转直走，老校门出门，右转直走。',
            imgUrl: shiji,
          },
        ],
        food: [
          {
            title: '贡茶',
            location: '老校门出门右手边五十米左右。',
            imgUrl: gong,
          },
          {
            title: '茶百道/书亦/渴望',
            location: '老校门出门过红绿灯右手边，第二个巷子（堕落街）梅菜扣肉饼前进入十几米处可见。',
            imgUrl: cha,
          },
          {
            title: '蜜雪冰城/古茗',
            location: '老校门对面。',
            imgUrl: mi,
          },
          {
            title: '大茶杯',
            location: '老校门出门过红绿灯左手边华莱士前面巷子处。',
            imgUrl: da,
          },
          {
            title: '一只酸奶牛',
            location: '新校门过马路左手边十几米可见。',
            imgUrl: yi,
          },
          {
            title: '益禾堂',
            location: '老校门出门过红绿灯左手边。',
            imgUrl: he,
          },
          {
            title: '柒露营自助烤肉',
            location: '老校门对面左手边直走可见一公共厕所，巷子处进入。',
            imgUrl: kao,
          },
          {
            title: '无届青年餐馆',
            location: '老校门对面左手边直走可见一公共厕所，巷子处进入。',
            imgUrl: wu,
          },
          {
            title: '毛哥老鸭汤',
            location: '校门对面左手边直走，公交车站附近。',
            imgUrl: mao,
          },
          {
            title: '九村烤脑花',
            location: '校门对面左手边直走，公交车站附近。',
            imgUrl: jiu,
          },
          {
            title: '鹅掌老鸭汤',
            location: '校门对面左手边直走，公交车站附近。',
            imgUrl: e,
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
  .content:nth-child(7) {
    margin-left: 0px;
  }
  .content:nth-child(8) {
    margin-left:30px;
  }
  .content {
    margin-bottom: 20px;
  }
}
</style>
