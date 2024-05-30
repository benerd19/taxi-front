<template>
    <div class="auth__wrapper">
        <div class="auth" v-if="form === 'Auth'">
            <!-- <Logo class="auth__logo" /> -->
            <h2 class="auth__logo-text">Price<span class="auth__logo-your">Your</span>Ride</h2>
            <p class="auth__email">Электронная почта</p>
            <input type="text" class="auth__input" />
            <p class="auth__password">Пароль</p>
            <input type="password" class="auth__input" />
            <p class="auth__no-account">Нет аккаунта? <span class="auth__registration" @click="form = 'Registration'">Зарегистрируйся</span></p>
            <yellow-button class="auth__btn">Войти</yellow-button>
        </div>
        <div class="registration" v-if="form === 'Registration'">
            <h2 class="registration__logo-text">Price<span class="registration__logo-your">Your</span>Ride</h2>
            <p class="registration__email">Электронная почта</p>
            <input type="text" class="registration__input" />
            <p class="registration__password">Пароль</p>
            <input type="password" class="registration__input" />
            <p class="registration__password">Подтвердите пароль</p>
            <input type="password" class="registration__input" />
            <p class="registration__no-account">Есть аккаунт? <span class="registration__registration" @click="form = 'Auth'">Войдите</span></p>
            <yellow-button class="registration__btn">Зарегистрироваться</yellow-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Logo from '@/assets/svg/LogoSvg.vue'
const form = ref('Auth')
</script>

<style lang="less" scoped>
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
    }
    &__btn {
        margin-bottom: 10px;
        align-self: center;
    }

    &__logo-text {
        font-family: @Throne;
        align-self: center;
        text-align: center;
        font-size: 30px;
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
        margin-bottom: 10px;
        align-self: center;
    }

    &__logo-text {
        font-family: @Throne;
        align-self: center;
        text-align: center;
        font-size: 30px;
    }
    &__logo-your {
        font-family: @Throne;
        color: @yellow;
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
        }
    }
}
</style>
