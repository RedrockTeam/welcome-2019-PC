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
            type: 'none',
          },
          formatter(params) {
            return `
              ${params[0].axisValueLabel}<br />
              <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params[0].color};"></span>${params[0].seriesName}：${params[0].value === 800 ? '2868' : params[0].value}
            `
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
              barBorderRadius: [0, 10, 10, 0],
              barBorderColor: '#432a92',
              barBorderWidth: 2,
              color(params) {
                // build a color map as your need.
                const colorList = ['#ff9dba', '#ffd1a0', '#fff5b4', '#7ef7ff', '#7095ff']
                return colorList[params.dataIndex % 5]
              },
              opacity: 0.7,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                opacity: 1,
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
.scroll-bar {
  width: 870px;
  height: 382px;
  position: absolute;
  top: 113px;
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
