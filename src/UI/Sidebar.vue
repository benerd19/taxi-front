<template>
    <div class="sidebar">
        <LogoSvg class="sidebar__logo" />
        <router-link class="sidebar__text">Главная</router-link>
        <router-link :to="'/order'" class="sidebar__text">Сделать заказ</router-link>
        <router-link class="sidebar__text">Текущий заказ</router-link>
        <router-link class="sidebar__text">Посмотреть заказы</router-link>
        <router-link class="sidebar__text">Об аккаунте</router-link>
        <router-link class="sidebar__text">Выйти из аккаунта</router-link>
    </div>
</template>

<script setup>
import LogoSvg from '@/assets/svg/LogoSvg.vue'
import { ref } from 'vue'
defineOptions({
    name: 'Sidebar',
})
</script>

<style lang="less" scoped>
.sidebar {
    position: fixed;
    z-index: 15;
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    background-color: @white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    box-shadow: 5px 0 5px @black;

    &__text {
        cursor: pointer;
        margin: 0;
        color: @black;
        text-decoration: none;
        font-size: 20px;
        font-family: @Rbt;
        &:hover {
            color: @yellow;
        }
    }

    &__logo {
        height: 150px;
        width: 150px;
        margin-top: 100px;
    }
}
</style>
