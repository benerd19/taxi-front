<template>
    <h2 class="logo">Price<span class="logo__your">Your</span>Ride</h2>
</template>

<script setup>
defineOptions({
    name: 'LogoText',
})
</script>

<style lang="less" scoped>
.logo {
    text-align: center;
    font-size: 30px;
    user-select: none;
    font-family: @Throne;
    &__your {
        font-family: @Throne;
        color: @yellow;
        user-select: none;
    }
}
</style>
