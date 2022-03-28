<template>
    <div class="Home">
        <h2>Home</h2>
        <button @click="(e)=>increment(e)">{{ count }}</button>
        <h1>Vuex Counter</h1>
        <h1 class="counter"> {{ counter }} </h1>
        <button @click="subtractFromCounter(parseInt(value))">-</button>
        <input
                type="number"
                v-model="value"
        />
        <button @click="addToCounter(parseInt(value))">+</button>
        <div>
            <button class="btn" @click="addRandomNumber">Add by Random Number</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapState, mapActions } from "vuex"
    export default {
        name: 'Home',

        data() {
            return {
                value:'',
                count: ''
            };
        },
        computed: {
            count () {
                // return store.state.count
                return this.$store.state.count
            }
        },
        mounted() {
            console.log(this.$store.state)
        },
        methods: {
            ...mapMutations(["addToCounter", "subtractFromCounter"]),
            ...mapActions(["addRandomNumber"]),
            increment(e) {
                // store.commit('increment')
                this.$store.commit('increment')
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>
