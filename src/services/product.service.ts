import  Api  from "./Api";

export default{

  get_all_products(){
    return Api().get('/products')
  },

  get_a_product(id:number){
    return Api().get(`/products/${id}`)
  },

  get_categories(){
    return Api().get('/products/categories')
  },

  get_cat_products(category:string){
    return Api().get(`/products/category/${category}`)
  }

}