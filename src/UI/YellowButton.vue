<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup>
defineOptions({
    name: 'YellowButton',
})
</script>
<style lang="less" scoped>
button {
    font-family: @Rbt;
    font-weight: 400;
    font-size: 16px;
    width: 110px;
    height: 50px;
    background-color: @yellow;
    border: 1px solid @black;
    border-radius: 12px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
        background-color: @black;
        color: @white;
    }
}
</style>
