<template>
    <div id="xuesheng">
        <ul>
            <div class="nth"></div>
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
      ],
      name: [
        '张秦望', '斯马依力江·木萨汗', '周淑瑶', '崔立恒', '薛灿', '周渝阳', '邓梨', '王葶亦', '知行苑8舍211', '04911601',
      ],
      info: [
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
    width: 900px;
    height: 779px;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: rgb(135, 166, 255);
    list-style: none;
    position: relative;
    bottom: 4px;
    li {
        margin-left: 12px;
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
.nth {
    width: 100%;
    height: 150px;;
}

</style>
