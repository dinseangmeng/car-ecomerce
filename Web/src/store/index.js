
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state : {
    cartPender:localStorage.getItem("carts")?JSON.parse(localStorage.getItem("carts")):null,
    cars:localStorage.getItem("cars") ? JSON.parse(localStorage.getItem("cars") ) :[]
  },
  mutations: {
    setCartQty(state,qty){
      state.cartPender.qty=qty
      localStorage.setItem('carts',JSON.stringify(state.cartPender))
    }
  },
  getters:{
    getCars:(state)=>(id)=>{
      const  car= state.cars.find((car)=>car.id==id)
      return JSON.parse(JSON.stringify(car))
       
    }
  }
})



