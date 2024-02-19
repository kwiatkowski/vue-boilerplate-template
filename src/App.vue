<template>
    <div>
        <img
        alt="Vue logo"
        src="/assets/images/logo.png"
        />

        <HelloComponent :msg="'Hello Vue ' +randomValue +'!'" />
    </div>
</template>

<script>
// import {  mapState, mapActions } from 'vuex'

import HelloComponent from "~/components/HelloComponent.vue"

export default {
    components: {
        HelloComponent
    },
    data() {
        return {
            randomValue: this.generateRandomValue()
        }
    },
    computed: {
        // ...mapState('chart', [
        //     'data'
        // ])
    },
    methods: {
        // ...mapActions('chart', [
        //     'getData'
        // ]),
        init() {
            console.log('init')
        },
        generateRandomValue() {
            return Math.floor(Math.random() * 10) + 1
        },
    },
    mounted() {
        this.init()
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
    font-size: 14px;
}
</style>