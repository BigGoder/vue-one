<template>
    <div>
        <el-input placeholder="请输入内容" v-model="inputUserName">
            <template slot="prepend">同户名</template>
        </el-input>
        <br/>
        <el-input placeholder="请输入内容" v-model="inputPwd">
            <template slot="prepend">密码</template>
        </el-input>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputUserName:'',
                inputPwd:'',
            }
        },
    }
</script>

<style lang="less" scoped>
  .el-input {
    width: 530px;
  }
  .el-input .el-input-group__prepend{
    background-color: #fff;
    width: 100px;
  }
</style>