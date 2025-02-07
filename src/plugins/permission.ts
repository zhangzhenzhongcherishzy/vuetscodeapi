//引入了 NavigationGuardNext 和 RouteLocationNormalized 类型，用于类型检查。
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

//导入自定义的路由实例 router，需要从项目的 router 文件中引入
import router  from '@/router'

export const setupPermission = () => {
  // whiteList 定义了白名单路由，例如 /LoginView，无需权限即可访问。
  const whiteList= ['/LoginView','/RegisterView']
  router.beforeEach( async (to:RouteLocationNormalized,from:RouteLocationNormalized,next:NavigationGuardNext) => {
    const hastoken = localStorage.getItem('users')
    if(hastoken){
      //已登录
      if(to.path == '/LoginView'){
        next()
      }else{
        next()
      }
    }else{
      //未登录
      if(whiteList.includes(to.path)){
        next()
      }else{
        alert('未登录，请先登录账号')
        // next('/LoginView')
        redirectToLogin(to,next)
      }
    }
  })
}

// 重定向到登录页
function redirectToLogin(to:RouteLocationNormalized,next:NavigationGuardNext){
   //1、提取目标路由的查询参数：用 URLSearchParams 将 to.query 转换为一个可操作的查询参数对象  to.query 是目标路由对象的查询参数（通常是键值对形式的对象）
   const params = new URLSearchParams(to.query as Record<string, string>)

  //构造查询字符串：使用 params.toString() 将查询参数对象转换为 URL 编码的查询字符串格式
  const queryString = params.toString()

  // 拼接重定向地址：判断是否存在查询字符串：如果存在，将 to.path 和 queryString 拼接，形成完整路径（例如：/somepath?id=123&name=test）。如果不存在，仅保留路径部分（例如：/somepath）。
  const redirect = queryString ? `${to.path}?${queryString}` : to.path
    //调用 next 进行跳转：构造登录页的重定向地址：/login?redirect=...。使用 encodeURIComponent 对重定向路径进行编码，确保路径中的特殊字符不会导致错误。,调用 next 将用户导航到构造好的登录页地址。
    next(`/LoginView?redirect=${encodeURIComponent(redirect)}`)

}
