<template>
    <div id="nav">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link :to="{name:'NotFound'}">NotFound</router-link>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view />
    <!-- scoped -->
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Vue 3 + TypeScript + Vite + vue-router" /> -->
    <V2/>
    <V3/>
</template>

<script>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    // import HelloWorld from './components/HelloWorld.vue'
    import V2 from './views/v2.vue'
    import V3 from './views/v3.vue'
    export default {
        data() {
            return {

            }
        },
        mounted() {

        },
        components:{
            V2,
            V3
        },
        computed:{

        },
        methods:{

        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 16px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                 color: #42b983;
            }
        }
    }
</style>
