<template>
    <header class="header">
        <TaxiSvg class="header__svg" />
    </header>
</template>

<script setup>
import TaxiSvg from '@/assets/svg/LogoSvg.vue'
defineOptions({
    name: 'Header',
})
</script>

<style scoped lang="less">
.header {
    z-index: 1;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 100%;
    background-color: @yellow;
    &__svg {
        height: 100px;
        width: 130px;
    }
}
</style>
