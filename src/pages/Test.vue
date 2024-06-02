<template>
    <div class="list">
        <OrderList />
    </div>
</template>

<script setup>
import OrderList from '@/components/OrdersList.vue'
</script>

<style>
.list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
}
</style>
