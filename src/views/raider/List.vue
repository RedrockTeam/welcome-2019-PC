<template>
  <Frame styles="bubble">
    <scroll-bar class="scroll-bar">
      <div class="title">新生清单</div>
            <ul>
                <li>
                    <span>报道时间：</span>
                    <p>本科新生2019年9月5、6日报道</p>
                </li>
                <li>
                    <span>报道地点：</span>
                    <p>重庆邮电大学风雨操场</p>
                </li>
                <li>
                    <span>新生必带：</span>
                    <p>
                      带同版近期照片共15张（要求光面相纸洗印，白底一寸，半身，正脸，免冠大头照片），新生档案，党团关系证明，户口本（需要迁户口的同学携带），
                      录取通知书，高考准考证，《新生适应性资料》学习心得，
                      入学指南中附带《学生管理与学生自律协议书》以及《重庆邮电大学社会实践表》（不同学院要求不同）身份证以及户口本
                      （复印件多复印几份，虽然学校并未做要求），银行卡（缴学费），少量现金。</p>
                </li>
                <li>
                    <span>洗护用品方面：</span>
                    <p>男生的剃须刀，女生的护肤品（男生也可以适当准备一些），日常洗漱需要的物品（诸如牙膏牙刷，毛巾，沐浴露，盆桶一以及洗衣物所需要的洗衣液，刷子等等。）</p>
                </li>
                <li>
                    <span>衣物方面：</span>
                    <p>
四季的外套、袜子等等（要是重庆本地的同学或者是经常回家的同学非当季的衣物可以不用携带），各种晾衣物的工具（如衣叉，衣架等等）。蚊帐（根据个人喜好，
也可以采用驱蚊液，这样就可以不挂蚊帐），一些基本的床上用品（枕头，被子等，被单最好准备两张，枕套同样如此），
凉席（有空调的，夏天一般不用），遮光帘（根据个人情况，要是对灯光比较敏感，建议准备），一些日常使用的药品
（感冒药，创可贴之类的），台灯，还有各类寝室神器（这些就根据自己的实际需要进行添置）。</p>
                </li>
                <li>
                    <span>个人物品使用方面：</span>
                    <p>电脑（笔记本最宜，其他的数码产品根据自己的情况进行添置），以及一些学习物品（签字笔，笔记本等等），台灯，水杯等等。</p>
                </li>
            </ul>
    </scroll-bar>
  </Frame>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'

export default {
  components: {
    Frame,
    ScrollBar,
  },
}
</script>

<style scoped lang="scss">


.scroll-bar {
  width: 876px;
  height: 484px;
  margin-top: 18px;
  border: 3px solid #397dda;
  background: #b0cfff;
}

.title {
font-size: 26px;
color: #fff;
width: 187px;
height: 53px;
background: #4d75e8;
background: linear-gradient(-135deg, transparent 6px, #4d75e8 0);
text-align: center;
line-height: 54px;
margin: 30px auto 20px;
}
ul {
    list-style: none;
    padding: 0 24px;
    li {
        width: 800px;
        margin-bottom: 26px;
        span {
            color: rgb(35, 72, 179);
            font-family: "微软雅黑";
            font-size: 18px;
        }
        p {
            margin-top: 3px;
            color: rgb(84, 124, 236);
            font-family: "宋体";
            font-size: 14px;
            line-height: 18px;
        }
    }

}
</style>
