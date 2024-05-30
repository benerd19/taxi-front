<template>
    <div class="sidebar"></div>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({
    name: 'Sidebar',
})

const isActive = ref(false)
</script>

<style lang="less" scoped></style>
