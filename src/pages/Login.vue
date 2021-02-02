<template>
    <div class='contanier'>
        <div class="demo-input-suffix">
            <span>用户名</span>
            <el-input
                placeholder="请输入姓名"
                v-model="input1">
            </el-input>
        </div>
        <div class="demo-input-suffix">
            <span>密码</span>
            <el-input
                placeholder="请输入密码"
                show-password
                v-model="input2">
            </el-input>
        </div>
        <el-button type="primary" @click="login">登录</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputUserName:'',
                inputPwd:'',
                input1:'',
                input2:''
            }
        },
        methods: {
            login() {
                this.$router.push({
                    path:'/home'
                })
            }
        },
    }
</script>

<style lang="less" scoped>

    span{
        width:70px;
        display: inline-block;
    }
    .el-input {
        width: 230px;
    }
    .el-input .el-input-group__prepend{
        background-color: #fff;
        width: 100px;
    }
    .contanier{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .demo-input-suffix{
        margin-bottom: 20px;
    }
</style>