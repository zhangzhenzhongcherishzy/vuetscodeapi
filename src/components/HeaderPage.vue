<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- 使用path进行页面跳转 -->
        <RouterLink :to="{ path: '/StuDemo1' }">选项式API</RouterLink>
        <!-- 使用name进行页面跳转 -->
        <RouterLink :to="{ name: 'dayStuDemo2' }">组合式API</RouterLink>
        <RouterLink to="/StuDemo3">改造组合式API</RouterLink>
        <RouterLink to="/StuDemo4">组合式API-自定义渲染-返回函数</RouterLink>
        <RouterLink to="/StuDemo5">组合式API-自定义渲染-JSX</RouterLink>
        <RouterLink to="/StuDemo6">setup 语法糖</RouterLink>
        <RouterLink to="/StuDemo7">setup 语法糖支持ts写法</RouterLink>
        <RouterLink to="/StuDemo8">模板语法-文本</RouterLink>
        <RouterLink to="/StuDemo9">模板语法-属性</RouterLink>
        <RouterLink to="/StuDemo10">内置指令</RouterLink>
        <RouterLink to="/StuDemo11">案例Tab切换</RouterLink>
        <RouterLink to="/StuDemo12">案例计算器</RouterLink>
        <RouterLink to="/StuDemo13">绑定 HTML class</RouterLink>
        <RouterLink to="/StuDemo14">绑定内联样式 Style</RouterLink>
        <RouterLink to="/StuDemo15">声明响应式状态 ref & reactive</RouterLink>
        <RouterLink to="/StuDemo16">Reactive包装注意事项</RouterLink>
        <RouterLink to="/StuDemo19">Reactive包装注意事项补充</RouterLink>
        <RouterLink to="/StuDemo17">Proxy</RouterLink>
        <RouterLink to="/StuDemo18">Reactive Proxy</RouterLink>
        <RouterLink to="/StuDemo20">额外的 ref 解包细节</RouterLink>
        <RouterLink to="/StuDemo21">响应式 API:工具函数</RouterLink>
        <RouterLink to="/StuDemo22">shallowReactive& shallowReadonly</RouterLink>
        <RouterLink to="/StuDemo23">shallowRef& triggerRef()</RouterLink>
        <RouterLink to="/StuDemo24">toRaw& markRaw</RouterLink>
        <RouterLink to="/StuDemo25">customRef</RouterLink>
        <RouterLink to="/StuDemo26">effectScope&getCurrentScope& onScopeDispose案例1</RouterLink>
        <RouterLink to="/StuDemo27">改造effectScope渲染数据</RouterLink>
        <RouterLink to="/StuDemo28">effectScope案例2</RouterLink>
        <RouterLink to="/StuDemo29">effectScope案例3</RouterLink>
        <RouterLink to="/StuDemo30">effectScope案例4</RouterLink>
        <RouterLink to="/StuDemo31">计算属性</RouterLink>
        <RouterLink to="/StuDemo32">侦听器watch</RouterLink>
        <RouterLink to="/StuDemo33">侦听模拟请求数据</RouterLink>
        <RouterLink to="/StuDemo34">侦听器watchEffect</RouterLink>
        <RouterLink to="/StuDemo35">侦听器使用场景</RouterLink>
        <RouterLink to="/StuDemo36">案例-学生成绩管理系统</RouterLink>
        <RouterLink to="/StuDemo37">组件注册和引入</RouterLink>
        <RouterLink to="/StuDemo38">组件传值 props</RouterLink>
        <RouterLink to="/StuDemo39">props泛型参数</RouterLink>
        <RouterLink to="/StuDemo40">组件事件emit</RouterLink>
        <RouterLink to="/StuDemo41">插槽Slot</RouterLink>
        <RouterLink to="/StuDemo42">插槽Slot演示</RouterLink>
        <RouterLink to="/StuDemo43">插槽案例</RouterLink>
        <RouterLink to="/StuDemo44">组合式 API：生命周期钩子</RouterLink>
        <RouterLink to="/StuDemo45">组件 v-model</RouterLink>
        <RouterLink to="/StuDemo46">组合式函数</RouterLink>
        <RouterLink to="/StuDemo47">案例-学生成绩管理系统2</RouterLink>
        <RouterLink to="/StuDemo48">案例-学生成绩管理系统3</RouterLink>
        <RouterLink to="/StuDemo49">defineExpose</RouterLink>
        <RouterLink to="/StuDemo50">購物車</RouterLink>
        <RouterLink to="/StuDemo51">使用内置的 fetchAPI进行请求</RouterLink>
        <RouterLink to="/StuDemo53">嵌套路由(子路由)</RouterLink>
        <RouterLink to="/StuDemo54">动态路由</RouterLink>
        <RouterLink to="/StuDemo55">路由元信息</RouterLink>
        <RouterLink to="/StuDemo56">状态管理Pinia</RouterLink>
        <RouterLink to="/StuDemo57">Pinia进阶</RouterLink>
        <RouterLink to="/StuDemo58">使用内置的fetchAPI进行请求</RouterLink>
        <RouterLink to="/StuDemo59">axios安装和使用</RouterLink>
        <RouterLink to="/StuDemo60">axios封装</RouterLink>
        <RouterLink to="/StuDemo61">axios封装TS版</RouterLink>
        <RouterLink to="/StuDemo62">element-plus安装</RouterLink>
        <RouterLink to="/StuDemo63">element-plus安装使用</RouterLink>
        <RouterLink to="/StuDemo64">组件插槽传值复习</RouterLink>
        <RouterLink to="/StuDemo65">文件上传</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name:"HeaderPage"
}
</script>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
