<template>
    <Header v-model="isSidebarActive" :isAuth="true" />
    <Transition>
        <sidebar v-if="isSidebarActive" />
    </Transition>
    <div class="order__wrapper">
        <div class="order">
            <logo-text />
            <p class="order__text">Начальная точка</p>
            <input type="text" class="order__input" v-model="startInput" />
            <p class="order__text">Конечная точка</p>
            <input type="text" class="order__input" v-model="endtInput" />
            <p class="order__text">Стоимость</p>
            <input type="text" class="order__input" v-model="costInput" />
            <yellow-button @click="create" class="order__btn">Создать заказ</yellow-button>
            <p class="error" v-if="isError">{{ errorValue }}</p>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { createOrder } from '@/api/orders'
import { defineModel, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const startInput = ref('')
const endtInput = ref('')
const costInput = ref('')

const router = useRouter()
const isSidebarActive = ref(false)
const isError = ref(false)
const errorValue = ref('')
onMounted(() => {
    if (!localStorage.getItem('userId')) router.push('/')
})
async function create() {
    try {
        if (startInput.value === '' || endtInput.value === '' || costInput.value === '') throw new Error('Empty inputs')
        isError.value = false
        const data = await createOrder(Number(localStorage.getItem('userId')), startInput.value, endtInput.value, Number(costInput.value))
        router.push('/current')
    } catch (e) {
        if (e.message === 'Empty inputs') errorValue.value = 'Пожалуйста заполните все поля'
        if (e.message === 'Bad Request') errorValue.value = 'У вас уже есть текущий заказ'
        isError.value = true
    }
}
</script>

<style lang="less" scoped>
.error {
    align-self: center;
    font-size: 12px;
    color: @red;
    margin: 0;
    font-weight: 600;
    text-align: center;
}

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
        border: none;
        border-bottom: 2px solid @black;
        padding-left: 4px;
        font-size: 16px;
        &:focus {
            outline: none;
            border-color: @yellow;
        }
    }
}
</style>
