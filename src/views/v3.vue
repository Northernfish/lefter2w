<template>
    V3.setup<div>{{ readersNumber }} {{ book.title }}-- {{count}}</div>
</template>

<script !src="">
    import { ref, reactive, watchEffect, onMounted, onUpdated, onUnmounted } from 'vue'

    const isAbsent = Symbol()

    export default {
        props: {
            foo: { default: isAbsent }
        },
        setup(props) {
            const count = ref(0)
            const readersNumber = ref(0)
            const book = reactive({ title: 'Vue 3 Guide' })
            if (props.foo === isAbsent) {
                // foo 没有被传入。
            }
            watchEffect(() => console.log(count.value))

            setTimeout(() => {
                count.value++
                // -> logs 1
            }, 100)

            onMounted(() => {
                console.log('mounted!')
            })
            onUpdated(() => {
                console.log('updated!')
            })
            onUnmounted(() => {
                console.log('unmounted!')
            })
            // 暴露给模板
            return {
                readersNumber,
                book
            }
        }
    }
</script>

<style>

</style>
