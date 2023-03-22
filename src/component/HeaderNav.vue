<template>
    <nav>
        <main :style="{'--font-color':color , '--HightLight-color':HightLight}">
            <div class="logo">
                <RouterLink :to="{name:'home'}">
                    <img src="../../public/Icon.png" alt="logo">
                    SMD
                </RouterLink>
            </div>
            <div class="menu">
                <div class="nav_link">
                    <RouterLink :to="{name:'home'}">Home</RouterLink>
                    <RouterLink :to="{name:'collection'}">Collection</RouterLink>
                    <RouterLink :to="{name:'about'}">About</RouterLink>
                    <RouterLink :to="{name:'contact'}">Contact Us</RouterLink>
                    
                </div>
                
                <div class="cart" :style="{'--cartPending':`'${store.state.cartPender}'`}" @click="plus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                </div>
            </div>
        </main>
    </nav>
    
</template>

<script setup>
import store from '../store';
import {RouterLink} from 'vue-router'
import { defineProps } from 'vue';
const plus=()=>{
    store.commit('increment',1)
}

const prop=defineProps({
    color:{
        default: "#ffffff",
        type: String
    },
    HightLight:{
        default: "rgba(202, 202, 202,.7)",
        type: String
    }
})
</script>

<style lang="scss" scoped>
nav{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    main{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Koulen', cursive;
        @media only screen and (max-width: 800px){
            flex-direction: column;
            
            
        }
        @media only screen and (max-width: 500px){
        width: 90%;
            
        }
        .logo{
            a{
                display: flex;
                flex-direction: column;
                align-items: center;
                text-decoration: none;
                color: var(--font-color);
                font-size: 1.3rem;
                img{
                    width: 5rem;
                }
            }
        }
        .menu{
            width: 100%;
            display: flex;
            align-items: center;
            gap: 4rem;
            @media only screen and (max-width: 800px){
                gap: 1rem;
                
                
            }
            
            .nav_link{
                width: 100%;
                a{
                    font-size: 1.7rem;
                    text-decoration: none;
                    color: var(--font-color);
                    padding: .3rem .6rem;
                    transition: 300ms;
                    &:hover{
                        background-color: var(--HightLight-color);
                    }
                    @media only screen and (max-width: 600px){
                        padding: .1rem .4rem;
                        font-size: 1.4rem;
                        
                    }
                    @media only screen and (max-width: 500px){
                        padding: .1rem .4rem;
                        font-size: 1rem;
                        
                    }
                    
                    &.router-link-exact-active{
                        background-color:  var(--HightLight-color);
                    }
                }
            }
            .cart{
                position: relative;
                svg{
                    --size:2rem;
                    width: var(--size);
                    height: var(--size);
                    // position: relative;
                    
                }
                &::before{
                    content:var(--cartPending);
                    aspect-ratio: 1/1;
                    padding: .01rem .4rem;
                    border-radius: 50%;
                    color:var(--font-color);
                    background-color: #222222;
                    position: absolute;
                    font-size: small;
                    top: -1.2rem;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
    }
}
</style>