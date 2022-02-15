

<script>
export default {
  name: 'CardDetails',
components:{
},
  data(){
    return{
allCoutries: []
  }

},
methods: {
goBack(){
    this.$router.push("./home")
}
    }
}
</script>

<template>
<Header/>
<div>



    <div class="go-back-container">
     <button class="go-back-button" @click.prevent="goBack()">
               <font-awesome-icon icon="arrow-left" color="gray" /> 
              <span class="go-back-button-text">Back</span>
            </button>
         
        </div>






<h1>Card details</h1>
</div>

</template>


<style>

.go-back-container{
    display: flex;
flex-direction: column;
justify-content: center;
height: 180px;
width: 100%;

 
}
   .go-back-button{
    width: 130px;
    height: 40px;
    border-radius: 4px;
    color:var(--text);
    box-shadow: rgb(60 64 67 / 15%) 0px 2px 6px 2px;
    background-color: var(--element);
    border: none;
    font-weight: 600;
    cursor: pointer;
  
}
  .go-back-button-text{
        padding-left: 10px;
        font-weight: 600;
        font-size: 16px;
    }

    @media (max-width: 514px) and (min-width: 350px)  {

.go-back-container{

height: 80px;
}
.card-details-items{
  display: block;

}  
.card-details-items-img{
            height: 200px;
     
}

.card-details-items-img img{
        margin: 0;
            height: 100%;
            width: 100%;
        }   
}

</style>