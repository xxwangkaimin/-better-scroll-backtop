<template>
    <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
            <div class="content-item" v-for="(i, index) in 100" :key="index">{{i}}</div>
        </div>
    </div>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import ObserveDOM from '@better-scroll/observe-dom'
    // import BackTop from '@/plugins/back-top'
    import BackTop from "../../../lib/index";
    console.log(BackTop);

    BScroll.use(ObserveDOM).use(BackTop)
    export default {
        name: "home",
        data() {
            return {
                bscroll: null
            }
        },
        created() {
            this.initBS()
        },
        methods: {
            /**
             * 初始化better-scroll
             */
            initBS() {
                this.$nextTick(() => {
                    this.bscroll = new BScroll('.scroll-wrapper', {
                        click: true,
                        observeDOM: true,
                        backTop: true
                    })
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    .scroll-wrapper {
        width: 100%;
        height: 100vh;

        .content-item {
            padding: 10px;
            text-align: center;
            border-bottom: 1px solid #eee;
        }
    }
</style>
