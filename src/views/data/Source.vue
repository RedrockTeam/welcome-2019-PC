<template>
  <Frame styles="bubble">
    <div class="header">
      <router-link
        v-for="(btn, index) of btns"
        :key="index"
        :to="`/data/${btn.tag}`"
      >
        <frame-button :isActive="activeBtn === btn.tag">{{ btn.content }}</frame-button>
      </router-link>
    </div>
    <!-- <div class="contents"> -->
      <scroll-bar class="scroll-bar">
        <div class="chart-wrapper">
          <v-chart :options="opt" />
        </div>
      </scroll-bar>
    <!-- </div> -->
  </Frame>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import FrameButton from '@/components/base/FrameButton.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'
import { sourceRatio } from './db'

export default {
  components: {
    Frame,
    FrameButton,
    ScrollBar,
  },
  data() {
    return {
      sourceRatio: Object.fromEntries(
        Object.entries(sourceRatio).sort(([, current], [, next]) => current - next),
      ),
      selected: '自动化学院',
      activeBtn: 'source',
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
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['2011年', '2012年'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          show: false,
          max: 800,
        },
        yAxis: {
          type: 'category',
          data: Object.keys(this.sourceRatio),
          axisLine: {
            lineStyle: {
              color: '#4d75e8',
              width: 4,
            },
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'bold',
            },
          },
          zlevel: 1,
        },
        series: [
          {
            name: '学生人数',
            type: 'bar',
            data: Object.values(this.sourceRatio),
            barWidth: '50%',
            itemStyle: {
              normal: {
                barBorderRadius: [0, 10, 10, 0],
                barBorderColor: '#432a92',
                barBorderWidth: 2,
                color(params) {
                  // build a color map as your need.
                  const colorList = ['#ff9dba', '#ffd1a0', '#fff5b4', '#7ef7ff', '#7095ff']
                  return colorList[params.dataIndex % 5]
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
}
.scroll-bar {
  width: 870px;
  height: 376px;
  position: absolute;
  top: 126px;
  border: 3px solid #397dda;
  background: #b0d7ff;
}
.chart-wrapper {
  width: 700px;
  height: 1500px;
  margin: 0 auto;
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
