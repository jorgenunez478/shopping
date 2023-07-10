
export const state = () => ({
    products: [],
    selectedProduct: null,
    cartProducts: [],
});

export const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products;
    },
    SET_SELECTED_PRODUCT(state, product) {
        state.selectedProduct = product;
    },
    SET_PRODUCT_QUANTITY(state, payload) {
        state.selectedProduct.quantity = payload.quantity;

        let filtersProducts =  state.products.filter(product =>  product.id == payload.id);
        let productBase =  filtersProducts[0];
        productBase.quantity = payload.quantity;

        state.cartProducts = state.cartProducts.filter((item) => item.id !== productBase.id)
        if(payload.quantity > 0){
            state.cartProducts.push(productBase);
        }
    },
};

export const actions = {
    async fetchProducts({ commit }) {
        try {
            const response = await this.$axios.$get('https://dummyjson.com/products');
            response.products.forEach((product, index) => {
                let newProduct = {...product, quantity:0};
                response.products[index] = newProduct;
            });
            commit('SET_PRODUCTS', response.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },
};
  