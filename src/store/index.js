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
    },
    addToCounter(state, payload) {
        state.counter += payload;
        state.history.push(state.counter)
    },
    subtractFromCounter(state, payload) {
        state.counter -= payload;
        state.history.push(state.counter)
    }
}

const actions = {
    async addRandomNumber(context) {
        let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
        context.commit('addToCounter', data.data)
    }
}

const getters = {
    activeIndexes: (state) => (payload) => {
        let indexes = [];
        state.history.forEach((number, index) => {
            if(number === payload) {
                indexes.push(index)
            }
        });
        return indexes
    }
}

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0,
            history: [0]
        }
    },
    mutations,
    actions,
    getters
})

export default store;
