<template>
      <div className="country-card">
      <div className="country-card-container">
        <img  alt="product-image" 
        :src="img" />
        <div className="card-text-content">
          <h2>{{country.substring(0, 17)}}</h2>
          <h3>
            Population:
            <span className="style-italic">
              {{numberWithCommas}}
            </span>
          </h3>
          <h3>
            Region: <span className="style-italic">{{region}}</span>
          </h3>
          <h3>
            Capital: <span className="style-italic" v-for="city in capital" :key="city">{{city}}</span>
          </h3>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    img: String,
    population:Number,
    country:String,
    region:String,
    capital : Array
  },

  computed:{
numberWithCommas(){
    return this.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  }
}
</script>


<style scoped>
.country-card{
   
    height: 400px;
    box-shadow:rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 5px;

}
    .card-text-content{
        padding: 15px 30px;
               
    }
    .country-card-container img{
        
            width: 100%;
            height: 190px;
            border-radius: 5px;
       
    }
@media (max-width: 700px) and (min-width: 320px)  {

.country-card{
  width: 80%;
    margin: auto;
    border-radius: 5px;
}
.country-card-container img{
   border-radius: 5px 5px 0 0;
}
}
</style>
