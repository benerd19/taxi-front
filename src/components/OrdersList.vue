<template>
    <template v-for="order in orders" :key="order.id_drive">
        <p>{{ order.start_point }}</p>
        <p>{{ order.end_point }}</p>
        <p>{{ order.cost }}</p>
        <p>{{ order.driver_surname }} {{ order.driver_firstname }}</p>
        <p>{{ order.status_name }}</p>
    </template>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
const orders = ref([{ start_point: 'Start point', end_point: 'End point', cost: 'Cost', driver_surname: 'Driver Name', status_name: 'Status' }])
onMounted(async () => {
    const data = await axios.get('http://26.145.60.29:3000/api/drive/18')
    console.log(data.data)
    data.data.forEach((el) => {
        orders.value.push(el)
    })
})
</script>
<style lang="less" scoped>
p {
    font-family: @Rbt;
    //border: 1px solid @black;
}
</style>
