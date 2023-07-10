<template>
    <div v-if="product" @click="handleClickDetail(product)">
        <div class="card">
            <div class="card-image">
                <span class="badge" :data-badge="product.quantity" v-if="product.quantity > 0"></span>
                <img class="image" :src="product.thumbnail" alt="Product Image">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product'],
        methods: {
            handleClickDetail(product) {
            const detailProduct = document.querySelector('.detailProduct');
            detailProduct.classList.add('show');
            detailProduct.classList.remove('hidde');
            const cart = document.querySelector('.cart');
            cart.classList.add('hidde');
            cart.classList.remove('show');
            this.$store.commit('SET_SELECTED_PRODUCT', {...product, quantity:0});
            },
        }
    }
</script>