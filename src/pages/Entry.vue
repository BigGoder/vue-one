<template>
    <div class ='container'>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },


        async created(){
            try {
                this.$router.push({path:'/login'})
            } catch (error) {
                console.log('created',error);
            }
            
        },
    }
</script>

<style lang="less" scoped>
    html{
        height:100%;
        width: 100%;
        margin:0;
    }
    body{
        width: 100%;
        height:100%;
        margin:0; 
    }
    .container{
        width: 100%;
    }

</style>