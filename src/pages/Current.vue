<template>
    <Header v-model="isSidebarActive" :isAuth="true" />
    <Transition>
        <sidebar v-if="isSidebarActive" />
    </Transition>
    <div class="current__wrapper">
        <h1>Ваш текущий заказ</h1>
        <div class="current" v-if="task">
            <logo-text />
            <div class="current__text-section">
                <p>Откуда</p>
                <input type="text" v-if="isEditing" v-model="fromWhereInput" />
                <p class="current__text-info" v-else>{{ fromWhere }}</p>
            </div>
            <div class="current__text-section">
                <p>Куда</p>
                <input type="text" v-if="isEditing" v-model="toWhereInput" />
                <p class="current__text-info" v-else>{{ toWhere }}</p>
            </div>
            <div class="current__text-section">
                <p>Стоимость</p>
                <input type="text" v-if="isEditing" v-model="costInput" />
                <p class="current__text-info" v-else>{{ cost }} ₽</p>
            </div>
            <div class="current__text-section">
                <p>Водитель</p>
                <input type="text" v-if="isEditing" v-model="driverInput" />
                <p class="current__text-info" v-else>{{ driver }}</p>
            </div>
            <div class="current__button-section" v-if="isEditing">
                <green-button @click="onClickEvent">Подтвердить</green-button>
                <red-button @click="isEditing = false">Отменить</red-button>
            </div>
            <div class="current__button-section" v-else>
                <black-button @click="ChangeEditing">Изменить</black-button>
                <red-button>Удалить</red-button>
            </div>
        </div>
        <h2 v-else class="current__no-order">У вас нет текущих заказов</h2>
    </div>
    <Footer />
</template>

<script setup>
import { defineModel, ref } from 'vue'
const task = ref(false)
const isSidebarActive = ref(false)
const isEditing = ref(false)
const fromWhere = ref('Lorem, ipsum.')
const toWhere = ref('Lorem, ipsum.')
const cost = ref('1000000000')
const driver = ref('Lorem, ipsum.')
const fromWhereInput = ref('')
const toWhereInput = ref('')
const costInput = ref('')
const driverInput = ref('')
function ChangeEditing() {
    fromWhereInput.value = fromWhere.value
    toWhereInput.value = toWhere.value
    costInput.value = cost.value
    driverInput.value = driver.value
    isEditing.value = true
}
function onClickEvent() {
    fromWhere.value = fromWhereInput.value
    toWhere.value = toWhereInput.value
    cost.value = costInput.value
    driver.value = driverInput.value
    isEditing.value = false
}
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
input {
    border: none;
    border-bottom: 2px solid @black;
    padding-left: 4px;
    font-size: 16px;
    &:focus {
        outline: none;
        border-color: @yellow;
    }
}

.current {
    border: 2px solid @black;
    border-radius: 20px;
    padding: 20px;
    &__wrapper {
        margin-top: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__no-order {
        padding-bottom: 416px;
    }

    &__input {
    }

    &__button-section {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
    }
    &__text-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__text-info {
        text-wrap: wrap;
        word-break: break-all;
        max-width: 200px;
    }
}
</style>
