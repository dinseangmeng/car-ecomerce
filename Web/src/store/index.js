
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state : {
    cartPender:2,
    trending:[
      {
        model:"Grand I10 NIOS",
        Type:"Lift Back",
        Company:"Hyundia",
        image:"Hyundia_Grand_i10_NIOS.png"
      }
    ],
    product:[
      {
        model:"Grand I10 NIOS",
        Type:"Lift Back",
        Company:"Hyundia",
        image:"Hyundia_Grand_i10_NIOS.png"
      }
    ]
  },
  mutations: {
    increment(state,value){
      state.cartPender+=value
    }
  },
  actions:{
    
  }
})



