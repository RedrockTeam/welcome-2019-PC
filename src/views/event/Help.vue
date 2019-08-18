<template>
  <div>
    <Track class="left-track" />
    <Track class="right-track" />
    <QRcode />
    <Dialog class="dialog" :isOpen="isOpen" @close="onClose()">
      <scroll-bar class="content" v-if="Object.keys(this.question).length">
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
              <div class="talk">{{ question.answersCount }} 评论</div>
            </div>
          </div>
        </div>
        <div class="answer-wrapper" v-if="answers.length">
          <div
            class="answer"
            v-for="answer of answers"
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
    </Dialog>

    <Frame styles="belt">
      <scroll-bar class="scroll-bar">
        <div class="tit-bg"></div>
        <div class="contents">
          <div class="title-wrapper">
            <div
              v-for="(title, index) of titles"
              :class="{ title: true, active: title === activeTitle }"
              :key="index"
              @click="changeTitle(title)"
            >{{ title }}<div class="dec"></div></div>
          </div>
          <div class="loading" v-if="!questions.length && !isError">Loading...</div>
          <div class="loading" v-if="isError">请等下再尝试</div>
          <div class="question-wrapper" v-if="questions.length && !isError">
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
                v-for="(number, index) of Math.floor(questions.length / 4)"
                :key="index"
                @click="changePage(number)"
              >
                <div
                  :class="{ page: true, active: number === page }"
                  v-if="show(index)"
                >
                  {{ number }}
                </div>
              </div>
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
import Dialog from '@/components/base/Dialog.vue'

const API = 'https://wx.idsbllp.cn/234/seniorhelpme/question'

export default {
  components: {
    Frame,
    ScrollBar,
    Track,
    QRcode,
    Dialog,
  },
  data() {
    return {
      activeTitle: '最热问题',
      isError: false,
      page: 1,
      hotDataPage: 1,
      newDataPage: 1,
      titles: [
        '最热问题',
        '最新问题',
      ],
      hotQuestions: [],
      newQuestions: [],
      questions: [],
      question: {},
      answers: [],
      isOpen: false,
      isHotEnd: false,
      isNewEnd: false,
    }
  },
  methods: {
    show(index) {
      if (index <= this.page + 1 && index >= this.page - 3) {
        return true
      } if (this.page <= 2 && index < 5) {
        return true
      } if (
        this.page >= Math.floor(this.questions.length / 4) - 2
        && index >= Math.floor(this.questions.length / 4) - 5
      ) {
        return true
      }
      return false
    },
    async changeTitle(title) {
      this.activeTitle = title
      if (title === '最新问题') {
        this.questions = this.newQuestions
      } if (title === '最热问题') {
        this.questions = this.hotQuestions
      }
      this.page = 1
    },
    async getQuestions(page, isNew = false) {
      const res = await fetch(`${API}?pageNo=${page}${isNew ? '&sortby=new' : ''}`).then(r => r.json())
      return res.filter(r => r.photoUrls.length === 0)
    },
    changePage(page) {
      let step = page - this.page
      if (step > 0) {
        for (; step > 0; step -= 1) {
          this.goNext()
        }
      } if (step < 0) {
        for (; step < 0; step += 1) {
          this.goPrev()
        }
      }
    },
    goPrev() {
      if (this.page > 1) {
        this.page -= 1
      }
    },
    async goNext() {
      if (this.page < Math.floor(this.questions.length / 4)) {
        this.page += 1
        if (!this.isHotEnd && this.activeTitle === '最热问题' && this.hotDataPage === this.page) {
          const res = await this.getQuestions(this.hotDataPage += 1)
          if (res.length) {
            this.hotQuestions = [...this.hotQuestions, ...res]
            this.questions = this.hotQuestions
          } else {
            this.isHotEnd = true
          }
        } if (!this.isNewEnd && this.activeTitle === '最新问题' && this.newDataPage === this.page) {
          const res = await this.getQuestions(this.newDataPage += 1, true)
          if (res.length) {
            this.newQuestions = [...this.hotQuestions, ...res]
            this.questions = this.newQuestions
          } else {
            this.isNewEnd = true
          }
        }
      }
    },
    async open(question) {
      this.isOpen = true
      this.question = question
      this.questionId = question.id
      const res = await fetch(`${API}/id?id=${this.questionId}`).then(r => r.json())
      this.answers = res.answer
    },
    onClose() {
      this.isOpen = false
      this.answers = []
    },
  },
  async mounted() {
    try {
      this.hotQuestions = await Promise.all([
        this.getQuestions(1),
        this.getQuestions(2),
        this.getQuestions(3),
        this.getQuestions(4),
        this.getQuestions(5),
      ]).then(r => r.flat())
      this.newQuestions = await Promise.all([
        this.getQuestions(1, true),
        this.getQuestions(2, true),
        this.getQuestions(3, true),
        this.getQuestions(4, true),
        this.getQuestions(5, true),
      ]).then(r => r.flat())
      this.newDataPage = 5
      this.hotDataPage = 5
      this.questions = this.hotQuestions
    } catch (e) {
      this.isError = true
    }
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
      height: 15px;
      font-family: '微软雅黑';
      font-size: 16px;
      line-height: 16px;
      .createdAt {
        float: right;
        font-size: 12px;
      }
    }
    .con {
      width: 670px;
      height: 45px;
      margin-top: 10px;
      font-size: 14px;
      font-family: '微软雅黑';
      word-break: keep-all;
      word-wrap: break-word; // 只对英文起作用，以单词作为换行依据。
      white-space: pre-wrap; //只对中文起作用，强制换行。
      text-align:justify;  //css英文语句的两端对齐：
      text-justify:inter-ideograph;
      /* overflow: auto; */
      overflow: hidden;
      text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
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
            height: 15px;
            font-family: '微软雅黑';
            font-size: 16px;
            line-height: 16px;
            padding-top: 18px;
            .createdAt {
              float: right;
              font-size: 12px;
            }
          }
          .con {
            width: 630px;
            height: 38px;
            margin-top: 10px;
            font-size: 14px;
            font-family: '微软雅黑';
            word-break: keep-all;
            word-wrap: break-word; // 只对英文起作用，以单词作为换行依据。
            white-space: pre-wrap; //只对中文起作用，强制换行。
            text-align:justify;  //css英文语句的两端对齐：
            text-justify:inter-ideograph;
            /* overflow: auto; */
      overflow: hidden;
      text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
          }
          .foot {
            margin-top: -6px;
            display: flex;
            justify-content: flex-end;
            font-size: 12px;
            font-family: '微软雅黑';
            .oppose {
              margin-left: 35px;
            }
          }
          .talk {
            margin-right: 10px;
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
      url(../../assets/img/help/helpBg.jpg) no-repeat center/100% 100%;
    border: 3px solid #0235c7;
  }
  .contents {
    padding-right: 18px;
    .loading {
      font-size: 14px;
      margin: 20px auto;
      width: max-content;
      color: #0235c7;
    }
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
          cursor: pointer;
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
