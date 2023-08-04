<template>
    <defaultLayout>

        <main>
    
          <form action="#" @submit.prevent="sent" >
            <fieldset>
              <div class="title">
                Contact Form:
              </div>
              <div class="inputs"> 
                <div class="left">
                  <div class="upper">
      
                  <!-- if Khmer mode -->
      
                    
                    <!-- if English mode -->
      
      
                    <div class="input"  > <!--Lastname-->
                      <label for="firstname">First name &nbsp; :
                        </label>
                      <input type="text" id="firstname" placeholder="Firstname" required>
                    </div>
      
      
      
      
      
    
                    
      
      
      
        
                    <div class="input">
                      <label for="lastname">Lastname &nbsp; :</label>
                      <input type="text" id="lastname" placeholder="Lastname"  required>
                    </div>
      
        
      
      
      
      
      
                    <div class="input"> <!--Email-->
                      <label for="email">Email &nbsp;:
                        &nbsp; 
                        
                        &nbsp;</label>
                      <input type="email" id="email" placeholder="Email" >
                    </div>
      
      
                    <div class="input"> <!--Subject-->
                      <label for="subject">Subject &nbsp;:</label>
                      <input type="text" id="subject" placeholder="Subject" required>
                    </div>
                  </div>
      
                  <div class="down"> <!--Message-->
                    <label for="msg">Message &nbsp; :</label>
                    <textarea  id="msg" cols="30" rows="10" placeholder="Message"  required></textarea>
                  </div>
                </div>
                <div class="right">
                  <input type="submit" :value="Submit">
                </div>
              </div>
            </fieldset>
          </form>
        </main>
    </defaultLayout>
  </template>
  
  <script setup>
  import defaultLayout from '../layout/default.vue';
  </script>
  
  <style lang="scss" scoped>
  main{
    font-family: 'Koulen', cursive;
    width: 100%;
    min-height: 90;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    form{
      width: 80%;
      fieldset{
        border: 2px solid black;
        border-radius: .3rem;
        display: flex;
        justify-content: center;
        align-items:flex-end;
        flex-direction: column;
        padding: 1rem 0;
        color: white;
        .title{
          font-size: 2rem;
          width: 90%;
          
        }
        .inputs{
          width: 85%;
          display: flex;
          height: 100%;
          padding: 1rem 2rem;
          justify-content: flex-end;
          // grid-template-columns: repeat(2,1fr);
          gap: 1.5rem;
          &>div{
            width: 100%;
            
          }
          @media only screen and (max-width: 1050px){
            flex-direction: column;
          }
          @media only screen and (max-width: 600px){
            width: 100%;
            justify-content: center;
          }
          input{
            border: 2px solid black;
            outline: none;
            
          }
          .left{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            &>div{
              width: 100%;
            }
            .upper{
              display: grid;
              grid-template-columns: repeat(2,1fr);
              gap: 2rem;
              @media only screen and (max-width: 700px){
                grid-template-columns: repeat(1,1fr);
              }
              .input{
                display: flex;
                flex-direction: column;
                
                label{
                  font-size: 1.1rem;
                }
                input{
                  padding: .7rem 1rem;
                  border-radius: .2rem;
                }
              }
              
            }
            
          }
          .down{
            display: flex;
            flex-direction: column;
            textarea{
              width: 100%;
              border: 2px solid black;
              padding: .7rem 1rem;
            }
          }
          .right{
            width: fit-content;
            min-height: 100%;
            display: flex;
            justify-content: flex-end;
            @media only screen and (max-width: 1050px){
              width: 100%;
              justify-content: center;
            }
            input{
              min-width: 100%;
              height: 100%;
              text-align: center;
              font-size: 1.3rem;
              background-color: #dff1fe;
              padding: 1rem 3rem;
              border-radius: .3rem;
              color: rgb(0, 0, 0);
              cursor: pointer;
              @media only screen and (max-width: 1050px){
                width: 100%;
                
              }
            }
          }
        }
      }
    }
  }
  </style>