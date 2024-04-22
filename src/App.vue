<template>
    <div class="layout-content">
        <IsoEvolveHeader/>
        <router-view></router-view>
    </div>
</template>

<script>
import IsoEvolveHeader from "@/components/Header.vue";

export default {
    components: {
        IsoEvolveHeader,
    },
    data() {
        return {
            scale: 14,
        };
    },
    mounted() {
        document.documentElement.style.fontSize = this.scale + "px";
    },
};
</script>

<!-- <style lang="scss">
@import './assets/styles/app/layout.scss';
</style> -->
