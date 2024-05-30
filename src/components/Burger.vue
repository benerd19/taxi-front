<template>
    <div class="burger__wrapper">
        <div class="burger" @click="isSidebar = !isSidebar">
            <span :class="['burger__item', { 'burger__item--active': isSidebar }]"></span>
        </div>
    </div>
</template>

<script setup>
import { ref, defineModel } from 'vue'
defineOptions({
    name: 'Sidebar',
})
const isSidebar = defineModel()
</script>

<style lang="less" scoped>
.burger {
    position: fixed;
    z-index: 20;
    top: 50px;
    left: 20px;
    width: 25px;
    height: 20px;
    display: flex;
    align-items: center;
    &__item {
        width: 100%;
        height: 2px;
        background-color: @black;
        &::before,
        &::after {
            content: '';
            width: 100%;
            height: 2px;
            background-color: @black;
            position: absolute;
            transition: all 0.3s;
        }
        &::before {
            top: 0;
        }
        &::after {
            bottom: 0;
        }

        &--active {
            background-color: transparent;
            &::before {
                top: 9px;
                transform: rotate(45deg);
            }
            &::after {
                bottom: 9px;
                transform: rotate(-45deg);
            }
        }
    }
    &:hover {
        cursor: pointer;
    }
    &__wrapper {
        width: 110px;
    }
}
</style>
