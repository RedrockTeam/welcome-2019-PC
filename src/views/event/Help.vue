<template>
  <div>
    <Track class="left-track" />
    <Track class="right-track" />
    <QRcode />
    <div class="dialog" :style="{ display: isOpen ? 'flex' : 'none' }">
      <div class="wrapper">
        <div class="close" @click="close()">
          <div class="close-icon"></div>
        </div>
        <scroll-bar class="content" v-if="Object.keys(question).length">
          <div class="question">
            <div class="avatar" :style="{backgroundImage: `url(${question.author.avatar})`}">
            </div>
            <div class="con-wrapper">
              <div class="name">
                {{ question.author.name }}
                <div class="createdAt">{{ question.createdAt }}</div>
              </div>
              <div class="con">{{ question.content }}</div>
              <div class="foot">
                <div class="talk">{{ question.answer.length }} 评论</div>
              </div>
            </div>
          </div>
          <div class="answer-wrapper">
            <div
              class="answer"
              v-for="answer of question.answer"
              :key="answer.id"
            >
              <div class="avatar" :style="{backgroundImage: `url(${answer.author.avatar})`}">
              </div>
              <div class="con-wrapper">
                <div class="name">
                  {{ answer.author.name }}
                  <div class="createdAt">{{ answer.createdAt }}</div>
                </div>
                <div class="con">{{ answer.content }}</div>
                <div class="foot">
                  <div class="approval">赞 {{ answer.approvalNum }}</div>
                  <div class="oppose">踩 {{ answer.opposeNum }}</div>
                </div>
              </div>
            </div>
          </div>
        </scroll-bar>
      </div>
    </div>

    <Frame styles="belt">
      <scroll-bar class="scroll-bar">
        <div class="tit-bg"></div>
        <div class="contents">
          <div class="title-wrapper">
            <div
              v-for="(title, index ) of titles"
              :class="{ title: true, active: title === activeTitle }"
              :key="index"
              @click="changeTitle(title)"
            >{{ title }}<div class="dec"></div></div>
          </div>
          <div class="question-wrapper">
            <div
              class="question"
              v-for="question of questions.slice(4 * (page - 1), 4 * page)"
              :key="question.id"
            >
              <div class="avatar" :style="{backgroundImage: `url(${question.author.avatar})`}">
              </div>
              <div class="con-wrapper">
                <div class="name">
                  {{ question.author.name }}
                  <div class="createdAt">{{ question.createdAt }}</div>
                </div>
                <div class="con">{{ question.content }}</div>
                <div class="foot">
                  <div class="talk">{{ question.answersCount }} 评论</div>
                  <button class="check" @click="open(question)">查看</button>
                </div>
              </div>
            </div>
            <div class="pagination">
              <div class="left btn" @click="goPrev()"></div>
              <div
                :class="{ page: true, active: number === page }"
                v-for="(number, index) of Math.ceil(questions.length / 4)"
                :key="index"
                @click="changePage(number)"
              >{{ number }}</div>
              <div class="right btn" @click="goNext()"></div>
            </div>
            <div class="look">关注重邮小帮手公众号，即可参与提问</div>
          </div>
        </div>
      </scroll-bar>
    </Frame>
  </div>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'
import Track from '@/components/layout/Track.vue'
import QRcode from '@/components/layout/QRcode.vue'
// import API from '@/config'

