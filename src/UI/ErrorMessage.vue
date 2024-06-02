<template>
    <p class="error">
        <slot></slot>
    </p>
</template>

<script setup>
defineOptions({
    name: 'ErrorMessage',
})
</script>

<style lang="less" scoped>
.error {
    font-size: 12px;
    color: @red;
    margin: 0;
    font-weight: 600;
    text-align: center;
}
</style>
