

<script>
import Card from "../components/card";
import Header from "../components/header";
export default {
  name: 'Home',
components:{
  Card,
  Header
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
<Header/>
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
  margin:40px;

}
</style>