export default {
  components: {
    Frame,
    ScrollBar,
    Track,
    QRcode,
  },
  data() {
    return {
      activeTitle: '最热问题',
      page: 1,
      titles: [
        '最热问题',
        '最新问题',
      ],
      questions: [],
      question: {},
      isOpen: false,
    }
  },
  methods: {
    changeTitle(title) {
      this.activeTitle = title
    },
    async getQuestions() {
      try {
        const res = await fetch('/mock.json').then(r => r.json())
        this.questions = res.filter(r => r.photoUrls.length === 0)
        console.log(this.questions)
      } catch (e) {
        console.log(e)
      }
    },
    changePage(page) {
      this.page = page
    },
    goPrev() {
      if (this.page > 1) {
        this.page -= 1
      }
    },
    goNext() {
      if (this.page < Math.ceil(this.questions.length / 4)) {
        this.page += 1
      }
    },
    open(question) {
      this.isOpen = true
      this.question = question
    },
    close() {
      this.isOpen = false
    },
  },
  mounted() {
    this.getQuestions()
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';

.left-track {
  height: 1146px;
  position: absolute;
  top: 288px;
  left: 0;
  transform: rotateY(180deg);
}
.right-track {
  height: 1146px;
  position: absolute;
  top: 288px;
  right: 0;
}

@mixin question {
  height: 127px;
  border: 3px solid #397dda;
  font-size: 14px;
  margin: 14px 0;
  background: #b7d2ff;
  position: relative;
  .avatar {
    position: absolute;
    top: 0;
    left: 0;
    margin: 20px;
    width: 83px;
    height: 83px;
    background-image: url(../../assets/img/help/avatar.png);
    background-repeat: no-repeat;
    background-size: 83px 83px;
    border-radius: 50%;
    border: 2px solid #7ca0ff;
  }
  .con-wrapper {
    margin: 20px 18px 14px 123px;
    height: 88px;
    color: #3861c3;
    .name {
      font-family: '微软雅黑';
      font-size: 16px;
      line-height: 16px;
      .createdAt {
        float: right;
        font-size: 12px;
      }
    }
    .con {
      width: 677px;
      height: 45px;
      margin-top: 10px;
      font-size: 14px;
      font-family: '微软雅黑';
      word-break: keep-all;
      word-wrap: break-word; // 只对英文起作用，以单词作为换行依据。
      white-space: pre-wrap; //只对中文起作用，强制换行。
      text-align:justify;  //css英文语句的两端对齐：
      text-justify:inter-ideograph;
      overflow: auto;
    }
    .foot {
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      font-family: '微软雅黑';
    }
    .talk {
      margin-right: 10px;
    }
  }
}

.dialog {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    position: relative;
    width: 960px;
    height: 555px;
    background: #7195fb;
    display: flex;
    justify-content: center;
    align-items: center;
    .close {
      position: absolute;
      top: 0;
      right: 0;
      width: 38px;
      height: 38px;
      border: 1px solid #002dae;
      background: #1965d7;
      .close-icon {
        width: 30px;
        height: 8px;
        background: #fff;
        transform: rotate(45deg) translate(12px, 8px);
        position: relative;
        &::after {
          display: block;
          position: absolute;
          content: '';
          width: 30px;
          height: 8px;
          background: #fff;
          transform: rotate(90deg);
        }
      }
    }
    .content {
      width: 886px;
      height: 496px;
      background: #8eaafd;
      border: 4px solid #0235c7;
      font-size: 14px;
      .question {
        @include question;
        width: 829px;
        margin: 16px;
      }
      .answer-wrapper {
        width: 829px;
        margin: 16px;
        border: 3px solid #397dda;
        .answer {
          height: 86px;
          font-size: 14px;
          background: #b7d2ff;
          position: relative;
          border-bottom: 1px solid #9eb7fe;
          padding-right: 20px;
          .avatar {
            position: absolute;
            top: 0;
            left: 0;
            margin: 15px;
            width: 56px;
            height: 56px;
            background-image: url(../../assets/img/help/avatar.png);
            background-repeat: no-repeat;
            background-size: 83px 83px;
            border-radius: 50%;
            border: 2px solid #7ca0ff;
          }
          .con-wrapper {
            margin-left: 86px;
            height: 56px;
            color: #3861c3;
            .name {
              font-family: '微软雅黑';
              font-size: 16px;
              line-height: 16px;
              padding-top: 20px;
              .createdAt {
                float: right;
                font-size: 12px;
              }
            }
            .con {
              width: 677px;
              height: 20px;
              margin-top: 10px;
              font-size: 14px;
              font-family: '微软雅黑';
              word-break: keep-all;
              word-wrap: break-word; // 只对英文起作用，以单词作为换行依据。
              white-space: pre-wrap; //只对中文起作用，强制换行。
              text-align:justify;  //css英文语句的两端对齐：
              text-justify:inter-ideograph;
              overflow: auto;
            }
            .foot {
              display: flex;
              justify-content: flex-end;
              font-size: 12px;
              font-family: '微软雅黑';
            }
            .talk {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}

.scroll-bar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .tit-bg {
    width: 862px;
    height: 433px;
    margin: 18px 0;
    background:
      url(../../assets/img/help/helpBg.png) no-repeat center,
      #e8f4ff;
    border: 3px solid #0235c7;
  }
  .contents {
    padding-right: 18px;
    .title-wrapper {
      height: 45px;
      display: flex;
      justify-content: space-between;
      .title {
        width: 431px;
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
    .question-wrapper {
      .question {
        @include question;
        .check {
          background: #b7d2ff;
          color: #3861c3;
          font-weight: bold;
        }
      }
      .pagination {
        display: flex;
        justify-content: center;
        font-size: 14px;
        align-items: center;
        .btn {
          width: 15px;
          height: 15px;
          transform: rotate(45deg);
          background: #5077e9;
          position: relative;
          cursor: pointer;
          margin-right: 8px;
          &:hover {
            background: #043ad6;
          }
          &::after {
            content: '';
            width: 15px;
            height: 15px;
            position: absolute;
            bottom: 3px;
            left: 3px;
            background: #87a6ff;
          }
          &.right {
            transform: rotate(225deg);
            margin-left: 8px;
            margin-right: 0;
          }
        }
        .page {
          width: 22px;
          height: 22px;
          color: #fff;
          text-align: center;
          font-family: '微软雅黑';
          font-weight: bold;
          margin: 0 5px;
          line-height: 22px;
          cursor: pointer;
          &:hover {
            background: #ff86a5;
          }
          &.active {
            background: #ff86a5;
          }
        }
      }
      .look {
        font-size: 14px;
        text-align: center;
        color: #fff;
        margin: 30px 0 10px;
        font-family: '微软雅黑';
      }
    }
  }
}
</style>
