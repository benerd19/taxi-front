<template>
    <header class="header">
        <Burger />
        <h1>PriceYourRide</h1>
        <div class="header__svg-wrapper" v-if="props.isAuth">
            <UserSvg class="header__svg" />
        </div>
        <black-button class="header__btn" @click="$router.push('/auth')" v-else>Войти</black-button>
    </header>
    <UserSvg class="header__svg" />
</template>

<script setup>
import { ref } from 'vue'
import UserSvg from '@/assets/svg/UserSvg.vue'
import Burger from '@/components/Burger.vue'
defineOptions({
    name: 'Header',
})
const props = defineProps(['isAuth'])
//const isAuth = ref(true)
</script>

<style scoped lang="less">
.header {
    z-index: 1;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    width: 100%;
    background-color: @yellow;
    &__svg {
        height: 50px;
        width: 50px;
        cursor: pointer;
    }
    &__svg-wrapper {
        width: 110px;
    }
    &__btn {
        position: relative;
        right: 40px;
    }
}
</style>
