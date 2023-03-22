<template>
    <main>
        
        <div class="container">
            <div class="logo">
                <RouterLink :to="{name:'home'}">
                    SMD
                    <img src="../../public/Icon.png" alt="logo">
                </RouterLink>
            </div>
            <div class="nav">
                <RouterLink :to="{name:'home'}">Home</RouterLink>
                <RouterLink :to="{name:'about'}">About</RouterLink>
                <RouterLink :to="{name:'contact'}">Contact Us</RouterLink>
            </div>
            <div class="forum">
                <a href="#">FAQ</a>
                <a href="#">FEED BACK</a>
            </div>
        </div>
        <form action="#">
            GET DISCOUNT
            <div class="mail">
                <input type="email" placeholder="EMAIL" >
                <input type="submit" value="sent">
            </div>
        </form>
    </main>
    <p>COPY RIGHT@2023 BY SMD</p>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>

<style lang="scss" scoped>
main{
    width: 100%;
    background-image: url('../assets/img/background_highlight.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Koulen', cursive;
    @media only screen and (max-width: 800px){
      flex-direction: column;
    
      
    }
    .container{
        display: grid;
        padding: 1rem 2rem ;
        grid-template-columns: repeat(3,1fr);
        gap: 2rem;


        .logo{
            height: 100%;
            display: flex;
            align-items: center;
            a{
                display: flex;
                // flex-direction: column;
                align-items: center;
                text-decoration: none;
                color: white;
                font-size: 1.3rem;
                img{
                    width: 5rem;
                }
            }
        }
        .nav{
            display: flex;
            flex-direction: column;
            a{
                text-decoration:none;
                color: rgb(255, 255, 255);
                font-size: 1.4rem;
            }
        }
        .forum{
            height: 100%;
            display: flex;
            flex-direction: column;
            a{
                text-decoration:none;
                color: rgb(255, 255, 255);
                font-size: 1.4rem;
            }
        }
    }
    form{
        
        padding: 1rem 2rem ;
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        color: white;
        line-height:2;
        .mail{
            display: flex;
            min-width: 20rem;
            input{
                padding: 1rem .5rem;
                &[type=email]{
                    width: 100%;
                    background-color: transparent;
                    border: 2px solid black;
                    outline: none;
                    font-family: 'Koulen', cursive;
                    font-size: 1rem;
                    color: white;
                    &::placeholder{
                        color: black;
                        font-family: 'Koulen', cursive;
                        font-size: 1.2rem;
                    }
                }
                &[type=submit]{
                    padding: 0 1.5rem ;
                    border: none;
                    outline: none;
                    background-color: black;

                    font-family: 'Koulen', cursive;
                    color: white;
                    font-size: 1.3rem;
                    cursor: pointer;

                }
            }
        }
    }
}
p{
    width: 100%;
    text-align: center;
    font-family: 'Koulen', cursive;
    margin: 0;
    font-size: 1rem;
    color: white;
    background-color: #005889;
}
</style>