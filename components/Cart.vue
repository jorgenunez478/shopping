<template>
    <div class="cart hidde">
      <span class="text-bold color">Shopping Cart</span>
      <div class="divider"></div>
      <ul class="list-group">
        <li v-for="product in cart" :key="product.id" class="list-item">
          <span class="badge" :data-badge="product.quantity"></span>
          <img :src="product.thumbnail" :alt="product.title" class="product-image img-responsive">
          <span class="product-titlequantity">{{ product.title }}</span>
        </li>
      </ul>
      <div class="divider"></div>
      <div class="text-right">
        <div class="text-capitalize form-inline">Total:</div>
        <div class="text-bold form-inline">${{ total }}</div>
      </div>
      <button class="btn bg-color">Paga con Womppi</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
        cart(){
            return this.$store.state.cartProducts;
        },
        total() {
            let total = 0
            if(this.$store.state.cartProducts.length > 0){
                this.$store.state.cartProducts.forEach(element => {
                    total += (element.price * element.quantity);
                });
            }
            return total;
        },
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
    },
  };
</script>
  
<style>
  .list-group {
    padding: 0;
    list-style-type: none;
  }

  .list-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }

  .product-image {
    width: 50px;
    margin-right: 1rem;
    margin-left:  1rem;
  }

  .product-title {
    font-weight: bold;
  }
</style>