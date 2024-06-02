<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup>
defineOptions({
    name: 'RedButton',
})
</script>
<style lang="less" scoped>
button {
    font-family: @Rbt;
    font-weight: 400;
    font-size: 16px;
    color: @red;
    padding: 15px;
    background-color: @white;
    border: 1px solid @red;
    border-radius: 12px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
        background-color: @red;
        color: @white;
        box-shadow: 0px 0px 15px @red;
    }
}
</style>
