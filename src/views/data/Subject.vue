<template>
  <Frame styles="lantern">
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
          v-for="(item, index) of Object.keys(difficultSubject)"
          :key="index"
          :value="item"
        >{{ item }}</option>
      </select>
      <div class="chart-wrapper">
        <v-chart :options="opt" />
      </div>
    </div>
  </Frame>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import FrameButton from '@/components/base/FrameButton.vue'
import { difficultSubject } from './db'

export default {
  components: {
    Frame,
    FrameButton,
  },
  data() {
    return {
      difficultSubject,
      selected: '通信与信息工程学院',
      activeBtn: 'subject',
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
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'none', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: this.difficultSubject[this.selected].map(s => s.subject),
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: '#4d75e8',
                width: 4,
              },
            },
            zlevel: 1,
            axisLabel: {
              margin: 14,
              textStyle: {
                fontWeight: 'bold',
              },
              formatter: (value) => {
                let ret = '';// 拼接加\n返回的类目项
                const maxLength = 5;// 每项显示文字个数
                const valLength = value.length;// X轴类目项的文字个数
                const rowN = Math.ceil(valLength / maxLength); // 类目项需要换行的行数
                if (rowN > 1) {
                  for (let i = 0; i < rowN; i += 1) {
                    let temp = '';// 每次截取的字符串
                    const start = i * maxLength;// 开始截取的位置
                    const end = start + maxLength;// 结束截取的位置
                    // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                    temp = `${value.substring(start, end)}\n`;
                    ret += temp; // 凭借最终的字符串
                  }
                  return ret;
                }
                return value;
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false,
            },
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
          },
        ],
        series: [
          {
            name: '难度系数',
            type: 'bar',
            barWidth: '30%',
            data: this.difficultSubject[this.selected].map(s => s.percentage),
            itemStyle: {
              barBorderRadius: [10, 10, 0, 0],
              barBorderColor: '#432a92',
              barBorderWidth: 2,
              color(params) {
                // build a color map as your need.
                const colorList = ['#ff9dba', '#7095ff', '#7ef7ff']
                return colorList[params.dataIndex]
              },
              opacity: 0.8,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
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
    background:
      url(../../assets/img/Chongyoufengcai/down.png) no-repeat right center/23px 23px,
      #b7e8ff;
    border: 2px solid #1d88eb;
    appearance:none;
    border-radius: 0;
    padding-left: 10px;
  }
  .chart-wrapper {
    width: 400px;
    height: 320px;
  }
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
