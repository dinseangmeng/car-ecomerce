<template>
    <defaultLayout>
        <main>
            <h1>Thank you for you ordering</h1>
            <h2>Will check and proceed you order</h2>
        </main>
    </defaultLayout>
</template>

<script setup>
    import defaultLayout from '../layout/default.vue';
    import store from '../store';
    store.state.cartPender={}
    localStorage.removeItem("carts")
</script>

<style lang="scss" scoped>
main{
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 4.5rem;
        color: white !important;
    }
    h2{
        color: white !important;
    }
}
</style>