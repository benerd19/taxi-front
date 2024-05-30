<template>
    <Burger v-model="isActive" />
    <header class="header">
        <div class="header__white-space"></div>
        <!-- <Burger v-model="isActive" /> -->
        <!-- <h1>PriceYourRide</h1> -->
        <TaxiSvg class="header__svg-taxi" />
        <div class="header__svg-wrapper" v-if="props.isAuth">
            <UserSvg class="header__svg" />
        </div>
        <black-button class="header__btn" @click="$router.push('/auth')" v-else>Войти</black-button>
    </header>
    <UserSvg class="header__svg" />
</template>

<script setup>
import { ref, defineModel } from 'vue'
import TaxiSvg from '@/assets/svg/TaxiSvg.vue'
import UserSvg from '@/assets/svg/UserSvg.vue'
import Burger from '@/components/Burger.vue'
defineOptions({
    name: 'Header',
})

const isActive = defineModel()
const props = defineProps(['isAuth'])
</script>

<style scoped lang="less">
.header {
    z-index: 10;
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

    &__svg-taxi {
        height: 100px;
        width: 100px;
    }
    &__white-space {
        width: 110px;
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
