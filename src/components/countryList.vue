

<script>
import Card from "../components/card";
export default {
  name: 'CountryList',
components:{
  Card
},
 props: {
    countries: Array
  },
}
</script>

<template>
    <div v-if="countries.length" class="countries-list-container">
      <Card 
v-for="(country, index ) in countries" 
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

      <div v-else class="on-loading-container">
        <h2>Loading...</h2>
      </div>

</template>
<style>
.countries-list-container{

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 70px;

}
.on-loading-container{
height: calc(100vh - 320px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
}

@media (max-width: 987px) and (min-width: 700px)  {
    .countries-list-container{
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;

}
}

@media (max-width: 1299px) and (min-width: 988px)  {
    .countries-list-container{
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

}
}

@media (min-width:1300px){
.countries-list-container{
  grid-template-columns: repeat(4, 1fr);
}
}
</style>