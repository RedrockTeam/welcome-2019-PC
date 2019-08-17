<template>
  <Frame styles="belt">
    <div class="header">
      <router-link
        v-for="(btn, index) of btns"
        :key="index"
        :to="`/training/${btn.tag}`"
      >
        <frame-button :isActive="activeBtn === btn.tag">{{ btn.content }}</frame-button>
      </router-link>
    </div>
    <scroll-bar class="scroll-bar">
      <div class="contents">
        <div class="content" v-for="(content, index) of contents" :key="index">
          <div class="content-title">{{ content.title }}</div>
          <div class="content-wrapper">
            <div class="content-tips" v-for="tip of content.tips" :key="tip.number">
              <span class="content-span">{{ tip.number }}、</span>
              {{ tip.content }}
            </div>
          </div>
        </div>
      </div>
    </scroll-bar>
  </Frame>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'
import FrameButton from '@/components/base/FrameButton.vue'

export default {
  components: {
    Frame,
    ScrollBar,
    FrameButton,
  },
  data() {
    return {
      activeBtn: 'tips',
      btns: [
        {
          tag: 'tips',
          content: '军训贴士',
        },
        {
          tag: 'content',
          content: '训练内容',
        },
        {
          tag: 'video',
          content: '历年视频',
        },
        {
          tag: 'discipline',
          content: '军训纪律',
        },
      ],
      contents: [
        {
          title: '饮食作息',
          tips: [
            {
              number: '一',
              content: '早餐一定要吃好，午餐一定要吃饱，晚餐要吃得适宜。军训时饭量会增大，不想发胖的妹子在晚饭时一定要管好自己的嘴巴；由于天气比较炎热，也会有一些同学吃不下饭，建议多少吃点，军训体力消耗很大，以免身体不适。',
            },
            {
              number: '二',
              content: '多吃富含多种维生素的水果蔬菜，可以淡化黑色素，在一定程度上起到美白的效果。',
            },
            {
              number: '三',
              content: '饮用水、运动饮料（军训期间会大量流汗，适量补充水分很重要，建议可以喝一些葡萄糖水）。',
            },
            {
              number: '四',
              content: '少吃冰的东西（军训期间天气会比较炎热，降暑很有必要，但是要少吃冰的东西，以免引起肠胃的不舒服）。',
            },
            {
              number: '五',
              content: '尽量早睡（晚上军训结束，回宿舍尽快洗漱，充足的睡眠才能保证第二天有足够的精力进行训练）。',
            },
          ],
        },
        {
          title: '防晒装备',
          tips: [
            {
              number: '一',
              content: '军训防晒是最重要的环节，不管是男生还是女生，都一定要注意防晒，因为防晒不仅是要防晒黑，更是要防晒伤。',
            },
            {
              number: '二',
              content: '防晒霜、防晒喷雾（最好买SPF50、PA+++的，SPF是防晒黑指数，PA是防晒伤指数，军训时长时间在烈日下暴晒，用指数高的比较适宜。出门前半个小时就要涂，因为防晒霜也要时间吸收。可以随身携带防晒喷雾，军训时出汗多，可以定时补涂一次。防晒霜的涂抹位置最好是脸部、脖子以及所有穿上军训服后能够漏出来的地方）。',
            },
            {
              number: '三',
              content: '湿纸巾、吸油面纸（擦汗必备，擦完脸再涂上防晒霜）。',
            },
            {
              number: '四',
              content: '润唇膏（可选择一些带有防晒指数的)。',
            },
            {
              number: '五',
              content: '晒后修复（可以用芦荟胶或大瓶化妆水做水膜，也可以直接敷保湿面膜）。',
            },
          ],
        },
        {
          title: '生活用品',
          tips: [
            {
              number: '一',
              content: '防暑药（藿香正气水等）。',
            },
            {
              number: '二',
              content: '花露水、驱蚊水（晚上军训时会有一些蚊虫，备上以防止蚊虫叮咬）。',
            },
            {
              number: '三',
              content: '风油精（提神醒脑。军训时需要早起，有些同学可能会睡眠不足，可以起到提神的功效。此外，风油精也会让人觉得特别清凉）。',
            },
            {
              number: '四',
              content: '维C片、维E片（补充维生素，淡化黑色素，美白皮肤）。',
            },
            {
              number: '五',
              content: '创可贴、棉签、碘伏（创可贴要随身带几枚，以备不时之需)。',
            },
            {
              number: '六',
              content: '水杯（水杯最好是有盖子的，训练会大量出汗，休息时间有饮水点，备上可以随时补充水）。',
            },
          ],
        },
        {
          title: '军训神器',
          tips: [
            {
              number: '一',
              content: '发绳、发卡（军训时注重仪容仪表，长头发需要绑起来，刘海需要别起来，另外发卡也是卡帽子神器）。',
            },
            {
              number: '二',
              content: '厚鞋垫、卫生巾（军训发的鞋子会有点硬，大家请备好厚鞋垫或是垫鞋子的卫生巾。卫生巾可以吸汗，垫着也会更软一点，鞋子穿着了，站军姿、踢正步时会更有力量呐）。',
            },
            {
              number: '三',
              content: '运动袜（舒适、吸汗。另外，参加走方阵的同学按要求要穿深色的袜子）。',
            },
            {
              number: '四',
              content: '零钱（随身带零钱，以备不时之需）。',
            },
            {
              number: '五',
              content: '泡脚（军训训练强度会比较大，用热水泡脚既解乏，又利于睡眠）。',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';

.header {
  @include frameHeaderStyle;
  z-index: 1;
  height: 85px;
  padding-top: 25px;
}
.scroll-bar {
  width: 870px;
  height: 382px;
  position: absolute;
  top: 111px;
  border: 3px solid #397dda;
  background: #b0cfff;
}
.contents {
  @include frameContentStyle;
  margin-top: 0;
  font-size: 10px;
  padding: 30px;
  padding-top: 0;
  .content {
    .content-title {
      font-size: 26px;
      color: #fff;
      width: 187px;
      height: 53px;
      background: #4d75e8;
      background: linear-gradient(-135deg, transparent 6px, #4d75e8 0);
      text-align: center;
      line-height: 53px;
      margin: 45px auto;
    }
    .content-wrapper {
      .content-tips {
        color: #1340b1;
        font-size: 14px;
        font-family: '微软雅黑';
        line-height: 18px;
        margin: 20px 0;
        .content-span {
          margin: auto 0;
          float: left;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
