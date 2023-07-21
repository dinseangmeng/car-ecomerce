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
                },
                {
                    label:'Shipping Info',
                    path:`/car/cart/user/shipping/${itemId}`
                }
                
                ]"
                />
                <div id="data_content">
                    <div class="left">
                        <div class="shipping_infor">
                            
                            <div class="header_label">Shiping: cambodai,phone penh ,toul kork....</div>
                            <div class="input">
                                <input type="text" placeholder="APPLY GIFT CARD/COUPON" class="gift">
                                <button>APPLY</button>
                            </div>
                            
                        </div>
                        <div class="payment_infor sub">
                            
                            <div class="header_label ">PAYMENT METHOD</div>
                            <div class="input">
                                <input type="text" placeholder="____ ____ ____ ____" maxlength="16">
                                <input type="text" placeholder="__" class="month" maxlength="2">
                                <span>/</span>
                                <input type="text" placeholder="__" class="year" maxlength="2">
                                <input type="text" placeholder="___" class="cvv" maxlength="3">
                            </div>
                            <input type="text" placeholder="NAME ON CARD" class="NoC">
                            
                        </div>
                        <div class="Bill_address sub">
                            
                            <div class="header_label ">BILL ADDRESS</div>
                            <label class="input">

                                <input type="radio" id="sasa" name="shipping_adr">
                               SAME AS SHIPPING ADDRESS
                            </label>
                            <label class="input">

                                <input type="radio" id="udba" name="shipping_adr">
                                USE DIFFERENT BILLING ADDRESS
                            </label>
                            
                        </div>
                        <div class="remerber_me sub">
                            
                            <div class="header_label ">REMEMBER ME</div>
                            <label class="input">

                                <input type="checkbox" id="sasa" name="shipping_adr">
                              SAVE MY INFORMATION FOR FASTER CHECKOUT
                            </label>
                            
                        </div>
                        
                    </div>
                    <div class="right">
                        <div class="header_label">TOTAL : 3 ITEM</div>
                        <div class="cart_info">
                            <div class="info">
                                <div class="label">SUBTOTAL : </div>
                                <div class="content">$ 900,000</div>
                            </div>
                            <div class="info">
                                <div class="label">SHIPPING FEE : </div>
                                <div class="content">$ 1,000</div>
                            </div>
                            <div class="info">
                                <div class="label">TAX : </div>
                                <div class="content">$ 2,000</div>
                            </div>
                            <div class="info">
                                <div class="label">Address : </div>
                                <div class="content">Cambodia,Phnom penh,Toul kork</div>
                            </div>
                        </div>
                        <div class="total">
                            <div class="label">TOTAL :</div>
                            <div class="price">$ 903,000</div>
                        </div>
                        <RouterLink to="#">Check out</RouterLink>
                        
                    </div>
                    
                </div>
            </main>
        </div>
    </defaultLayout>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Breadcrumb from '../component/Breadcrumb.vue';
import defaultLayout from '../layout/default.vue'


const route = useRoute();
const itemId = ref('');

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
                .shipping_infor{
                    
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    .header_label+.input{
                        border-top: 4px solid #005889;
                    }
                    &.sub{
                        .header_label{
                            font-size: 1.5rem;
                            padding-left: 1rem;
                            
                        }
                    }
                    .input{
                        padding: 0 1rem;
                        padding-top: 1rem;
                        display: flex;
                        justify-content: space-between;
                        gap: 2rem;
                        
                        input,select,a,button{
                            width: 100%;
                            color: white;
                            background-color: transparent;
                            border: 4px solid black;
                            border-radius: .5rem;
                            outline: none;
                            font-size: 1.3rem;
                            padding: .5rem 1rem ;
                            &.gift{
                                background-color: black;
                            }
                            &::placeholder{
                                color: white;
                                // font-size: 1.5rem;
                            }
                        }
                        button{
                            width: 30%;
                            background-color: #2d4654;
                            border-color: #2d4654;
                            cursor: pointer;
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
                .payment_infor{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    .header_label{
                        border-bottom: 4px solid #005889;
                    }
                    &.sub{
                        .header_label{
                            font-size: 1.5rem;
                            padding-left: 1rem;
                            
                        }
                    }
                    .NoC{
                        width: fit-content;
                        
                        color: white;
                        background-color: transparent;
                        border: 4px solid black;
                        border-radius: .5rem;
                        outline: none;
                        font-size: 1.3rem;
                        padding: .5rem 1rem ;
                        &::placeholder{
                            color: white;
                            // font-size: 1.5rem;
                        }
                    }
                    .input{
                        // margin-top: 1rem;
                        display: grid;
                        grid-template-columns: 1fr auto auto auto auto;
                        font-size: 1.5rem;
                        color: white;
                        padding: .5rem 1rem;
                        border: 4px solid black;
                        input{
                            width: 100%;
                            background: transparent;
                            color: white;
                            border: none;
                            outline: none;
                            &::placeholder{
                                color: white;
                            }
                            &.month{
                                width: 2rem;
                            }
                            &.year{
                                width: 2rem;
                            }
                            &.cvv{
                                width: 3rem;
                            }
                        }
                    }

                }
                .Bill_address,.remerber_me{
                    
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    .header_label{
                        border-bottom: 4px solid #005889;
                    }
                    &.sub{
                        .header_label{
                            font-size: 1.5rem;
                            padding-left: 1rem;
                            
                        }
                    }
                    .input{
                        // width: fit-content;
                        width: 30rem;
                        white-space: nowrap;
                        display: flex;
                        color: white;
                        font-size: 1.5rem;
                        gap: 1rem;
                        padding: .3rem 1rem;
                        border: 4px solid black;
                        input{
                            width: 1.2rem;
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