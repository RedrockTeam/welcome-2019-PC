<template>
  <Frame styles="lantern">
    <div class="header">
      <router-link
        v-for="(btn, index) of btns"
        :key="index"
        :to="`/styles/${btn.tag}`"
      >
        <frame-button :isActive="activeBtn === btn.tag">{{ btn.content }}</frame-button>
      </router-link>
      <div class="title-wrapper">
        <div
          v-for="(title, index ) of titles"
          :class="{ title: true, active: title === activeTitle }"
          :key="index"
          @click="changePage(title)"
        >{{ title }}<div class="dec"></div></div>
      </div>
      <div class="fill"></div>
    </div>
    <scroll-bar class="scroll-bar">
      <div class="contents" v-if="activeTitle === '教师代表'">
        <div v-for="(image,index) in images" :key="index" class="content">
            <img class="img" :src="images[index]">
            <div class="info">
                <span class="p1">{{name[index]}}</span>
            </div>
        </div>
      </div>
      <div class="contents" v-if="activeTitle === '学生代表'">
      <div v-for="(image,index) in stuimages" :key="index" class="student">
          <img class="img" :src="stuimages[index]"
            :style="{
              height: index === stuimages.length - 1
                ? '100px'
                : index === stuimages.length - 2
                  ? '150px'
                  : '200px',
            }"
          >
          <div class="info">
              <span class="sp1" v-if="index === stuimages.length - 2">寝室：</span>
              <span class="sp1" v-else-if="index === stuimages.length - 1">班级：</span>
              <span class="sp1" v-else>姓名：</span>
              <p class="p1">{{stuname[index]}}</p>
              <span class="sp2">简介：</span>
              <article class="p2">{{stuinfo[index]}}</article>
          </div>
      </div></div>
    </scroll-bar>
  </Frame>
</template>

<script>
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import Frame from '@/components/base/Frame.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'
import FrameButton from '@/components/base/FrameButton.vue'

