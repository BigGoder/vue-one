<template>
    <div class='container'>
        <div class="topbar-banner-Wrapper">
            <a class='banner' href="void(0)"></a>
        </div>
        <div class='header'>
            <el-tabs v-model="activeName" @tab-click="handleClick" id='tab'>
                <el-tab-pane v-for="(item,index) in tabs" :key='index' :label="item" :name="item">{{item}}</el-tab-pane>
            </el-tabs>
            <div class='right'>
                <span @click="login">登录</span>
                <span>消息</span>
                <span>购物车</span>
                <!-- <span v-for="(name,index) in rightTabs" :key='index'>{{name}}</span> -->
            </div>
        </div>

        <div class = 'frame'>
            <a></a>
            <div class='title'>
                <span  v-for="(item,index) in titles" @mouseleave="titleLeave(index,$event)"  @mouseover="titleOver(index,$event)" :key='index' :label="item" :name="item">{{item}}</span>
            </div>
            <input type="text">
        </div>
        <div class='head-good-show'>
            <ul ref="titleHead" class="titleHead">
                <li v-for='(item,index) in titles' :key='index' class="titleGood" style="display:none">
                    <ul class='title-container'>
                        <li v-for='(inner,i) in headImages' :key='i'>
                            <div>
                                <!-- '../assets/head-show'+ index+'.png' -->
                                <img :src="require('../assets/head-show'+ index+'.png')" alt="">
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class='swipe-left'>
            <ul>
                <li v-for="(item,i) in swipeLeft" :key="i">{{item}}<img src='../assets/right-direct.png'/></li>
            </ul>
            
            <div class='swipe'>
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <img :src="require(`../assets/banner${item}.webp`)" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'home',
        data() {
            return {
                activeName: '小米商城',
                tabs:["小米商城" , "MIUI" , "IoT" , "云服务" , "天星数科" , "有品"  , "企业团购" , "资质证照" , "协议规则" , "下载app" , "智能生活" , "Select Location"],
                rightTabs:['登录','消息','购物车'],
                titles:["小米手机","Redmi 红米","电视","笔记本","智能硬件","服务","社区"],//
                headImages:[1,2,3,4,5],
                swipeLeft:['手机 电话卡','电视 盒子','手机 电话卡','电视 盒子','手机 电话卡','电视 盒子','手机 电话卡','电视 盒子','手机 电话卡','电视 盒子']
            };
        },
        mounted () {
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab,event);
                
            },
            titleOver(index,e){
                e.target.style.color = '#ff6700'
                let lis = this.$refs.titleHead.querySelectorAll('.titleGood')
                // for(let i = 0;i<lis.length;i++){
                //     let li = lis[i]
                //     li.style.display = 'none'
                // }
                lis[index].style.display = 'block'    
                //lis[index].style.height = '0'
                //lis[index].style.height = '230px'
                
            },
            titleLeave(index,e){
                let lis = this.$refs.titleHead.querySelectorAll('.titleGood')
                lis[index].style.display = 'none'  
               //lis[index].style.height = '0'
                e.target.style.color = '#333'
            },

        }
    }
</script>

<style lang="less" scoped>


li{
    list-style-type:none
}
ul { padding:0px; margin:0px }

.container{
    display: block;
    width: 100%;
    position: relative;
    .topbar-banner-Wrapper{
        display: block;
        width: 100%;
        height: 120px;
        
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
    .right{
        background-color: #333;
    }
    .header{
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
        padding: 0 175px 0 175px;
        display: flex;
        justify-content:space-between;
        align-items: center;
        height: 100px;
        a{
            display: block;
            width: 55px;
            height:55px;
            background-color: #ff6700;
            position: relative;
            overflow: hidden;
        }
        a::before{
            width: 55px;
            height:55px;
            background: url('../assets/mi-logo.png') no-repeat 50% 50%;
            content: "";
            left:0;
            top:0;
            position: absolute;
            transition: all .2s;
            
        }

        a::after{
            width: 55px;
            height:55px;
            background: url('../assets/mi-home.png') no-repeat 50% 50%;
            content: "";
            left:0;
            top:0;
            margin-left: -55px;
            position: absolute;
            transition: all .2s;    
        }

        a:hover:before,a:hover:after{
            transform:translate(55px) 
        }

        .title{
            span{
                margin-left: 20px;
            }
        }
    }
    .head-good-show{
        border-top: #aaa solid 1.5px;
        
        position: absolute;
        z-index: 999;
        width : 100%;
        background-color: #fff;
        .titleHead{
            
            .titleGood{
                float: left;
                transition: all 10s;
                ul{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 25px 175px;
                    
                    li{
                        border-right: #aaa solid 1.5px;
                        flex-grow: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img{
                            display: block;
                            width: 160px;
                            height: 110px;
                        }
                    }
                    li:last-child{
                        border-right: none;
                    }
                }
            }
        }


    }
    .swipe-left{
        height:420px;
        

        ul{
            padding: 20px 0;
            background-color: #4A484C;
            width: 234px;
            position: absolute;
            z-index: 1;
            left:175px;
            top:260px;
            li{
                position: relative;
                display: block;
                height:42px;
                font-size: 14px;
                line-height: 42px;
                color: #fff;
                padding-left: 40px;
                img{
                    position: absolute;
                    top:12px;
                    right: 20px;
                }
            }
            li:hover{
                background-color: #ff6700;
            }
        }
        .swipe{
            position: absolute;
            left:409px;
            top:260px;
            right:175px;
            height: 460px;

            img{
            }
        }
    }
}


#tab /deep/ .el-tabs__header {
    background:#333;
    padding-left: 170px;
}
// #title /deep/ .el-tabs {
//     background:#fff;
//     padding-left: 170px;

// }
/deep/ .el-tabs__item {//#FF6700
    color:#B0B0B0;
    font-size: 12px;
}
/deep/ .el-tabs__item:hover{
    color:#fff
}

//    color:#333;
//    font-size: 16px; 

/deep/ .el-tabs{
    height:40px;
}

/deep/ .el-carousel__container{
    height:460px;                
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