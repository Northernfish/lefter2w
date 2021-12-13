// import { createStore } from 'vuex'
// // 引入js-cookie
// import Cookies from 'js-cookie'
//
// const state = {
//     num: 1,
//     name: ''
// }
//
// const mutations = {
//     addNum(state) {
//         state.num = state.num + 1
//     },
//     loginIn(state, data) {
//         state.name = data
//         // 设置过期时间为1天
//         Cookies.set('name', data, {
//             expires: 1
//         })
//     },
//     loginOut(state) {
//         state.name = ''
//         Cookies.remove('name')
//     }
// }
//
// const actions = {
//     ADDNUM(ctx) {
//         setTimeout(() => {
//             ctx.commit('addNum')
//         }, 300)
//     }
// }
//
// const modules = {}
//
// export default createStore({
//     state,
//     mutations,
//     actions,
//     modules
// })

import { createApp } from 'vue'
import { createStore } from 'vuex'
const mutations = {
    increment (state) {
        state.count++
    }
}
// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations
})

export default store;
