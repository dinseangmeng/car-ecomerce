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
                }
                ]"
                />
                <div class="content">
                    <div class="left">
                        <div class="mainImg">
                            <img src="../assets/img/car_product/ferrari.png" alt="">
                        </div>
                        <div class="subImg">
                            <div class="img">
                                <img src="../assets/img/car_product/ferrari.png" alt="">
                            </div>
                            <div class="img">
                                <img src="../assets/img/car_product/ferrari.png" alt="">
                            </div>
                            <div class="img">
                                <img src="../assets/img/car_product/ferrari.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <h1>FERRARI ROMA. RS. 3.76 CAR</h1>
                        <select placeholder="CHOOSE COLOR" >
                            <option value="RED" >RED</option>
                            <option value="BLUE"  >BLUE</option>
                            <option value="BLACK" >BLACK</option>
                            <option value="GREEN" >GREEN</option>
                        </select>
                        <select placeholder="CHOOSE TIRE" >
                            <option value="summer">Summer Tires</option>
                            <option value="winter">Winter Tires</option>
                            <option value="all-season">All-Season Tires</option>
                            <option value="performance">Performance Tires</option>
                        </select>
                        <input type="number" min="1" step="1" placeholder="Quantity">
                        <div class="btn">
                            <RouterLink :to="`/car/cart/${itemId}`" class="cart">Add to cart</RouterLink>
                            <RouterLink :to="`/car/cart/${itemId}`">Pay</RouterLink>
                        </div>
                    </div>
                </div>
                
                <div class="more">
                    <h1>Related Collection:</h1>
                    <div class="collections">
                        
                        <!-- <div id="loading" style="width: 60vw;" v-if="isCarLoading">
                            <span class="loader"></span>
                        </div>
                        <div id="empty_cat" v-if="isCatEmpty" style="width: 60vw;">
                            <img src="../assets/img/empty.png" alt="empty">
                            <h1>No Car</h1>
                        </div> -->
                        
                        <div class="card" >
                            <img src="../assets/img/car_product/ferrari.png" alt="ferrari">
                            <hr>
                            <div class="content">
                                <div class="detail">
                                    MODEL: .............
                                </div>
                                <div class="detail">
                                    TYPE: .............
                                </div>
                            </div>
                            <a href="#">MORE</a>
                        </div>
                        <div class="card" >
                            <img src="../assets/img/car_product/ferrari.png" alt="ferrari">
                            <hr>
                            <div class="content">
                                <div class="detail">
                                    MODEL: .............
                                </div>
                                <div class="detail">
                                    TYPE: .............
                                </div>
                            </div>
                            <a href="#">MORE</a>
                        </div>
                        <div class="card" >
                            <img src="../assets/img/car_product/ferrari.png" alt="ferrari">
                            <hr>
                            <div class="content">
                                <div class="detail">
                                    MODEL: .............
                                </div>
                                <div class="detail">
                                    TYPE: .............
                                </div>
                            </div>
                            <a href="#">MORE</a>
                        </div>
                        <div class="card" >
                            <img src="../assets/img/car_product/ferrari.png" alt="ferrari">
                            <hr>
                            <div class="content">
                                <div class="detail">
                                    MODEL: .............
                                </div>
                                <div class="detail">
                                    TYPE: .............
                                </div>
                            </div>
                            <a href="#">MORE</a>
                        </div>
                        <div class="card" >
                            <img src="../assets/img/car_product/ferrari.png" alt="ferrari">
                            <hr>
                            <div class="content">
                                <div class="detail">
                                    MODEL: .............
                                </div>
                                <div class="detail">
                                    TYPE: .............
                                </div>
                            </div>
                            <a href="#">MORE</a>
                        </div>
                        <div class="card" >
                            <img src="../assets/img/car_product/ferrari.png" alt="ferrari">
                            <hr>
                            <div class="content">
                                <div class="detail">
                                    MODEL: .............
                                </div>
                                <div class="detail">
                                    TYPE: .............
                                </div>
                            </div>
                            <a href="#">MORE</a>
                        </div>
                        <div class="card" >
                            <img src="../assets/img/car_product/ferrari.png" alt="ferrari">
                            <hr>
                            <div class="content">
                                <div class="detail">
                                    MODEL: .............
                                </div>
                                <div class="detail">
                                    TYPE: .............
                                </div>
                            </div>
                            <a href="#">MORE</a>
                        </div>
                        <div class="card" >
                            <img src="../assets/img/car_product/ferrari.png" alt="ferrari">
                            <hr>
                            <div class="content">
                                <div class="detail">
                                    MODEL: .............
                                </div>
                                <div class="detail">
                                    TYPE: .............
                                </div>
                            </div>
                            <a href="#">MORE</a>
                        </div>
                        
                    </div>
                </div>
            </main>
            
        </div>
        <br>
        <h1 class="hightlight">Checkout Collection</h1>
        <br>
        <br>
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
.hightlight{
    text-align: center;
    padding: .5rem;
    background-color: #0d7ce4;
    font-size: 1.5rem;
    color: white;
}
#container{
    width: 100%;
    // min-height: 80vh;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem ;
    .main{
        width: 90%;
        height: 100%;
        display: flex;
        gap: 2rem;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        .content{
            width: 100%;
            display: flex;
            &>div{
                width: 100%;
            }
            .left{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                .mainImg{
                    padding: 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 2px solid black;
                    img{
                        width: 80%;
                    }
                }
                .subImg{
                    display: flex;
                    .img{
                        width: 10rem;
                        // aspect-ratio: 1/1;
                        // padding: 1rem;
                        border: 2px solid black;
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 100%;
                        }
                    }
                }
            }
            .right{
                height: 100%;
                display: flex;
                padding: 1rem;
                flex-direction: column;
                // justify-content: center;
                align-items: center;
                gap: 1rem;
                select{
                    width: 50%;
                    background-color: black;
                    color: white;
                    border: none;
                    outline: none;
                    font-size: 1.3rem;
                    padding: .1rem 4rem;
                    border-radius: .3rem;
                    transition: 300ms;
                    cursor: pointer;
                    &:hover{
                        background-color: white;
                        color: black;
                    }
                    option{
                        border-bottom: 2px solid black;
                    }
                }
                input{
                    width: 49%;
                    background-color: black;
                    color: white;
                    border: none;
                    outline: none;
                    background-color: transparent;
                    box-shadow: 0 0 0 2px black;
                    font-size: 1.3rem;
                    padding: .3rem 2rem;
                    border-radius: .3rem;
                    transition: 300ms;
                    &::placeholder{
                        color: white;
                    }
                    &:focus{
                        box-shadow: 0 0 0 2px rgb(255, 255, 255); 
                    }
                    
                }
                .btn{
                    width: 53%;
                    display: flex;
                    justify-content: space-between;
                    a{
                        padding: .2rem 1.2rem;
                        font-size: 1.5rem;
                        border: none;
                        outline: none;
                        border-radius: .2rem;
                        background-color: black;
                        color: white;
                        &.cart{
                            background-color: rgb(0, 111, 208);
                        }
                    }
                }
            }
        }
        .more{
            h1{
                color: white;
            }
            .collections{
                width: 100%;
                min-height: max-content;
                
                border-radius: .4rem;
                gap: 2rem;
                display: grid;
                --repeat:4;
                grid-template-columns: repeat(var(--repeat),1fr);
                @media only screen and (max-width: 800px){
                    --repeat:2;
                }
                @media only screen and (max-width: 600px){
                    --repeat:1;
                }
                &> .card{
                    border-radius: .4rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: #2d4654;
                    padding: .7rem;
                    color: white;
                    &> *{
                        height: 100%;
                    }
                    img{
                        width: 100%;
                        object-fit: scale-down;
                    }
                    hr{
                        width: 100%;
                        height: 1rem;
                        background-color: black;
                        border-radius: 99px;
                        border: none;
                    }
                    .content{
                        width: 100%;
                        font-size: 1.4rem;
                        display: flex;
                        flex-direction: column;
                    }
                    a{
                        text-align: center;
                        text-decoration: none;
                        height: fit-content;
                        width: 100%;
                        background-color: black;
                        color: white;
                        border-radius: .4rem;
                        margin: 0;
                        font-size: 1.2rem;
                        padding: .5rem 0;
                    }
                }
            }
        }
    }
}
</style>