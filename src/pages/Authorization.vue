<template>
    <div class="auth__wrapper">
        <div class="auth" v-if="form === 'Auth'">
            <h2 class="auth__logo-text">Price<span class="auth__logo-your">Your</span>Ride</h2>
            <p class="auth__email">Электронная почта</p>
            <input type="text" class="auth__input" v-model="emailInput" />
            <p class="auth__password">Пароль</p>
            <input type="text" class="auth__input" v-model="passwordInput" />
            <p class="auth__no-account">Нет аккаунта? <span class="auth__registration" @click="changeForm">Зарегистрируйся</span></p>
            <yellow-button class="auth__btn" @click="clickLogIn">Войти</yellow-button>
            <p class="error" v-if="isError">{{ errorMessage }}</p>
        </div>
        <div class="registration" v-if="form === 'Registration'">
            <h2 class="registration__logo-text">Price<span class="registration__logo-your">Your</span>Ride</h2>
            <p class="registration__name">Ваше имя</p>
            <input type="text" class="registration__input" v-model="nameInput" />
            <p class="registration__email">Электронная почта</p>
            <input type="text" class="registration__input" v-model="emailInput" />
            <p class="registration__password">Пароль</p>
            <input type="text" class="registration__input" v-model="passwordInput" />
            <p class="registration__password">Подтвердите пароль</p>
            <input type="text" class="registration__input" v-model="secondPasswordInput" />
            <p class="registration__no-account">Есть аккаунт? <span class="registration__registration" @click="changeForm">Войдите</span></p>
            <yellow-button class="registration__btn" @click="registrationClick">Зарегистрироваться</yellow-button>
            <p class="error" v-if="isError">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { logIn, registration } from '@/api/auth'
import Logo from '@/assets/svg/LogoSvg.vue'
import { useRouter } from 'vue-router'
const form = ref('Auth')

const emailInput = ref('')
const passwordInput = ref('')
const secondPasswordInput = ref('')
const nameInput = ref('')
const isError = ref(false)
const errorMessage = ref('Error')
const router = useRouter()
async function clickLogIn() {
    try {
        isError.value = false
        if (emailInput.value === '' || passwordInput.value === '') throw new Error('Empty inputs')
        const data = await logIn(emailInput.value, passwordInput.value)
        localStorage.setItem('userId', data.data.id)
        router.push('/')
    } catch (e) {
        if (e.message === 'Not Found') errorMessage.value = 'Неверная почта или пароль. Попробуйте заново'
        if (e.message === 'Empty inputs') errorMessage.value = 'Пожалуйста, заполните все поля'
        isError.value = true
    }
}
async function registrationClick() {
    try {
        isError.value = false
        if (emailInput.value === '' || passwordInput.value === '' || secondPasswordInput.value === '' || nameInput.value === '')
            throw new Error('Empty inputs')
        if (passwordInput.value !== secondPasswordInput.value) throw new Error('Password not matched')
        const data = await registration(emailInput.value, passwordInput.value, nameInput.value)
        localStorage.setItem('userId', data.data.id)
        router.push('/')
    } catch (e) {
        if (e.message === 'Bad Request') errorMessage.value = 'Данная почта уже используется, введите другую'
        if (e.message === 'Password not matched') errorMessage.value = 'Пароли должны совпадать'
        if (e.message === 'Empty inputs') errorMessage.value = 'Пожалуйста, заполните все поля'
        isError.value = true
    }
}

function changeForm() {
    isError.value = false
    emailInput.value = ''
    passwordInput.value = ''
    secondPasswordInput.value = ''
    nameInput.value = ''
    if (form.value === 'Auth') form.value = 'Registration'
    else form.value = 'Auth'
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

.auth {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;
    width: 300px;
    border-radius: 10px;
    border: 2px solid @black;
    padding: 30px;
    &__logo-your {
        font-family: @Throne;
        color: @yellow;
        user-select: none;
    }
    &__btn {
        align-self: center;
    }

    &__logo-text {
        font-family: @Throne;
        align-self: center;
        text-align: center;
        font-size: 30px;
        user-select: none;
    }
    &__email,
    &__password {
        margin: 0;
        font-size: 20px;
    }

    &__registration {
        color: @yellow;
        cursor: pointer;
    }
    &__wrapper {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__input {
        border: none;
        width: 80%;
        border-bottom: 2px solid @black;
        padding-left: 4px;
        font-size: 16px;
        &:focus {
            outline: none;
            border-color: @yellow;
        }
    }
}

.registration {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;
    width: 300px;
    border-radius: 10px;
    border: 2px solid @black;
    padding: 30px;
    &__btn {
        align-self: center;
    }

    &__error {
        align-self: center;
    }
    &__logo-text {
        font-family: @Throne;
        align-self: center;
        text-align: center;
        font-size: 30px;
        user-select: none;
    }
    &__logo-your {
        font-family: @Throne;
        color: @yellow;
        user-select: none;
    }
    &__email,
    &__password,
    &__name {
        margin: 0;
        font-size: 20px;
    }

    &__registration {
        color: @yellow;
        cursor: pointer;
    }
    &__wrapper {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__input {
        border: none;
        width: 80%;
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
