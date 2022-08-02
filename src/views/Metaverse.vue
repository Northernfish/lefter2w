<template>
  <h2>Hello {{ user.name }}</h2>
  <div class="container mx-auto min-h-fit special bg-gradient-to-r from-blue-400 via-purple-600 to-blue-700"><input v-model="userName" type="text" @change="handleClick"><button @click="handleClick">修改</button></div>
</template>

<script lang="ts">
export default {
  name: "Metaverse"
}
</script>
<script lang="ts" setup>
/* import */
import {
  computed,
  ref,
  toRefs,
  reactive,
  watch,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  getCurrentInstance,
  nextTick
} from 'vue'
import { useUserStore } from '../stores/user'
/* data */
type Props = {
  msg: string
  foo: string
}

const props = defineProps<Props>();
const {proxy}: any = getCurrentInstance() // 获取当前组件实例，
const state = reactive({
  count: 0
})
const userName = ref();
const user = useUserStore();

const howCount = computed(() => '现在count值为：' + state.count) //定义计算属性，在 setup() 中通过 computed() 注册的计算属性不需要声明类型

/* lifecycle */
onMounted(() => {
  // 请求 api
})

const handleClick = () => {
  user.modify(userName.value);
}

</script>

<style lang="scss" scoped>

</style>
