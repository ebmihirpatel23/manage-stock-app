<template>
    <div class="layout-content">
        <IsoEvolveHeader v-if="false"/>
        <router-view></router-view>
        <IsoEvolveFooter/>
    </div>
</template>

<script>
import IsoEvolveHeader from "@/components/Header.vue";
import IsoEvolveFooter from "@/components/IsoEvolveFooter";

export default {
    components: {
        IsoEvolveHeader,
        IsoEvolveFooter,
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

<style lang="scss">
@import "./assets/styles/app/layout.scss";
</style>
