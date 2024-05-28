<template>
    <div class="sidebar">
        <div class="sidebar__item"></div>
        <div class="sidebar__item"></div>
        <div class="sidebar__item"></div>
    </div>
</template>

<script setup>
defineOptions({
    name: 'Sidebar',
})
</script>

<style lang="less" scoped>
.sidebar {
    z-index: 3;
    position: absolute;
    top: 49px;
    left: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__item {
        background-color: black;
        width: 25px;
        height: 2px;
    }
    &:hover {
        cursor: pointer;
    }
}
</style>
