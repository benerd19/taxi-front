<template>
    <Header v-model="isSidebarActive" :isAuth="true" />
    <Transition>
        <sidebar v-if="isSidebarActive" />
    </Transition>
    <div class="account__wrapper">
        <div class="account">
            <div class="account__svg-wrapper">
                <UserSvg class="account__svg" />
            </div>
            <div v-if="isDelete" class="account__delete">
                <h2>Вы точно хотите удалить аккаунт?</h2>
                <div class="account__delete-section">
                    <green-button @click="deleteInfo">Да</green-button>
                    <red-button @click="isDelete = false">Нет</red-button>
                </div>
            </div>
            <div class="account__content" v-else>
                <div class="account__item">
                    <p>Фамилия</p>
                    <input type="text" v-if="isEditing" v-model="surnameInput" />
                    <p v-else>{{ surname }}</p>
                </div>
                <div class="account__item">
                    <p>Имя</p>
                    <input type="text" v-if="isEditing" v-model="nameInput" />
                    <p v-else>{{ name }}</p>
                </div>
                <div class="account__item">
                    <p>Отчество</p>
                    <input type="text" v-if="isEditing" v-model="secondNameInput" />
                    <p v-else>{{ secondName }}</p>
                </div>
                <div class="account__item">
                    <p>Бонусы</p>
                    <p>{{ bonus }}</p>
                </div>
                <div class="account__btn-section" v-if="isEditing">
                    <green-button @click="acceptChange">Принять</green-button>
                    <red-button @click="isEditing = false">Отменить</red-button>
                </div>
                <div class="account__btn-section" v-else>
                    <black-button @click="editingMode">Изменить данные</black-button>
                    <red-button @click="exit">Выйти</red-button>
                    <red-button @click="isDelete = true">Удалить</red-button>
                </div>
                <p class="error" v-if="isError">Пожалуйста, заполните поле с именем</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UserSvg from '@/assets/svg/UserSvg.vue'
import { getUser, updateUser, deleteUser } from '@/api/user'
import { useRouter } from 'vue-router'
const isSidebarActive = ref(false)
const isError = ref(false)
const name = ref('')
const surname = ref('')
const secondName = ref('')
const bonus = ref('')
const isEditing = ref(false)
const nameInput = ref('')
const surnameInput = ref('')
const secondNameInput = ref('')
const router = useRouter()
const isDelete = ref(false)

function editingMode() {
    nameInput.value = name.value
    surnameInput.value = surname.value
    secondNameInput.value = secondName.value
    isEditing.value = true
}

function exit() {
    localStorage.removeItem('userId')
    router.push('/')
}

async function deleteInfo() {
    const data = await deleteUser(localStorage.getItem('userId'))
    localStorage.removeItem('userId')
    router.push('/')
}

async function acceptChange() {
    try {
        isError.value = false
        if (nameInput.value === '') throw new Error('Empty input')
        const data = await updateUser(Number(localStorage.getItem('userId')), nameInput.value, surnameInput.value, secondNameInput.value)
        name.value = nameInput.value
        surname.value = surnameInput.value
        secondName.value = secondNameInput.value
        isEditing.value = false
    } catch (e) {
        console.log(e)
        if (e.message === 'Empty input') isError.value = true
    }
}

onMounted(async () => {
    if (!localStorage.getItem('userId')) router.push('/')
    const data = await getUser(localStorage.getItem('userId'))
    name.value = data.data.firstname
    surname.value = data.data.surname
    secondName.value = data.data.secondname
    bonus.value = data.data.bonus_count
})
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

.error {
    align-self: center;
    font-size: 12px;
    color: @red;
    margin: 0;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
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

.account {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 200px;
    &__wrapper {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__svg {
        width: 250px;
        height: 250px;
    }
    &__content {
        //width: 250px;
        min-width: 395px;
    }

    &__delete {
        min-width: 395px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &__btn-section {
        margin-top: 50px;
        display: flex;
        gap: 25px;
        justify-content: center;
    }

    &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__svg-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px;
        border: 2px solid @black;
        border-radius: 150px;
    }
    &__delete-section {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
}
</style>
