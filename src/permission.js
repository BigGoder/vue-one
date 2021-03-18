import router from './router'
const whiteList = ['/login','/home','/'] // 无需令牌白名单

router.beforeEach(async (to, from, next)=>{
    let hasCookie = window.sessionStorage.getItem('cookie')
    if(hasCookie){
        next()
    }else{
        if (whiteList.indexOf(to.path) !== -1) {
            // 白名单中路由放过
            next()
          } else {
            // 重定向至登录页
            next(`/login`)
          }
    }
})