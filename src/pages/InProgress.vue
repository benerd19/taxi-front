<template>
    <div class="progress">
        <RepairSvg class="progress__svg" />
        <h1>Страница в разработке</h1>
    </div>
</template>

<script setup>
import RepairSvg from '@/assets/svg/RepairSvg.vue'
</script>

<style lang="less" scoped>
.progress {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__svg {
        width: 500px;
        height: 500px;
    }
}
</style>
