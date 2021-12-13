<template>
    <div class="Home">
        <h2>Home</h2>
        <h3>{{ count }}</h3>

    </div>
</template>

<script>
    export default {
        name: 'Home',

        data() {
            return {};
        },
        computed: {
            count () {
                return this.$store.state.count
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>
