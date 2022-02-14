<template>
  <div class="card-container">
      <img 
        class="card__img"
        style="height:80px; width:auto"
        alt="product-image" 
        :src="img"
      >
      <p>{{country}}</p>
      <p>{{population}}</p>
      <p>{{region}}</p>
<p v-for="city in capital" :key="city">
{{city}}
 </p>
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
  }
}
</script>
=

<style scoped>
card-container {
 width:300px;
 height:500px;
 background:yellow
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
