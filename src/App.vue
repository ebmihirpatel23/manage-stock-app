<template>

        <div class="layout-content">
            <router-view></router-view>
        </div>

</template>

<script>
export default {
    data() {
        return {
            scale: 14,
        }
    },
    mounted() {
        document.documentElement.style.fontSize = this.scale + 'px';
    }
}
</script>

<style lang="scss">
@import './assets/styles/app/layout.scss';
</style>
