<template>
    <div class ='container'>
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {

            }
        },


        async created(){
            try {
                this.$router.push({path:'/home'})
            } catch (error) {
                console.log('created',error);
            }
            
        },

        computed:{
            ...mapState(['cookie'])
        }

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