<template>
  <Frame styles="belt">
    <div class="header">
      <router-link
        v-for="(btn, index) of btns"
        :key="index"
        :to="`/data/${btn.tag}`"
      >
        <frame-button :isActive="activeBtn === btn.tag">{{ btn.content }}</frame-button>
      </router-link>
    </div>
    <div class="contents">
      <select id="selecter" v-model="selected">
        <option
          v-for="(item, index) of Object.keys(genderRatio)"
          :key="index"
          :value="item"
        >{{ item }}</option>
      </select>
      <div class="male-label"><span class="bg"></span><span class="gender">男</span></div>
      <div class="female-label"><span class="bg"></span><span class="gender">女</span></div>
      <div class="chart-wrapper">
        <v-chart :options="opt" />
      </div>
    </div>
  </Frame>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import FrameButton from '@/components/base/FrameButton.vue'
import { genderRatio } from './db'

export default {
  components: {
    Frame,
    FrameButton,
  },
  data() {
    return {
      genderRatio,
      selected: '全校',
      activeBtn: 'ratio',
      btns: [
        {
          tag: 'ratio',
          content: '男女比例',
        },
        {
          tag: 'subject',
          content: '最难科目',
        },
        {
          tag: 'source',
          content: '生源比例',
        },
      ],
      opt: {},
    }
  },
  mounted() {
    this.draw()
  },
  watch: {
    selected() {
      this.draw()
    },
  },
  methods: {
    draw() {
      this.opt = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}：{c}',
        },
        polar: {
          tooltip: {
            borderWidth: 5,
          },
        },
        series: [
          {
            name: '男女比例',
            type: 'pie',
            radius: '94%',
            center: ['50%', '50%'],
            color: ['#97ffff', '#ff9dba'],
            hoverOffset: 5,
            data: [
              { value: this.genderRatio[this.selected].male, name: '男' },
              { value: this.genderRatio[this.selected].female, name: '女' },
            ],
            itemStyle: {
              normal: {
                show: false,
                borderColor: '#4d75e8',
                borderWidth: 3,
              },
              emphasis: {
                shadowBlur: 30,
                shadowOffsetX: 10,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
              },
            },
            label: {
              normal: {
                show: true,
                position: 'inside',
                formatter: '{d}%',
                textStyle: {
                  align: 'center',
                  baseline: 'middle',
                  fontSize: 20,
                  fontWeight: 500,
                  color: '#567eea',
                  fontFamily: 'coolfont',
                },
              },
              emphasis: { // 选中时候的样式
                show: true,
                textStyle: {
                  fontSize: 22,
                  fontWeight: 'bold',
                },
              },
            },
          },
        ],
      }
    },
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
.contents {
  @include frameContentStyle;
  margin-top: 111px;
  width: 870px;
  height: 382px;
  background: #b0d7ff;
  border: 3px solid #397dda;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  #selecter {
    position: absolute;
    top: 20px;
    right: 80px;
    width: 14.83333vw;
    height: 26px;
    color: #225bec;
    font-size: 14px;
    background: url(../../assets/img/Chongyoufengcai/down.png) no-repeat right/22px, #b7e8ff;
    border: 2px solid #1d88eb;
    appearance:none;
    border-radius: 0;
    padding-left: 10px;
  }
  .male-label {
    position: absolute;
    bottom: 130px;
    right: 200px;
    width: 50px;
    height: 16px;
    .gender {
      float: right;
      display: block;
      font-size: 14px;
      font-family: '微软雅黑';
      color: #4d75e8;
      line-height: 16px;
      font-weight: bold;
    }
    .bg {
      display: inline-block;
      width: 32px;
      height: 16px;
      background: #97ffff;
    }
  }
  .female-label {
    width: 50px;
    height: 16px;
    position: absolute;
    bottom: 94px;
    right: 200px;
    .gender {
      float: right;
      display: block;
      font-size: 14px;
      font-family: '微软雅黑';
      font-weight: bold;
      color: #4d75e8;
      line-height: 16px;
    }
    .bg {
      display: inline-block;
      width: 32px;
      height: 16px;
      background: #ff9dba;
    }
  }
  .chart-wrapper {
    width: 320px;
    height: 320px;
    border: 3px solid #4d75e8;
    border-radius: 50%;
    overflow: hidden;
  }
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
