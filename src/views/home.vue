

<script>
import CountryList from "../components/countryList"
import SearchBar from "../components/searchbar";
import filterByRegion from "../components/filterByRegion";
export default {
  name: 'Home',
components:{
  SearchBar, 
  filterByRegion, 
  CountryList
},
  data(){
    return{
countries: [],
searchedCountry:null,
region: '',
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
      this.countries = data;
    },
  
   onSearch (value) {
      this.searchedCountry = value
    },
    onSelect(value){
      console.log("Region papa",value)
      this.region = value
    }
},
computed: {
  filtered() {
    if(this.searchedCountry){
    return this.countries.filter(item => {
          return this.searchedCountry
            .toLowerCase()
            .split(" ")
            .every(c => item.name.common.toLowerCase().includes(c));
        });
    
    }else if(this.region !== '' || this.region !== 'all regions'){
   return this.countries.filter(item => {
          return this.region
            .toLowerCase()
            .split(" ")
            .every(r => item.region.toLowerCase().match(r));
        });
    } 
   return this.countries;
  }
}
}

</script>

<template>
<div class="home-cards-container">

      <div className="researches-container">
          <SearchBar  v-on:updateBySearch="onSearch" />
         <filterByRegion @selectedRegion="onSelect($event)"/>
      </div>
<CountryList :filtered="filtered"/>
</div>


</template>
<style>
body{
    font-size:14px;
}
.home-cards-container{
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  margin:40px;

}

.home-container{
  height: calc(100% - 64px);
  padding: 0 4px;
  background-color: var(--background)
}

.researches-container{
    height: 160px;
    display: block;
    justify-content: space-between;
    align-items: center;
    margin: 28px 20px 0 20px;
    >.searchInput, > div select{
        border-radius: 5px;
            box-shadow:rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
}
@media (min-width:890px){
.home-container{
  padding: 0 40px;
}
.researches-container{
         width: 100%;
         height: 120px;
         display: flex;
         justify-content: space-between;
         margin: 0;
}
}
</style>


