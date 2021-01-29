<template>
    <div>
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
                if(this)
                this.$router.push({path:'/login'})
            } catch (error) {
                console.log('created',error);
            }
            
        },
    }
</script>

<style lang="less" scoped>

</style>