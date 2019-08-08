<template>
    <div id="yinhang">
        <ul>
            <li>
                <div class="img1 img"></div>
                <span>渝芳百货商场</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>新校门出门，左转直走。老校门出门，右转直走。</p>
                </div>
            </li>
            <li>
                <div class="img2 img"></div>
                <span>永辉超市</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>新校门出门过马路，右转直走</p>
                </div>
            </li>
            <li>
                <div class="img3 img"></div>
                <span>新世纪超市</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>新校门出门，左转直走，老校门出门，右转直走。</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "yinhang",
    components: {

    }
}
</script>

<style lang="scss" scoped>
li {
    float: left;
    margin-left: 28px;
    margin-top: 25px;
    width: 263px;
    height: 272px;
    background-color: rgb(176, 207, 255);
    border: 3px solid rgb(57, 125, 218);
    .img {
        width: 228px;
        height: 134px;
        border: 2px solid rgb(2, 53, 199);
        margin-top: 30px;
        margin-left: 16px;
    }
    span {
        font-size: 18px;
        font-family: '微软雅黑';
        color: rgb(73, 105, 194);
        position: relative;
        top: 24px;
        left: 20px;
    }
    p {
        margin-top: 20px;
        font-size: 12px;
        font-family: '宋体';
        color: rgb(76, 117, 234);
        margin-left: 40px
    }
    img {
        position: absolute;
        left: 20px;
        
        
    }
}
.img1 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/chaoshi/img1.jpg)
}
.img2 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/chaoshi/img2.jpg)
}
.img3 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/chaoshi/img3.jpg)
}



ul {
    list-style: none;
    width: 905px;
    height: 520px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    right:5px;
}
.bottom {
    width: 100%;
    height: 50px;
    position: relative;
    top: 20px
}
ul::-webkit-scrollbar { width: 17px;}
ul::-webkit-scrollbar-thumb {
    background-image: url(../../../assets/img/Scroll/huakuai.png);
    background-size: cover;
}
ul::-webkit-scrollbar-button {
    height: 16px;
    background-image: url(../../../assets/img/Scroll/arrowUp.png);   
    background-repeat: no-repeat;
}
ul::-webkit-scrollbar-track { 
    background-image: url(../../../assets/img/Scroll/rail.png);
}
</style>


