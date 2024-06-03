<template>
    <template v-for="order in props.orders" :key="order.id_drive">
        <div class="order__item">
            <p>{{ order.start_point }}</p>
        </div>
        <div class="order__item">
            <p>{{ order.end_point }}</p>
        </div>
        <div class="order__item">
            <p>{{ order.cost }} ₽</p>
        </div>
        <div class="order__item">
            <p>{{ order.driver_surname }} {{ order.driver_firstname }}</p>
        </div>
        <div class="order__item">
            <p
                :class="[
                    { 'order__status--red': order.status_name === 'Поездка отменена' },
                    { 'order__status--yellow': order.status_name === 'Ищем водителя' || order.status_name === 'Поездка начата' },
                    { 'order__status--green': order.status_name === 'Поездка завершена' },
                ]"
            >
                {{ order.status_name }}
            </p>
        </div>
    </template>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
const props = defineProps(['orders'])
// const orders = ref([
//     { start_point: 'Начальная точка', end_point: 'Конечная точка', cost: 'Стоимость', driver_surname: 'Водитель', status_name: 'Статус поездки' },
//     { start_point: 'Начальная точка', end_point: 'Конечная точка', cost: 'Стоимость', driver_surname: 'Водитель', status_name: 'Поездка завершена' },
// ])
// onMounted(async () => {
//     const data = await axios.get('http://26.145.60.29:3000/api/drive/18')
//     console.log(data.data)
//     data.data.forEach((el) => {
//         orders.value.push(el)
//     })
// })
</script>
<style lang="less" scoped>
p {
    font-family: @Rbt;
    margin: 0;
    //border: 1px solid @black;
}

.order {
    &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    &__status {
        &--red {
            color: @red;
        }
        &--yellow {
            color: @yellow;
        }
        &--green {
            color: @green;
        }
    }
}
</style>
