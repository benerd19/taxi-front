<template>
    <!-- <TaxiButton>Заказать</TaxiButton> -->
    <!-- <Sidebar /> -->
    <Header :isAuth="isAuth" v-model="isSidebarActive" />
    <Transition>
        <sidebar v-if="isSidebarActive" />
    </Transition>
    <div class="main">
        <h2 class="main__title">
            Добро пожаловать в <span class="main__title-company">Price<span class="main__title-your">Your</span>Ride</span>
        </h2>
        <div class="main__content">
            <div class="main__text">
                <h3>Мы предлагаем уникальный способ поездок</h3>
                <p class="main__main-text">
                    Устали от фиксированных тарифов и неожиданных переплат? У нас пассажиры сами назначают плату за проезд! Просто выберите маршрут,
                    укажите сумму, которую вы готовы заплатить, и наслаждайтесь комфортной поездкой.
                </p>
                <ul>
                    <li class="main__list-element">
                        <span class="main__advantage">Гибкость и контроль:</span>
                        Вы сами решаете, сколько платить.
                    </li>
                    <li class="main__list-element">
                        <span class="main__advantage">Прозрачность и честность:</span>
                        Водители видят ваше предложение и соглашаются на него.
                    </li>
                    <li class="main__list-element">
                        <span class="main__advantage">Комфорт и безопасность:</span>
                        Все наши водители проходят строгий отбор и проверки.
                    </li>
                </ul>
                <p>Попробуйте наш сервис уже сегодня и оцените свободу выбора!</p>
                <YellowButton class="main__btn" @click="$router.push('/auth')">Заказать</YellowButton>
            </div>
            <img src="../assets/main-page-pic.jpg" alt="" class="main__picture" />
        </div>
    </div>

    <Footer />
</template>

<script setup>
import { ref, watch } from 'vue'
const isAuth = ref(true)
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

.main {
    font-family: @Rbt;

    &__main-text {
        line-height: 1.5;
    }

    &__title-company {
        font-family: @Throne;
        user-select: none;
    }

    &__title-your {
        font-family: @Throne;
        color: @yellow;
        user-select: none;
    }
    &__list-element {
        margin-bottom: 10px;
    }

    &__btn {
        margin-top: 50px;
        align-self: center;
    }
    &__content {
        display: flex;
        justify-content: space-around;
    }
    &__text {
        max-width: 800px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__title {
        font-size: 36px;
        text-align: center;
        padding-top: 140px;
    }

    &__picture {
        width: 400px;
    }

    &__advantage {
        font-weight: 700;
        color: @yellow;
    }
}
</style>
