<template>
    <div class="detailProduct hidde">
        <span class="text-bold color">Product</span>
        <div class="divider"></div>
        <div class="card" v-if="selectedProduct">
            <div class="card-image">
                <span class="badge" :data-badge="selectedProduct.quantity" v-if="selectedProduct.quantity > 0"></span>
                <img class="image img-responsive" :src="selectedProduct.thumbnail" alt="Product Image">
            </div>
            <div class="card-body">
                <div class="columns col-12">
                    <div class="column col-8 col-mx-auto">
                        <p>{{ selectedProduct.title }} • ${{ selectedProduct.price }}</p>
                    </div>
                    <div class="column col-4 col-mx-auto">
                        <div class="btn-group" style="margin-left: 25%;">
                            <button class="btn btn-error" @click="decrementQuantity">-</button>
                            <button class="btn bg-color" @click="incrementQuantity">+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="card-footer">
                <p>{{ selectedProduct.description }}</p>
            </div>
        </div>
        <div v-if="!selectedProduct">Please choose a product on the left</div>
    </div>
</template>

<script>
    export default {
        computed: {
            selectedProduct() {
                return this.$store.state.selectedProduct;
            },
        },
        methods: {
            decrementQuantity() {
                if (this.$store.state.selectedProduct.quantity > 0) {
                    let productSelected = this.$store.state.selectedProduct;
                    let payload = {id:productSelected.id, quantity:parseInt(productSelected.quantity)-1};
                    this.$store.commit('SET_PRODUCT_QUANTITY', payload);
                }
            },
            incrementQuantity() {
                let productSelected = this.$store.state.selectedProduct;
                let payload = {id:productSelected.id, quantity:parseInt(productSelected.quantity)+1};
                this.$store.commit('SET_PRODUCT_QUANTITY', payload);
            },
        },
    };
</script>
  
<style>
    .image {
        width: 100%;
        max-width: 300px;
    }
</style>