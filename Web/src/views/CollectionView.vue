<template>
  <defaultLayout>
    <main>
      <div id="slide">
        <Carousel style="width:100%" pauseAutoplayOnHover="true" autoplay="1000" ref="myCarousel">
          <slide  key="1">
            <div class="slide_item">
              <h1>Trending car</h1>
              <div class="text">
                <h2>Unknow</h2>
                <h2>Type Old school</h2>
                
              </div>
              <img src="../assets/img/car_product/old_school.png" alt="ferrari">
            </div>
          </slide>
          <slide  key="2">
            <div class="slide_item">
              <h1>Trending car</h1>
              <div class="text">
                <h2>foruner</h2>
                <h2>Type sportcar</h2>
                
              </div>
              <img src="../assets/img/car_product/fortuner.png" alt="foruner">
            </div>
          </slide>
          <slide  key="3">
            <div class="slide_item">
              <h1>Trending car</h1>
              <div class="text">
                <h2>FERRARI</h2>
                <h2>Type sportcar</h2>
                
              </div>
              <img src="../assets/img/car_product/ferrari.png" alt="ferrari">
            </div>
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </Carousel>
        
      </div>
      <div class="promotion">
        <h1>upgrade your ride  with SMD. 20%  OFF LIMITED TIME OFFER. ORDER NOW</h1>
      </div>
      <div class="mini_collection">
        <div class="left_cat">
          <div class="sub">
            <div id="loading" v-if="isCatLoading">
              <span class="loader"></span>
            </div>
            <div id="empty_cat" v-if="isCatEmpty">
              <img src="../assets/img/empty.png" alt="empty">
              <h1>No Category</h1>
            </div>
            <div class="category" v-for="item in carCategory" v-if="!isCatLoading&&!isCatEmpty">
              <img :src="item.imagePath" alt="pickup">
              {{ item.name }}
            </div>
            
          </div>
          <div class="search">
            <input type="search" placeholder="FIND YOUR DREAM CAR">
            <button>Search</button>
          </div>
        </div>
        <div class="collections">
          
          <div id="loading" style="width: 60vw;" v-if="isCarLoading">
            <span class="loader"></span>
          </div>
          <div id="empty_cat" v-if="isCatEmpty" style="width: 60vw;">
            <img src="../assets/img/empty.png" alt="empty">
            <h1>No Car</h1>
          </div>
          
          <div class="card" v-if="!isCarLoading&&!isCarEmpty" v-for="item in car">
            <img :src="item?.imagePath" :alt="item?.name">
            <hr>
            <div class="content">
              <div class="detail">
                MODEL: {{ item?.model }}
              </div>
              <div class="detail">
                TYPE: {{ item?.type?.name }}
              </div>
            </div>
            <RouterLink :to="`/car/${item?.id}`">MORE</RouterLink>
          </div>
          
        </div>
      </div>
    </main>
    
  </defaultLayout>
</template>

<script setup>
import {ref,onMounted} from "vue"
import {RouterLink} from 'vue-router'
import axios from 'axios'
import defaultLayout from '../layout/default.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const myCarousel = ref(null);
const isCatLoading=ref(true)
const isCarLoading=ref(true)
const carCategory=ref([])
const car=ref([])
const isCatEmpty=ref(false)
const isCarEmpty=ref(false)
axios.get(`${process.env.API_URL}/car-type`).then(
res=>{
  carCategory.value=res.data.car_model
  if(carCategory.value.length<=0){
    isCatEmpty.value=true
  }
  isCatLoading.value=false
}

)
axios.get(`${process.env.API_URL}/cars`).then(
res=>{
  car.value=res.data.cars
  if(car.value.length<=0){
    isCarEmpty.value=true
  }
  isCarLoading.value=false
}
)


</script>

<style lang="scss" scoped>


