<template>
    <div id="xueshengshetuan">
        <div class="content">
            <div class="row">
                <ul>
                    <li v-for="(item,index) in row1 ">{{item}}</li>
                </ul>
            </div>
            <div class="row">
                <ul>
                    <li v-for="(item,index) in row2 ">{{item}}</li>
                </ul>
            </div>
            <div class="row">
                <ul>
                    <li v-for="(item,index) in row3 ">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'xueshengshetuan',
  data() {
    return {
      row1: [
        '电子协会', '畅响艺术团', '虚拟现实协会', '绘影社', '爱心社', '科技论文讲习社', '曲艺社', 'CF对外交流协会', '移动互联网创新中心', '信息安全协会', '电子竞技协会', '数码协会', '软件技术与应用协会', '硬件技术与应用协会', 'Linux协会', '街舞协会', '软通动力英才俱乐部', 'ACM程序设计协会', '机器人协会', '推理协会', '创客部落', '粤语社', '物联网协会', '航模协会', '科幻协会', '象棋协会', '桌游协会', '瑜伽协会', '排球社', '心理协会', '历史协会', '教育信息化创新创业协会', '创业俱乐部',
      ],
      row2: [
        '半导体协会', 'TG精英社', '科技创新协会', '道路交通安全协会', '龙影棍道协会', '跑步爱好者协会', '西乐社', 'CSDN俱乐部', '天元围棋协会', '魔方协会', '生命科学协会', '绿溢南山环保协会', '动物保护协会', '花卉绿植社', '天文爱好者协会', '数学俱乐部', '数学建模协会', '物理协会', '科普写作社', '电子商务协会', '金融协会', '创业者协会', '市场营销协会', 'ERP协会', '重邮动漫协会', '电影协会', '摄影协会', '镝鹤汉服文化协会', '花样跳绳协会', '辩论协会', '识途社', '无线电定向测向运动协会',
      ],
      row3: [
        '手作社', '民族乐器协会', '重邮剧社', '音乐协会', '南山文学社', '魔术协会', '文峰画社', '兰亭书社', '英语辩论协会', '翻译协会', '饮食文化协会', '英语俱乐部', 'Beat-box协会', '素质拓展协会', '红色协会', '政法论坛', '三农协会', '跆拳道协会', '健身协会', '足球协会', '篮球协会', '武术协会', '乒乓球协会', '羽毛球协会', '百闻茶道社', '射艺协会', '体育舞蹈协会', '健美操协会', '骆驼社', '吉他社', '诵读协会', '学生消防志愿者协会',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content::-webkit-scrollbar { width: 17px;}
.content::-webkit-scrollbar-thumb {
    background:
        url(../../../assets/img/Scroll/scroll-thumb-top.png) no-repeat top,
        url(../../../assets/img/Scroll/scroll-thumb-bottom.png) no-repeat bottom,
        url(../../../assets/img/Scroll/scroll-thumb-content.png);
}
.content::-webkit-scrollbar-button:start {
    height: 16px;
    background-image: url(../../../assets/img/Scroll/arrowUp.png);
    background-repeat: no-repeat;
}
.content::-webkit-scrollbar-button:end {
    height: 16px;
    background-image: url(../../../assets/img/Scroll/arrowDown.png);
    background-repeat: no-repeat;
}
.content::-webkit-scrollbar-track {
    background-image: url(../../../assets/img/Scroll/rail.png);
}

#xueshengshetuan {
    width: 890px;
    height: 600px;


}
.content {
    width: 899px;
    height: 570px;

    border: 2px solid rgb(57, 125, 218);
    background-color: rgb(176, 207, 255);
    overflow-x: hidden;
    overflow-y: scroll;
    .row {
        width: 33%;
        height: 100%;
        float: left;
        ul {
            list-style: none;
            li {
                font-size: 18px;
                width: 100%;
                height: 30px;
                float: left;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: '微软雅黑';
                color: rgb(2, 49, 169);
                margin-top:20px;
            }
        }
    }
}
</style>
