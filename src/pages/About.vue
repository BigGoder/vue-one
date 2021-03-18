<template>
    <div>
        <h2>设置</h2>
        <div @click="loginOut">退出登录</div>
        
    </div>
</template>

<script>
    export default {
        name:"about",
        data() {
            return {
            }
        },
        methods:{
            loginOut(){
                window.sessionStorage.removeItem('cookie')
                this.$message('退出成功');
                this.$router.push({
                    path:'/login'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>