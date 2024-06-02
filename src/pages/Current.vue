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
                <p class="current__text-info" v-else>{{ task.start_point }}</p>
            </div>
            <div class="current__text-section">
                <p>Куда</p>
                <input type="text" v-if="isEditing" v-model="toWhereInput" />
                <p class="current__text-info" v-else>{{ task.end_point }}</p>
            </div>
            <div class="current__text-section">
                <p>Стоимость</p>
                <input type="text" v-if="isEditing" v-model="costInput" />
                <p class="current__text-info" v-else>{{ task.cost }} ₽</p>
            </div>
            <div class="current__text-section">
                <p>Водитель</p>
                <p class="current__text-info">{{ task.driver_surname }} {{ task.driver_firstname }}</p>
            </div>
            <div class="current__button-section" v-if="isEditing">
                <green-button @click="onClickEvent">Подтвердить</green-button>
                <red-button @click="isEditing = false">Отменить</red-button>
            </div>
            <div class="current__button-section" v-else>
                <black-button @click="ChangeEditing">Изменить</black-button>
                <red-button @click="DeleteOrder">Отменить</red-button>
            </div>
        </div>
        <h2 v-else class="current__no-order">У вас нет текущих заказов</h2>
    </div>
    <Footer />
</template>

<script setup>
import { defineModel, ref, onMounted } from 'vue'
import { getCurrenOrder, updateCurrenOrder, deleteCurrenOrder } from '@/api/orders'
const task = ref()
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
onMounted(async () => {
    try {
        const data = await getCurrenOrder(localStorage.getItem('userId'))
        task.value = data.data
        console.log(task.value)
    } catch (e) {
        if (e.message === 'Not Found') task.value = false
    }
})

async function DeleteOrder() {
    try {
        const data = await deleteCurrenOrder(task.value.id_drive)
        task.value = false
    } catch (e) {
        console.log(e)
    }
}

function ChangeEditing() {
    fromWhereInput.value = task.value.start_point
    toWhereInput.value = task.value.end_point
    costInput.value = task.value.cost
    driverInput.value = driver.value
    isEditing.value = true
}
async function onClickEvent() {
    try {
        const data = await updateCurrenOrder(task.value.id_drive, fromWhereInput.value, toWhereInput.value, Number(costInput.value))
        task.value.start_point = fromWhereInput.value
        task.value.end_point = toWhereInput.value
        task.value.cost = costInput.value
        isEditing.value = false
    } catch (e) {
        console.log(e)
    }
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
