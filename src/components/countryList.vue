<script>
import Card from "../components/card";
export default {
  name: "CountryList",
  components: {
    Card,
  },
  props: {
    filtered: Array,
  },
};
</script>

<template>
  <div v-if="filtered.length" class="countries-list__cards">
    <Card
      v-for="(country, index) in filtered"
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

  <div v-else class="countries-list__loader">
    <h2>Loading...</h2>
  </div>
</template>
<style lang="scss">
.countries-list {
  &__cards {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 70px;
  }
  &__loader {
    height: calc(100vh - 320px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}

@media (max-width: 987px) and (min-width: 700px) {
  .countries-list {
    &__cards {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 70px;
    }
  }
}

@media (max-width: 1299px) and (min-width: 988px) {
  .countries-list {
    &__cards {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 15px;
    }
  }
}

@media (min-width: 1300px) {
  .countries-list {
    &__cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
