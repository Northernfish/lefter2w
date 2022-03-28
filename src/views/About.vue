<template>
    <div class="About">
        <h2>About</h2>
        <h2>{{count}}</h2>
    </div>
</template>

<script>
    import { mapState } from 'vuex'


    export default {
        name: 'About',

        data() {
            return {
                count: ''
            };
        },
        computed: {
            // mix this into the outer object with the object spread operator
            ...mapState([
                'count'
            ])
        }
        // computed: mapState({
        //     // arrow functions can make the code very succinct!
        //     count: state => state.count,
        //
        //     // passing the string value 'count' is same as `state => state.count`
        //     countAlias: 'count',
        //
        //     // to access local state with `this`, a normal function must be used
        //     countPlusLocalState (state) {
        //         return state.count + this.localCount
        //     }
        // })
    };
</script>

<style lang="scss" scoped>
</style>