.slide_item{
  width: 100%;
  background-image: url('../assets/img/background_highlight.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  padding: 3rem 10rem;
  justify-content: space-between;
  h1{
    color: white;
  }
  .text{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    transform: translateX(50%) translateY(-10%);
    h2{
      z-index: 999;
      color: white;
    }
  }
}

main{
  width: 100%;
  background-color: #1b3746;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-bottom: 4rem;
  gap: 1rem;
  // overflow-x: hidden;
  #carouselExampleIndicators{
    width: 100%;
  }
  #slide{
    width: 100%;
    
  }
  .layer1{
    width: 100%;
    overflow: hidden;
    // min-height: 100vh;
    padding-bottom: 3rem;
    background-image: url('../assets/img/background_highlight.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .container{
      width: 100%;
      display: flex;
      justify-content: space-between;
      
      // justify-content: center;
      align-items: center;
      @media only screen and (max-width: 1350px){
        flex-direction: column;
        
      }
      .col1{
        width: 100%;
        height: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        gap: 6rem;
        padding-left: 6rem;
        // gap: 1rem;
        @media only screen and (max-width: 1350px){
          padding-left: 0;
          
        }
        font-family: 'Koulen', cursive;
        .text{
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: 'Koulen', cursive;
          .text-l{
            text-align: right;
            
            
          }
          .text-c{
            color: #0d7ce4;
            font-size: 2rem;
            transform: translateY(20%);
            @media only screen and (max-width: 600px){
              font-size: 1rem;
              
            }
          }
          .text-l , .text-r{
            color: #2998d6;
            h1{
              font-size:3rem;
              @media only screen and (max-width: 600px){
                font-size: 2rem;
                
              }
              @media only screen and (max-width: 500px){
                font-size: 1.7rem;
                
              }
            }
            p{
              font-size: 1rem;
              @media only screen and (max-width: 600px){
                font-size: .7rem;
                
              }
              
            }
            line-height: 1;
          }
        }
        &> a{
          color: white;
          text-decoration: none;
          font-size: 1.4rem;
          padding: .6rem .8rem;
          background-color: #000000;
          border-radius: .5rem;
          transition: 250ms;
          z-index: 100;
          &:hover{
            background-color: #000000b1;
          }
        }
        
      }
      .col2{
        width: 100%;
        flex: 0;
        img{
          transform: rotateY(180deg);
          scale: 1.3;
          
        }
      }
    }
  }
  .promotion{
    width: 100%;
    overflow: hidden;
    margin-top: .4rem;
    height: 4rem;
    background-color: #005889;
    display: flex;
    justify-content: center;
    padding: .6rem 0;
    gap: 1rem;
    h1{
      font-size: 2rem;
      text-transform: uppercase;
      color: white;
    }
    
  }
  .mini_collection{
    // margin-top: 0;
    min-width: 80%;
    height: fit-content;
    display: flex;
    // flex-direction: column;
    
    overflow: hidden;
    gap:2rem;
    background-color: #1b3746;
    font-family: 'Koulen', cursive;
    padding: 1rem 4rem;
    padding-bottom: 4rem;
    color:white;
    font-size: 1.5rem;
    @media only screen and (max-width: 1000px){
      flex-direction: column;
      align-items: center;
      
    }
    @media only screen and (max-width: 600px){
      width: 100%;
      
    }
    .left_cat{
      width: fit-content;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .sub{
        
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        padding: 1.6rem ;
        background-color: #2d4654;
        gap: .7rem;
        border-radius: .4rem;
        height: fit-content;
        @media only screen and (max-width: 1000px){
          // justify-content: flex-start;
          width: 100%;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
        }
        @media only screen and (max-width: 600px){
          justify-content: flex-start;
          padding: unset;
          
        }
        .category{
          display: flex;
          width: max-content;
          align-items: center;
          position: relative;
          gap: .5rem;
          transition: 500ms;
          @media only screen and (max-width: 1000px){
            width: 25%;
          }
          @media only screen and (max-width: 800px){
            width: 40%;
          }
          @media only screen and (max-width: 600px){
            width: 50%;
          }
          cursor: pointer;
          img{
            width: 5rem;
          }
          &.active{
            &::after{
              width: 100%;
            }
          }
          &::after{
            content: "";
            transition: 250ms;
            width: 0;
            height: 3px;
            background-color: rgb(255, 255, 255);
            border-radius: 99px;
            position: absolute;
            bottom: 0;
            left: 0;
            
          }
          &:hover{
            &::after{
              width: 100%;
            }
          }
        }
      }
      .search{
        max-width: 100%;
        border-radius: .2rem;
        overflow: hidden;
        display: flex;
        border: 2px solid black;
        input{
          width: 100%;
          border: none;
          outline: none;
          padding: .2rem 1rem;
          background-color: transparent;
          caret-color: white;
          color: white;
          // padding: 0 1rem;
          &::placeholder{
            font-size: 1rem;
            
          }
        }
        button{
          // padding: .1rem 0;
          width: fit-content;
          border: none;
          outline: none;
          padding: 0 .4rem;
          background-color: black;
          color: white;
        }
      }
    }
    .collections{
      width: 100%;
      min-height: max-content;
      
      border-radius: .4rem;
      gap: 2rem;
      display: grid;
      --repeat:3;
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
        }
      }
    }
  }
  &>a{
    width: 75%;
    background-color:#005889;
    text-align: center;
    color: rgb(255, 255, 255);
    padding: .4rem 0;
    font-family: 'Koulen', cursive;
    text-decoration: none;
    font-size: 1.6rem;
    
    border-radius: .4rem;
  }
}
</style>