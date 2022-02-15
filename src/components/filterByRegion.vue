

<script>
export default {
  name: 'filterByRegion',

}
</script>

<template>
    <div>
      <select
        className="select-filter"
  
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
</template>
<style scoped>
.select-filter{
    height: 50px;
    width: 200px;
    background-color: var(--element);
    color: var(--color);
  
}
.select-filter option{
        font-weight: 600;
      }

@media (min-width:890px){
.select-filter{
    width: 240px;
    padding: 4px 10px;
}
}
</style>