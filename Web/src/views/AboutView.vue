<template>
  <defaultLayout>
    <main>
      
      
      <section id="first">
        <h1>UPGRADE YOUR RIDE. ORDER NOW</h1>
        <h2>UPGRADE YOUR RIDE WITH OUR CUSTOM DESIGNS. STAND OUT ON THE ROAD. ORDER NOW!</h2>
        <button>LINK WITH US</button>
      </section>
      
      <section id="second">
        <div class="card">
          <userIcon/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ornare ligula. Pellentesque neque nulla, ultricies eleifend mollis vel, scelerisque eu purus. Quisque cursus et orci sed vehicula. Donec at turpis leo.
        </div>
        <div class="card">
          <userIcon/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ornare ligula. Pellentesque neque nulla, ultricies eleifend mollis vel, scelerisque eu purus. Quisque cursus et orci sed vehicula. Donec at turpis leo.
        </div>
        <div class="card">
          <userIcon/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ornare ligula. Pellentesque neque nulla, ultricies eleifend mollis vel, scelerisque eu purus. Quisque cursus et orci sed vehicula. Donec at turpis leo.
        </div>
      </section>
      
      <div class="promote">
        <section >
          <div>
            <h1>THE ULTIMATE PERFORMANCE SOLUTION</h1>
            <p> Designed with cutting-edge technology and premium materials, XDrive is engineered to provide maximum performance and comfort. Our team of experts works tirelessly to ensure that every aspect of your driving experience is optimized for the best possible results.</p></div>
            <div class=" normal"><img src="../assets/img/performentIcon.png" alt=""></div>
          </section>
          <section  id="reverse">
            <div class=" reverse"><img src="../assets/img/customIcon.png" alt=""></div>
            <div>
              <h1>THE ULTIMATE PERFORMANCE SOLUTION</h1>
              <p> Designed with cutting-edge technology and premium materials, XDrive is engineered to provide maximum performance and comfort. Our team of experts works tirelessly to ensure that every aspect of your driving experience is optimized for the best possible results.</p></div>
            </section>
          </div>
          <br>
          <div class="collaborate">
            <img src="../assets/img/car_logo/Hyundai.gif" alt="hyundia">
            <img src="../assets/img/car_logo/BMW-Logo.png" alt="BMW">
            <img src="../assets/img/car_logo/toyota.png" alt="toyota">
            <img src="../assets/img/car_logo/tesla.png" alt="tesla">
            <img src="../assets/img/car_logo/Bugatti-Logo-1909.png" alt="bugatti">
          </div>
        </main>
        <br><br>
      </defaultLayout>
    </template>
    
    <script setup>
    import defaultLayout from '../layout/default.vue';
    import userIcon from '../component/icon/userIcon.vue'
  </script>
  
  <style lang="scss" scoped>
  main{
    width: 100%;
    display: flex;
    flex-direction: column;
    #first{
      min-height: 40vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.2rem;
      h1,h2{
        color: white;
      }
      h1{
        font-size: 3rem;
      }
      h2{
        font-size: 2rem;
      }
      button{
        width: 30%;
        font-size: 1.7rem;
        padding: .4rem 1rem;
        border-radius: .4rem;
        color: white;
        background-color: black;
        border: none;
        outline: none;
        transition: 500ms;
        &:hover{
          background-color: white;
          color: black;
        }
      }
    }
    #second{
      width: 100%;
      gap: 2rem;
      background-color: #005889;
      display: flex;
      justify-content: space-around;
      padding: 5rem;
      .card{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        color: white;
        border: none;
        &:nth-child(2){
          margin-top: -10rem;
        }
        svg{
          width: 10rem;
        }
        text-align: center;
      }
    }
    .promote{
      background-color: #1b3746;
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      section{
        width: 100%;
        min-height:35vh ;
        background-image: url("../assets/img/background_highlight.png");
        &#reverse{
          background-image: url("../assets/img/background_highlight_reverse.png");
        }
        background-position: center;
        background-size: cover;
        display: flex;
        align-items: center;
        
        color: white;
        &>div{
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          h1{
            padding-left: 1rem;
          }
          p{
            font-size: 1.5rem;
            padding-left: 3rem;
          }
          img{
            width: 35%;
          }
          &.normal{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          &.reverse{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
        }
        
      }
      
    }
    .collaborate{
      width: 100%;
      overflow: hidden;
      // margin-top: .4rem;
      height: 4rem;
      background-color: #005889;
      display: flex;
      justify-content: center;
      padding: .6rem 0;
      gap: 1rem;
      img{
        height: 100%;
        object-fit: scale-down;
        @media only screen and (max-width: 600px){
          height: unset;
          width: 100%;
          
        }
      }
    }
  }
</style>