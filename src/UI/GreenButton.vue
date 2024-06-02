<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup>
defineOptions({
    name: 'GreenButton',
})
</script>
<style lang="less" scoped>
button {
    font-family: @Rbt;
    font-weight: 400;
    font-size: 16px;
    color: @green;
    background-color: @white;
    border: 1px solid @green;
    border-radius: 12px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
        background-color: @green;
        color: @white;
        box-shadow: 0px 0px 15px @green;
    }
}
</style>
