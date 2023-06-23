
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state : {
    cartPender:2,
    apiUrl:"http://localhost:3000/api",
    fileUrl:"http://localhost:3000/static/get",
  },
  mutations: {
    increment(state,value){
      state.cartPender+=value
    }
  },
  actions:{
    
  }
})



