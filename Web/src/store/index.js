
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state : {
    cartPender:2,
  },
  mutations: {
    increment(state,value){
      state.cartPender+=value
    }
  },
  actions:{
    
  }
})



