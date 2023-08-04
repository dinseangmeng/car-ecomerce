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
                },
                {
                    label:'User Info',
                    path:`/car/cart/user/${itemId}`
                }
                ]"
                />
                <div id="data_content">
                    <div class="left">
                        <div class="user_infor">
                            
                            <div class="header_label">YOUR INFO</div>
                            <div class="input">
                                <input type="email" placeholder="EMAIL">
                                <input type="number" placeholder="PHONE NUMBER">
                            </div>
                            
                        </div>
                        <div class="shipping_infor">
                            
                            <div class="header_label">SHIPPING ADDRESS</div>
                            <div class="input">
                                <input type="email" placeholder="EMAIL">
                                <input type="number" placeholder="PHONE NUMBER">
                            </div>
                            <div class="input">
                                <input type="text" placeholder="ADDRESS 1">
                                <input type="text" placeholder="ADDRESS 2">
                            </div>
                            <div class="input">
                                <select placeholder="COUNTRY">
                                    <option value="cambodia">CAMBODIA</option>
                                    <option value="india">INDIA</option>
                                    <option value="vietnam">VIETNAM</option>
                                </select>
                                <select placeholder="CITY">
                                    <option value="pp">PHNOM PENH</option>
                                    <option value="btb">BATAMBANG</option>
                                    <option value="kd">KANDAL</option>
                                </select>
                                <!-- <input type="text" placeholder="ADDRESS 2"> -->
                            </div>
                            <div class="input">
                                <input type="text" placeholder="ZIP/POSTAL CODE">
                                <RouterLink :to="`/car/cart/user/shipping/${store.state.cartPender.id}`">Check out</RouterLink>
                            </div>
                        </div>
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

                        
                    </div>
                    
                </div>
            </main>
        </div>
    </defaultLayout>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, inject,onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Breadcrumb from '../component/Breadcrumb.vue';
import defaultLayout from '../layout/default.vue';
import store from '../store'

const route = useRoute();
const router=inject('router')



onMounted(() => {
    itemId.value = route.params.id;
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
                display: flex;
                flex-direction: column;
                gap: 1rem;
                .user_infor,.shipping_infor{
   
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    .header_label+.input{
                        border-top: 4px solid #005889;
                    }
                    .input{
                        padding-top: 1rem;
           
                        display: flex;
                        justify-content: space-between;
                        gap: 2rem;
                   
                        input,select,a{
                            width: 100%;
                            color: white;
                            background-color: transparent;
                            border: 4px solid black;
                            border-radius: .5rem;
                            outline: none;
                            font-size: 1.2rem;
                            padding: .2rem 1rem ;
                            cursor: pointer;
                            &::placeholder{
                                color: white;
                                // font-size: 1.5rem;
                            }
                        }
                        select{
                        
                            option{
                                background-color: black;
                                cursor: pointer;
                            }
                        }
                        a{
                            width: 30%;
                            background-color: black;
                            text-align: center;
                            padding: 0 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
                .shipping_infor{
                    .header_label{
                        font-size: 1.5rem;
                        padding-left: 1rem;
                        
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
          
            }
        }
    }
}
</style>