<template>
    <defaultLayout>
        <div id="container">
            <main class="main">
                
                
                <Breadcrumb 
                :path="[
                { 
                    label: 'Home', 
                    path: '/' 
                },
                { 
                    label: 'Collection', 
                    path: '/collection' 
                },
                {
                    label:itemId,
                    path:`/car/${itemId}`
                },
                {
                    label:'Cart',
                    path:`/car/cart/${itemId}`
                }
                ]"
                />
                <div id="data_content">
                    <div class="left">
                        <div class="header_label">YOUR CART</div>
                        <table>
                            <tr>
                                <th>Collection</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                     
                            <tr v-if="store.state.cartPender">
                                <td>
                                    <img :src="store.state.cartPender.imagePath" alt="car_img">
                                </td>
                                <td>$ {{store.state.cartPender.price}}</td>
                                <td><input type="number" step="1" min="1" v-model="qty" @change="changeQty"></td>
                            </tr>
                        </table>
                    </div>
                    <div class="right">
                        <div class="header_label">TOTAL : 1 ITEM</div>
                        <div class="cart_info">
                            <div class="info">
                                <div class="label">SUBTOTAL : </div>
                                <div class="content">$ {{ (store.state.cartPender.price)*store.state.cartPender.qty }}</div>
                            </div>
                            <div class="info">
                                <div class="label">SHIPPING FEE : </div>
                                <div class="content">$ 1,000</div>
                            </div>
                            <div class="info">
                                <div class="label">TAX : </div>
                                <div class="content">$ {{ (store.state.cartPender.price * 0.1)*store.state.cartPender.qty }}</div>
                            </div>
                            <div class="info">
                                <div class="label">Address : </div>
                                <div class="content">Cambodia,Phnom penh,Toul kork</div>
                            </div>
                        </div>
                        <div class="total">
                            <div class="label">TOTAL :</div>
                            <div class="price">$ {{ ((store.state.cartPender.price * 0.01 + 1000 ) + Number(store.state.cartPender.price))*store.state.cartPender.qty}}</div>
                        </div>
                        <RouterLink :to="`/car/cart/user/${itemId}`">Check out</RouterLink>

                    </div>

                </div>
            </main>
        </div>
    </defaultLayout>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted ,inject} from 'vue';
import { useRoute } from 'vue-router';
import Breadcrumb from '../component/Breadcrumb.vue';
import defaultLayout from '../layout/default.vue'
import store from '../store';
const car=ref({})
const route = useRoute();
const itemId = ref('');
const qty=ref()
const router=inject('router')

const changeQty=()=>{
    store.commit('setCartQty',qty.value)
}

onMounted(() => {
    itemId.value = route.params.id;
    qty.value= store.state.cartPender.qty
});
</script>

<style lang="scss" scoped>
#container{
    width: 100%;
    // height: 70vh;
    min-height: fit-content;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem ;
    margin-bottom: 3rem;
    .main{
        width: 90%;
        height: 100%;
        display: flex;
        gap: 2rem;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        #data_content{
            display: flex;
            width: 90%;
            align-self: center;
            gap: 2rem;
            &>div{
                width: 100%;

            }
            .header_label{
                color: white;
                font-size: 2rem;
          
            }
            .left{
                // .header_label{
                //     position: relative;
                //     margin-bottom: 1rem;
                //     padding-bottom: 1rem;
                //     &::after{
                //         content: "";
                //         width: 100%;
                //         height: 4px;
                //         background-color: #005889;
                //         position: absolute;
                //         left: 0;
                //         bottom: 0;
                //     }
                // }
                table{
                    color: white;
                    tr{
                  
                        border-top:  4px solid #005889;
                        border-bottom:  4px solid #005889;
                    }
                    tr td,th{
                        font-size: 1.5rem;
                        white-space: nowrap;
                        padding: .5rem 1rem;
                        &:nth-child(2){
                            min-width:15rem ;
                        }
                        &:last-child{
                            text-align: center;
                        }
                        img{
                            width: 50%;
                        }
                        input[type="number"]{
                            background-color: transparent;
                            text-align: center;
                            border: none;
                            outline: none;
                        }
                    }
                }
   
            }
            .right{
                display: flex;
                flex-direction: column;
                width: 50%;
                
                .header_label{
                    border-bottom: 4px solid #005889;
                    width: fit-content;
                }
                .cart_info{
                    color: white;
                    font-size: 1.5rem;
                    display: flex;
                    gap: 1rem;
                    flex-direction: column;
                    padding:  .6rem  1.5rem ;
                    .info{
                        display: flex;
                        gap: 1rem;
                        .label{
                            white-space: nowrap;
                        }
                    }
                    border-bottom: 4px solid #005889;
                    
                }
                .total{
                    margin-top: 1rem;
                    display: flex;
                    // justify-content: space-between;
                    gap: 2rem;
                    color: white;
                    font-size: 2rem;
                }
                a{
                    font-size: 1.7rem;
                    width: 100%;
                    padding: .5rem 0;
                    background-color: black;
                    color: white;
                    text-align: center;
                    border-radius: .5rem;
                    margin-top: 1rem;
                }
            }
        }
    }
}
</style>