export default {
  components: {
    Frame,
    FrameButton,
    ScrollBar,
  },
  data() {
    return {
      activeTitle: '教师代表',
      activeBtn: 'excellent',
      btns: [
        {
          tag: 'organization',
          content: '组织大全',
        },
        {
          tag: 'propaganda',
          content: '宣传视频',
        },
        {
          tag: 'excellent',
          content: '优秀代表',
        },
        {
          tag: 'style',
          content: '邮苑风光',
        },
      ],
      titles: [
        '教师代表',
        '学生代表',
      ],
      images: [
        require('../../assets/img/Landscape/jiaoshi/img1.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img2.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img3.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img4.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img5.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img6.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img7.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img8.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img9.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img10.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img11.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img12.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img13.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img14.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img15.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img16.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img17.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img18.jpg'),
        require('../../assets/img/Landscape/jiaoshi/img19.jpg'),
      ],
      name: [
        '陈褀褀', '付蔚', '高冬', '高非', '胡庆', '蒋青', '罗元', '闵绪国', '彭语良', '漆晶', '王睿', '王樱桃', '熊安萍', '袁帅', '张清华', '张琬悦', '郑继明', '周兴茂', '朱伟',
      ],
      stuimages: [
        require('../../assets/img/Landscape/xuesheng/img1.jpg'),
        require('../../assets/img/Landscape/xuesheng/img2.jpg'),
        require('../../assets/img/Landscape/xuesheng/img3.jpg'),
        require('../../assets/img/Landscape/xuesheng/img4.jpg'),
        require('../../assets/img/Landscape/xuesheng/img5.jpg'),
        require('../../assets/img/Landscape/xuesheng/img6.jpg'),
        require('../../assets/img/Landscape/xuesheng/img7.jpg'),
        require('../../assets/img/Landscape/xuesheng/img8.jpg'),
        require('../../assets/img/Landscape/xuesheng/img9.jpg'),
        require('../../assets/img/Landscape/xuesheng/img10.jpg'),
      ],
      stuname: [
        '张秦望', '斯马依力江·木萨汗', '周淑瑶', '崔立恒', '薛灿', '周渝阳', '邓梨', '王葶亦', '知行苑8舍211', '04911601',
      ],
      stuinfo: [
        '中共预备党员，光电工程学院/重庆国际半导体学院2016级光电信息科学与工程专业，现任光电工程学院/重庆国际半导体学院学生会主席。',
        '计算机科学与技术学院2015级计算机科学与技术专业学生。他艰苦奋斗，迎难而上。他是一名新疆维吾尔族青年。从家乡到学校往返100多小时的程让他格外珍惜大学时光，父母平均74岁的高龄，坚定了他奋斗的脚步。',
        '中共预备党员，网络空间安全与信息法学院2015级法学专业学生，07011502团支部书记及心理党员，曾任党委学工部/学生处学工助理、校学生科技联合会副主席，现已保送深圳大学硕士研究生。自强不息，立先进:坚强勇敢，无畏磨难，连续三年获国家励志奖学金。',
        '中共预备党员，通信与信息工程学院2015级广播电视工程专业学生。现任重庆邮电大学学生会主席，曾任校学生科技联合会主席，学生委员会委员，通信学院2015级年级长。重庆邮电大学第六届研究生支教团成员，现已保送重庆邮电大学硕士研究生。',
        '中共党员，自动化学院2015级自动化专业卓越工程师班学生，08901502团支部书记。现已保送浙江大学直接攻读博士生。永不言弃，力攀高峰。他积极参与科技竞赛。同时邀请优秀学长学姐讲座，积极带动班级同学参加科技竞赛。',
        '通信与信息工程学院2016级电子信息工程专业学生，曾获得重庆邮电大学本硕连读研究生预选资格，现专注创业。青少年人工智能教育品牌“爬虫猫”创始人。结合专业优势创业，畅游人工只能行业蓝海市场。抓住人工智能行业风口，获得了50万元的天使投资。',
        '中共党员，自动化学院2016级控制科学与工程专业硕士研究生，现已申请上阿尔伯塔大学博士研究生。潜心科研，砥砺前行。在攻读硕士学位的三年里，她刻苦钻研，攻坚克难，不断夯实专业基础知识，训练自身科研能力，始终怀着一颗对学术的好奇与崇敬之心。',
        '中共党员，经济管理学院2016级管理科学与工程专业硕士研究生。科研道远，锲而不舍。她热衷科研，天道酬勤，在国内外重要刊物上发表学术论文三篇。生活多彩，逐心而行。她在潜心科研的同时，担任助研，出色完成项目组织等工作，是老师的助手，同学的益友。',
        '知行苑8舍211寝室，由计算机科学与技术学院6名男生组成。潜心励学，携手前行。寝室平均学分绩点3.43，课程、CCT-2、CET-4通过率、奖学金获奖率、科技竞赛获奖率均为100%。醉心科研，勇于创新。寝室成员开拓创新，驰骋科创赛场，成绩斐然.',
        '由2016级计算机科学与技术专业卓越工程师32名同学组成，其中中共预备党员三人。勤于学业，学风优秀。以建立“学风特化”型班级为目标，该班同学立志成为“以学习为中心，品行素质良好、一专多能全面发展”的复合型人才。',
      ],
    }
  },
  methods: {
    changePage(page) {
      this.activeTitle = page
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';

.header {
  width: $frameContentWidth - 10;
  height: 120px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: absolute;
  background: #87a6ff;
  padding-top: 39px;
  z-index: 1;
  .fill {
    width: 100%;
    height: 10px;
    background: #87a6ff;
  }
  .title-wrapper {
    width: 870px;
    height: 45px;
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    .title {
      width: 430px;
      height: 45px;
      border: 2px solid #1644c5;
      background: #174bdd;
      font-size: 20px;
      text-align: center;
      line-height: 40px;
      color: #c0f7fe;
      padding-bottom: 4px;
      cursor: pointer;
      &.active {
        background: #43b2ff;
        color: #fff;
        .dec {
          height: 4px;
          margin-top: -2px;
          background: #174bdd;
        }
      }
      .dec {
        height: 2px;
        margin-top: -2px;
        background: #fff;
      }
    }
  }
}
.scroll-bar {
  width: 100%;
  height: 100%;
}
.contents {
  @include frameContentStyle;
  margin-top: 170px;
  padding-top: 0;
  width: 860px;
  display: flex;
  flex-wrap: wrap;
  .content:nth-child(2) {
    margin-left: 24px;
  }
  .content:nth-child(3n) {
    margin-left: 24px;
  }
  .content:nth-child(2n + 3) {
    margin-left: 24px;
  }
  .content:nth-child(7) {
    margin-left: 0px;
  }
  .content:nth-child(8) {
    margin-left:24px;
  }
  .content:nth-child(13) {
    margin-left:0px;
  }
  .content:nth-child(14) {
    margin-left:24px;
  }
  .content:nth-child(19) {
    margin-left: 0px;
  }
  .content {
    width: 270px;
    border: 3px solid #397dda;
    height: 208px;
    margin-bottom: 20px;
    background: #b0cfff;
    .img {
      width: 238px;
      border: 2px solid #0235c7;
      margin: 13px;
    }
    .info {
      font-size: 16px;
      margin-top: -4px;
      font-family: '微软雅黑';
      color: #0231a9;
      text-align: center;
      .p1 {
        display: inline-block;
        height: 22px;
      font-size: 14px;
      line-height: 22px;
      font-family: '微软雅黑';
      color: #0231a9;
        font-size: 16px;
        color: #0a3cca;
      }
    }
  }
  .student {
    &:nth-child(2n) {
      margin-left: 31px;
    }
    &:nth-child(2) {
      margin-top: 4px;
    }
    &:nth-child(1) {
      margin-top: 4px;
    }
    width: 414px;
    height: 265px;
    border: 3px solid rgb(57, 125, 218);
    margin-top: 20px;
    background-color: rgb(176, 207, 255);
    overflow: hidden;
    position: relative;
    .img {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 20px;
        width: 158px;
        height: 231px;
        border: 2px solid rgb(1, 52, 199);
    }
    .info {
        float: right;
        width: 220px;
        height: 250px;
        padding-top: 10px;
    }
    span {
        font-size:16px;
        font-family: "微软雅黑";
        color:rgb(2, 49, 169);
    }
    p {
        font-size: 12px;
        font-family: "微软雅黑";
        color:rgb(2, 49, 169);
    }
    .p1 {
        position: relative;
        top: 23px;
        width: 200px;
    }
    .sp1 {
        float: left;
        position: relative;
        top: 20px

    }
    .sp2 {
        position: relative;
        right:48px;
        top: 40px;
    }
    .p2 {
        float: left;
        font-size: 12px;
        height: 20px;
        width: 200px;
        font-family: "微软雅黑";
        position: relative;
        top: 50px;
        color:rgb(2, 49, 169);
    }
  }
}
</style>
