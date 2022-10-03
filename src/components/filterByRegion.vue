<script>
export default {
  name: "filterByRegion",
  methods: {
    onChange(e) {
      const filteredRegion = e.target.value;
      this.$emit("selectedRegion", filteredRegion);
    },
  },
};
</script>

<template>
  <div>
    <select className="select-filter" @change="onChange($event)">
      <option value="all regions">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </div>
</template>
<style scoped>
.select-filter {
  height: 50px;
  width: 200px;
  background-color: hsl(0, 0%, 100%);
  color: #3f3f3f;
}
.select-filter option {
  font-weight: 600;
}

@media (min-width: 890px) {
  .select-filter {
    width: 240px;
    padding: 4px 10px;
  }
}
</style>
