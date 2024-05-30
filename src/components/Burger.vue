<template>
    <div class="burger__wrapper">
        <div class="burger" @click="isActive = !isActive">
            <span :class="['burger__item', { 'burger__item--active': isActive }]"></span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({
    name: 'Sidebar',
})

const isActive = ref(false)
</script>

<style lang="less" scoped>
.burger {
    position: relative;
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
