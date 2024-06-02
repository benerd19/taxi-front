<template>
    <Header v-model="isSidebarActive" :isAuth="true" />
    <Transition>
        <sidebar v-if="isSidebarActive" />
    </Transition>
    <div class="order__wrapper">
        <div class="order">
            <logo-text />
            <p class="order__text">Начальная точка</p>
            <bottom-input class="order__input" />
            <p class="order__text">Конечная точка</p>
            <bottom-input class="order__input" />
            <p class="order__text">Стоимость</p>
            <bottom-input class="order__input" />
            <yellow-button class="order__btn">Создать заказ</yellow-button>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { defineModel, ref } from 'vue'
const isSidebarActive = ref(false)
</script>

<style lang="less" scoped>
.v-enter-active,
.v-leave-active {
    transition: 0.25s ease;
    left: 0px;
}

.v-enter-from,
.v-leave-to {
    left: -300px;
}

.order {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    border: 2px solid @black;
    border-radius: 10px;
    padding: 20px;
    &__wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__text {
        padding: 0;
        margin: 0;
    }
    &__btn {
        align-self: center;
    }
    &__input {
        width: 100%;
    }
}
</style>
