<template>
    <div id="xuesheng">
        <ul>
            <li v-for="(image,index) in images">
                <img class="img" :src="images[index]">
                <div class="info">
                    <span class="sp1">姓名:</span>
                    <p class="p1">{{name[index]}}</p>
                    <span class="sp2">简介:</span>
                    <article class="p2">{{info[index]}}</article>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'xuesheng',
  data() {
    return {
      images: [
        require('../../../assets/img/Landscape/xuesheng/img1.jpg'),
        require('../../../assets/img/Landscape/xuesheng/img2.jpg'),
        require('../../../assets/img/Landscape/xuesheng/img3.jpg'),
        require('../../../assets/img/Landscape/xuesheng/img4.jpg'),
        require('../../../assets/img/Landscape/xuesheng/img5.jpg'),
        require('../../../assets/img/Landscape/xuesheng/img6.jpg'),
        require('../../../assets/img/Landscape/xuesheng/img7.jpg'),
        require('../../../assets/img/Landscape/xuesheng/img8.jpg'),
        require('../../../assets/img/Landscape/xuesheng/img9.jpg'),
        require('../../../assets/img/Landscape/xuesheng/img10.jpg'),
        require('../../../assets/img/Landscape/xuesheng/img11.jpg'),
        require('../../../assets/img/Landscape/xuesheng/img12.jpg'),
      ],
      name: [
        '蒋天星', '刘磊', '赵蔺', '刘顺程', '张淑媛', '陈俊伊', '吴英冬', '郭泰廷', '黎杨杰', '谭发欢', '知行苑7舍205寝室', '02031401班',
      ],
      info: [
        '计算机科学与技术学院2015级智能科学与技术专业学生,前任红岩网校工作站站长。他锐意进取，积极带领同学们组织参与各项网络志愿服务活动。他主动放弃寒暑假以及双休时间，投身红岩网校平台建设维护和网络产品开发工作,在校内组织开展网络建设知识培训，为校园网络文化建设工作贡献着自己的力量。',
        '光电工程学院2014级微电子科学与工程专业学生，驻班党员、年级长、校党委组织部助理、党支部宣传委员，现已考取重庆邮电大学硕士研究生。他是长波精神的传承者，是为党发声的践行者，是合格党员的追求者，把课余时间奉献给了服务师生。',
        '外国语学院2015级翻译专业学生，外国语学院团总支学生兼职副书记，曾任外国语学院新媒体部副部长、辅导员助理、学习委员，重庆邮电大学本硕连读候选人。家境贫寒多变故，刻苦努力以报恩，孝老敬老永践行，她深知作为一名党员应当孝老敬亲，从小家到大家，从大家到国家。',
        '软件工程学院2015级英语+软件专业学生。现担任13061702班班学长，学业辅导团高数讲师,班级宣传委员、心理委员。他勤奋好学，刻苦专研，求索不止，开拓创新，懂得无私奉献，乐于助人，将学习经验传授给其他同学。',
        '传媒艺术学院2014级艺术设计专业学生，学习委员,现已保送深圳大学攻读硕士研究生。天降不幸命运坎坷，终身残疾，但克己自律战胜自己，乐观看待学习与生活。感恩回馈自强不息，投身各类志愿者工作，将爱心传递。',
        '通信与信息工程学院通信工程2014级卓越工程师班学生。  担任通信学院艺术团团长、畅响室内乐团会长,大学生艺术团民乐团、综合部成员,重庆川江号子传承人合唱团男高音声部成员。刷新重庆市在大学生艺术展演器乐类中的最高荣誉。传承巴渝文化，唱响川江号子。',
        '中共党员,光电工程学院2014级电子信息科学与技术专业学生,曾担任重庆市学生联合会大学生新媒体中心主任,现已签约华为技术有限公司。学术研究，锐意创新。  传递经验，满腔热忱，努力带动身边同学参与科技竞赛。',
        '计算机科学与技术学院2014级计算机科学与技术专业学生，校史馆学生志愿者解说队队长、双语解说员，04911701班班学长,现已被澳洲国立大学、悉尼大学、新南威尔士大学、杜伦大学等11所世界百强名校录取为英语相关专业硕士研究生。他以身树立模范，用行动诠释志愿服务精神。',
        '传媒艺术学院2015级广播电视编导专业学生,党委宣传部新闻中心成员、就业指导中心助理、2017级班学长。“互联网+智慧小镇”项目创始人,重庆智一术江科技有限公司负责人。他大胆创业，带领团队开展农产品品鉴会。他以创业之名，为母校争光。',
        '体育学院2015级社会体育指导与管理专业学生。作为一名优秀的体育人，一生追求运动，不断超越自我。他坚持成就辉煌，在赛场上逐梦青春之火。他积极参与学校各类运动活动，弘扬运动精神。',
        '由计算机科学与技术学院2014级6名男生组成,中共党员1人。1人保送哈尔滨工业大学硕士研究生、2人签约阿里巴巴、2人签约华为技术有限公司、1人签约滴滴出行。',
        '光电工程学院/重庆国际半导体学院2014级电子科学与技术专业，共30人，其中中共党员10人。',
      ],
    }
  },
}
</script>


<style lang="scss" scoped>
ul::-webkit-scrollbar { width: 17px;}
ul::-webkit-scrollbar-thumb {
    background:
        url(../../../assets/img/Scroll/scroll-thumb-top.png) no-repeat top,
        url(../../../assets/img/Scroll/scroll-thumb-bottom.png) no-repeat bottom,
        url(../../../assets/img/Scroll/scroll-thumb-content.png);
}
ul::-webkit-scrollbar-button:start {
    height: 16px;
    background-image: url(../../../assets/img/Scroll/arrowUp.png);
    background-repeat: no-repeat;
}
ul::-webkit-scrollbar-button:end {
    height: 16px;
    background-image: url(../../../assets/img/Scroll/arrowDown.png);
    background-repeat: no-repeat;
}
ul::-webkit-scrollbar-track {
    background-image: url(../../../assets/img/Scroll/rail.png);
}
#xuesheng {
    width: 890px;
    height: 600px;
    background-color: aliceblue;

}
ul {
    width: 890px;
    height: 600px;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: rgb(135, 166, 255);
    list-style: none;
    li {
        margin-left: 15px;
        float: left;
        width: 414px;
        height: 265px;
        border: 2px solid rgb(57, 125, 218);
        margin-top: 20px;
        background-color: rgb(176, 207, 255);
        overflow: hidden;
        .img {
            float: left;
            position: relative;
            top: 15px;
            left: 15px;
            width: 158px;
            height: 231px;
            border: 2px solid rgb(1, 52, 199);
        }
        .info {
            position: relative;
            left: 30px;
            float: left;
            width: 220px;
            height: 250px;

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
            top: 25px;
            width: 200px;
            left: 10px;
        }
        .sp1 {
            float: left;
            position: relative;
            top: 20px

        }
        .sp2 {
            position: relative;
            right:35px ;
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
