import { defineStore } from "pinia";


export const useCartStore = defineStore({
  id: "cartStore",

  state: () => {
    return {
      cart_items: [] as [] | any
    };
  },

  getters: {
    /* total: (state) => {
      return state.cart_items.reduce((a ,b)=> a + b.price)
    } */
  },

  actions: {
    add_item_cart(product:Object){

      this.cart_items.push(product);
      console.log(this.cart_items); 
    },

    /* remove_item_cart(product){
      this.cart_items.find((id)=>)
    } */
  },
});