<template>
    <footer class="footer">
        <div class="footer__content">
            <router-link :to="'about'" class="footer__content-item">О нас</router-link>
            <router-link :to="'support'" class="footer__content-item">Поддержка</router-link>
            <router-link :to="'confidential'" class="footer__content-item">Политика конфиденциальности</router-link>
            <router-link :to="'rules'" class="footer__content-item">Правила пользования сервиса</router-link>
        </div>
    </footer>
</template>

<script setup>
import router from '@/router/router'

defineOptions({
    name: 'Footer',
})
</script>

<style lang="less" scoped>
.footer {
    padding-top: 50px;
    padding-bottom: 50px;
    height: 150px;
    width: 100%;
    background-color: @black;
    margin-top: 100px;
    display: flex;
    &__content {
        display: flex;
        flex-direction: column;
        margin-left: 175px;
        justify-content: space-around;
    }

    &__content-item {
        color: @white;
        text-decoration: none;
        &:hover {
            color: @yellow;
        }
    }
}
</style>
