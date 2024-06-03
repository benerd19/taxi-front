<template>
    <Header v-model="isSidebarActive" :isAuth="true" />
    <Transition>
        <sidebar v-if="isSidebarActive" />
    </Transition>

    <h1 class="orders__alternative-title" v-if="orders.length === 1">Здесь будут находиться ваши заказы</h1>
    <div class="orders__wrapper" v-else>
        <h1 class="orders__title">Ваши поездки</h1>
        <div class="orders">
            <OrdersList :orders="orders" />
        </div>
    </div>
    <Footer />
</template>

<script setup>
import OrdersList from '@/components/OrdersList.vue'
import { ref, onMounted } from 'vue'
import { getAllOrders } from '@/api/orders'
const orders = ref([
    { start_point: 'Начальная точка', end_point: 'Конечная точка', cost: 'Стоимость', driver_surname: 'Водитель', status_name: 'Статус поездки' },
])
const isSidebarActive = ref(false)
onMounted(async () => {
    try {
        const data = await getAllOrders(localStorage.getItem('userId'))
        console.log(data.data)
        data.data.forEach((el) => {
            orders.value.push(el)
        })
    } catch (e) {
        console.log(e)
    }
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

.orders {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    //grid-template-rows: repeat(auto-fill, 1fr);
    grid-gap: 10px;
    &__wrapper {
        margin-top: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 344px;
    }
    &__title {
        text-align: center;
    }
    &__alternative-title {
        text-align: center;
        margin-top: 150px;
        margin-bottom: 515px;
    }
}
</style>
