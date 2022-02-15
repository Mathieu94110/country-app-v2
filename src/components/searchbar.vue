

<script>
export default {
  name: 'SearchBar',
 data() {
    return {
      keyword: "",
    }
  },
    methods:{
    // eslint-disable-next-line no-unused-vars
    passSearchedValue(event) {
    this.$emit('updateBySearch', this.keyword)
  }
  
}
}
</script>

<template>
    <div className="search-input">
      <font-awesome-icon icon="search" color="gray" /> 
      <input
        type="text"
        name="country"
        placeholder="Search for a country"
        v-model="keyword"
        v-on:keyup="passSearchedValue"
      />
    </div>
</template>
<style scoped>

.search-input{
display: flex;
align-items: center;
background-color: hsl(0, 0%, 100%);
width: 310px;
padding: 5px 5px 5px 20px;
gap: 5px;
height: 40px;
margin-bottom: 30px;
}

.search-input input{
border: 0;
background-color: hsl(0, 0%, 100%);
outline: none;
font-size: 12px;
height: 100%;
width: 100%;
padding-left: 10px;


}

::placeholder {
  color: var(--text);
}

@media (min-width:890px){
 .search-input{
width: 460px;
margin:0
}
.search-input input{
font-size: 16px;
}
}
</style>