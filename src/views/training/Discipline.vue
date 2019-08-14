<template>
  <Frame styles="lantern">
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
        <div class="time">
          <div class="title">作息时间</div>
          <div class="time-wrapper">
            <div class="time-content" v-for="(time, index) of times" :key="index">
              <div class="clock">{{ time.time }}</div>
              <div class="period">{{ time.period }}</div>
              <div class="desc">{{ time.desc }}</div>
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
      activeBtn: 'discipline',
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
          title: '请假制度',
          tips: [
            {
              number: '一',
              content: '军训期间请假遵循一事一请假的原则，无特殊事由不得请假；',
            },
            {
              number: '二',
              content: '学生在军训场上感到不适，可直接通过“打报告”的形式向教官请假，在训练场边暂时休息；',
            },
            {
              number: '三',
              content: '请假半天以下的由军训排排长经商辅导员同意后批准；',
            },
            {
              number: '四',
              content: '请假半天以上，3天以下的，由学生本人提出书面申请（请假条见附页），经辅导员签字后报校武装部审批，并由学生本人将审批后的申请交军训排排长实施；',
            },
            {
              number: '五',
              content: '请假3天以上的需报请军训师领导同意；',
            },
            {
              number: '六',
              content: '请假须外出的，须详细说明原因，并定期向辅导员报告动态；',
            },
            {
              number: '七',
              content: '请假时间累计原则上不得超过军训时间的1/3（即5天）；',
            },
            {
              number: '八',
              content: '如有其他特殊原因请假超过5天的，须专门报请军训师批准。',
            },
          ],
        },
      ],
      times: [
        {
          time: '06:20',
          period: '6:20',
          desc: '起床',
        },
        {
          time: '06:30',
          period: '06:30-07:20',
          desc: '早操',
        },
        {
          time: '08:00',
          period: '08:00-12:00',
          desc: '操课',
        },
        {
          time: '12:00',
          period: '12:00-14:50',
          desc: '午休',
        },
        {
          time: '15:00',
          period: '15:00-17:00',
          desc: '操课',
        },
        {
          time: '17:00',
          period: '17:00-17:30',
          desc: '操课',
        },
        {
          time: '17:30',
          period: '17:30-19:00',
          desc: '晚餐',
        },
        {
          time: '19:00',
          period: '19:00-21:00',
          desc: '训练',
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
}
.scroll-bar {
  width: 870px;
  height: 382px;
  position: absolute;
  top: 122px;
  border: 3px solid #397dda;
  background: #b0cfff;
}
.contents {
  @include frameContentStyle;
  margin-top: 0;
  font-size: 10px;
  padding: 20px;
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
      margin: 20px auto;
    }
    .content-wrapper {
      .content-tips {
        color: #1340b1;
        font-size: 14px;
        font-family: '微软雅黑';
        line-height: 24px;
        margin: 10px 0;
        .content-span {
          margin: auto 0;
          float: left;
          font-size: 20px;
        }
      }
    }
  }
  .time {
    .title {
      font-size: 26px;
      color: #fff;
      width: 187px;
      height: 53px;
      background: #4d75e8;
      background: linear-gradient(-135deg, transparent 6px, #4d75e8 0);
      text-align: center;
      line-height: 53px;
      margin: 20px auto;
    }
    .time-wrapper {
      width: 666px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .time-content {
        .clock {
          margin: 0 20px;
          width: 125px;
          height: 95px;
          background: url(../../assets/img/Junxunteji/clock.png);
          text-align: center;
          line-height: 114px;
          font-size: 24px;
          color: #fff;
        }
        .period {
          margin-top: 10px;
          text-align: center;
          font-size: 16px;
          font-family: '微软雅黑';
          color: #0231a9;
        }
        .desc {
          text-align: center;
          font-size: 16px;
          font-family: '微软雅黑';
          color: #0231a9;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
