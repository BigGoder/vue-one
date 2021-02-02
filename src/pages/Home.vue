<template>
    <div class='container'>
        <div class="topbar-banner-Wrapper">
            <a class='banner' href="void(0)"></a>
        </div>
        <div>
            <el-tabs v-model="activeName" @tab-click="handleClick" id='tab'>
                <el-tab-pane v-for="(item,index) in tabs" :key='index' :label="item" :name="item">{{item}}</el-tab-pane>
            </el-tabs>
            <div class='right'>
                <span v-for="(name,index) in rightTabs" :key='index'>{{name}}</span>
            </div>
        </div>

        <div class = 'frame'>

        </div>
        

    </div>
</template>

<script>
    export default {
        name:'home',
        data() {
            return {
                activeName: '小米商城',
                tabs:["小米商城" , "MIUI" , "IoT" , "云服务" , "天星数科" , "有品" , "小爱开放平台" , "企业团购" , "资质证照" , "协议规则" , "下载app" , "智能生活" , "Select Location"],
                rightTabs:['登录','消息','购物车']
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style lang="less" scoped>
.container{
    display: block;
    width: 100%;
    .topbar-banner-Wrapper{
        display: block;
        width: 100%;
        height: 120px;
        position: relative;
        .banner{
            position: absolute;
            background-image: url('../assets/banner.jpg');
            top: 0;
            width: 100%;
            height: 120px;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: auto 120px;
            text-indent: -9999px;
        }
    }
    div:nth-child(2){
        display: flex;
        background:#333;
        align-items: center;
        justify-content: space-between;
        padding-right: 85px;
        height:40px;
        span{
            font-size: 12px;
            margin-left: 12px;
            color:#B0B0B0
        }
        span:hover{
            color:#fff
        }
    }
    .frame{
        padding: 0 270px 0 270px;
    }
}


#tab /deep/ .el-tabs__header {
    background:#333;
    padding-left: 170px;

}
/deep/ .el-tabs__item {//#FF6700
    color:#B0B0B0;
    font-size: 12px;
}
/deep/ .el-tabs__item:hover{
    color:#fff
}

/deep/ .el-tabs{
    height:40px;
}

/deep/ .el-tab-pane{
    display: none;
}

/deep/ .el-tabs__nav-wrap:after{
    display: none;
}

/deep/ .el-tabs__active-bar{
    display: none;
}
</style>