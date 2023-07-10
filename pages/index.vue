<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column col-6">
          <img class="img-responsive" src="/images/bag-shopping.jpg" />
        </div>
        <div class="column col-6 text-right">
          <span class="btn-cart" @click="handleClickCart()"><img src="/images/cart-icon.png" /> $ {{ total }}</span>
        </div>
      </div>  
      <div class="columns">
        <div class="column col-6">
          <span class="text-bold color">Store</span>
          <div class="divider"></div>
          <div class="columns">
            <div class="column col-4 col-md-6 col-sm-12" v-for="product in products" :key="product.id" >
              <Product :product="product" />
            </div>
          </div>
        </div>
        <div class="column col-6">
          <div class="columns">
            <div class="column col-12 col-md-12 col-sm-12">
              <Detail />
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Product from '../components/Product.vue';
import Detail from '../components/Detail.vue';
import Cart from '../components/Cart.vue';

export default {
  components: { Product, Detail, Cart },
  computed: {
    products() {
      return this.$store.state.products;
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
  created() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    handleClickCart() {
      const detailProduct = document.querySelector('.detailProduct');
      detailProduct.classList.add('hidde');
      detailProduct.classList.remove('show');
      const cart = document.querySelector('.cart');
      cart.classList.add('show');
      cart.classList.remove('hidde');
    },
  },
};
</script>

<style>
  .image {
    width: 100%;
  }
  .container {
    max-width: 90%;
    margin: 2% 5% 5% 5%;
  }
  .hidde {
    display: none;
  }
  .show {
    display: block;
  }
  .btn-cart{
    background-color: #8a2be2;
    border-radius: 5px;
    width: 65%;
    max-width: 120px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .color{
    color: #8a2be2;
  }
  .bg-color{
    background-color: #8a2be2;
    color:white;
  }
  .badge[data-badge]::after{
    background-color: #8a2be2;
    color:white;
  }
</style>