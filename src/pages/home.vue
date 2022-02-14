

<script>
import Card from "../components/card"
export default {
  name: 'Home',
components:{
  Card
},
  data(){
    return{
allCoutries: []
  }

},
  beforeMount(){
    this.getCountries();
  },

methods: {
   async getCountries(){
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      console.log(data)
      this.allCoutries = data;
    }
}
}
</script>

<template>
<h1>HomePage</h1>


<div class="home-cards-container">
<Card 
v-for="(country, index ) in allCoutries" 
:index="index"
:img="country.flags.png"
:key="country.name.common"
:country="country.name.common"
:population="country.population"
:region="country.region"
:capital="country.capital || undefined"
>
</Card>
</div>


</template>
<style>
.home-cards-container{
  display:flex;
  justify-content:space-evenly;
  flex-wrap:wrap;

}
</style>


