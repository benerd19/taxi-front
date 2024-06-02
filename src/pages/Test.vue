<template>
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('asdad')
</script>

<style></style>
