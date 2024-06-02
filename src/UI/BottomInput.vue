<template>
    <input type="text" />
</template>
<script setup>
defineOptions({
    name: 'BottomInput',
})
</script>
<style lang="less" scoped>
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
</style>
