<template>
    <div id="hongyanwangxiao">
        <div class="content">
            <h1>红岩网校工作站简介:</h1>
            <p>重庆邮电大学红岩网校工作站是学校唯一一个从事互联网产品开发运营的校级学生组织。该团队自创立以来，始终坚持以技术见长，充分结合同学们的话语体系和视觉风格建设网络平台，繁荣网络文化。红岩网校工作站在校团委的指导下，由学生自我管理，多年来走出了一大批优秀的IT互联网人才，深受电信运营商、腾讯、阿里巴巴和百度等知名互联网企业的青睐。团队先后获评“全国五四红旗团支部”、“团中央新媒体专业工作室”、“重庆市IT杰出青年群体”等系列荣誉。红岩网校工作站属于校级学生组织，其中包括五个部门：产品策划及运营部，视觉设计部，Web研发部，移动开发部和运维安全部。工作中，各个部门相互协作、共同进步，开发上线了重邮小帮手微信公众号，掌上重邮、BTdown铺等一系列优秀的校园网络产品，深受广大师生的好评。红岩网校工作站被大家誉为“重邮互联网大咖的摇篮”。</p>
            <h1>各部门简介：</h1>
            <h2>【产品策划及运营部】</h2>
            <p>Ta是用户需求的倾听者，也是提出解决方案的总设计师。活跃在各部门之间，是促进各部门沟通的桥梁。Ta是创意的缔造者，拥有独特严谨的产品思维。一份原型图、一篇PRD可以让程序员和设计师开启工作模式，也可以写出优秀的文案对活动和产品形成强有力的助推，Office、Axure、Xmind等软件是Ta们的好帮手。产品策划及运营部旨在培养出优秀的产品经理，产品运营者和新媒体运营师。 </p>
            <h2>【视觉设计部】</h2>
            <p>Ta是设计产品图形用户界面，跟踪产品视觉及体验效果的设计师。需要经常同Photopshop、Adobe Illustrator打交道的Ta们，主要负责针对pc端、移动端、海报等界面的设计，团队协作设定产品整体界面视觉风格与创意规划，对设计成果进行定期评估和研究，进行视觉元素的优化设计。视觉设计部旨在设计出优秀的互联网产品，培养视觉设计师和UI设计师。</p>
            <h2>【移动开发部】</h2>
            <p>Ta主要负责移动端产品的开发，以 Java & Kotlin，Objective-C & Swift为主要开发语言，涵盖Android、iOS两个平台。在这里你不但可以学到App开发，还能认识一大群志同道合的朋友。如果你对App开发感兴趣，对App制作有欲望，移动开发部将是你的秀场。来吧，如果你曾抱怨被大神虐哭，现在一个成为大神的机会等着你！</p>
            <h2>【Web研发部】</h2>
            <p>Ta的职责包括“重邮小帮手”微信公众号、移动端／PC端网站开发、助力掌上重邮APP、提供强大的后台驱动等。目前分为前端和后端方向，前端主要采用html、css、JavaScript等利器，针对PC端、移动端等不同交互领域采用不同的设计风格与技术，将视觉无限的创意以行行代码形式转化为交互良好的网站页面，并通过一系列优化手段使用户体验达到最佳。后端主要负责将产品细致入微的现实需求转化为清晰的数据模型与业务逻辑，采用PHP、Java等开发语言操作数据库并进行严格的分析处理，掌控数据传递处理路上的每个流程，从而为网校提供最为坚实的数据后盾。</p>
            <h2>【运维安全部】</h2>
            <p>Ta既是红岩网校运维安全部(内部称之为 网校 SRE ( Site Reliability Engineering ))，也是重庆邮电大学 Linux 协会( CQUPT Linux User Group )，主要负责维护网校的服务器稳定和安全，同时也负责新项目的部署、环境安全配置和性能优化，还负责了重庆邮电大学的公益项目：重庆邮电大学开源镜像站。Ta们使用 Python语言来开发好玩有趣的项目，在这里你可以利用服务器资源来搭建自己想做的任何项目。你要对技术执着、对高性能孜孜不倦，“如果不能优雅的解决这个问题，那我们就有了两个问题”。</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'hongyanwangxiao',
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

#hongyanwangxiao {
    width: 890px;
    height: 600px;

    .content {
        width: 895px;
        height: 570px;
        border: 2px solid rgb(57, 125, 218);
        background-color: rgb(176, 207, 255);
        overflow-x: hidden;
        overflow-y: scroll;
        h1 {
            font-size: 28px;
            color: rgb(2, 49, 169);
            font-family: '微软雅黑';
            margin-top: 30px;

        }
        h2 {
            font-size: 20px;
            color: rgb(2, 49, 169);
            font-family: '微软雅黑';
            margin-top: 70px;
        }
        p {
            color: rgb(2, 49, 169);
            font-family: '微软雅黑';
            font-size: 16px;
            margin-top: 50px;
            line-height: 30px;
        }
    }
}
</style>
