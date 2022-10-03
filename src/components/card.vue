<template>
  <div class="country-card">
    <router-link to="/details">
      <div class="country-card__container">
        <img alt="product-image" :src="img" />
        <div class="country-card__text-content">
          <h2>{{ country.substring(0, 17) }}</h2>
          <h3>
            Population:
            <span>
              {{ numberWithCommas }}
            </span>
          </h3>
          <h3>
            Region: <span>{{ region }}</span>
          </h3>
          <h3>
            Capital:
            <span v-for="city in capital" :key="city">{{ city }}</span>
          </h3>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    img: String,
    population: Number,
    country: String,
    region: String,
    capital: Array,
  },

  computed: {
    numberWithCommas() {
      return this.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="scss" scoped>
h2,
h3 {
  color: var(--switch-color);
}
h2 {
  margin: 20px 0;
}
.country-card {
  height: 400px;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
  border: 1px solid var(--switch-color);
  &__container img {
    width: 100%;
    height: 190px;
    border-radius: 5px;
  }
  &__text-content {
    padding: 15px 30px;
  }
}
@media (max-width: 700px) and (min-width: 320px) {
  .country-card {
    width: 80%;
    margin: auto;
    border-radius: 5px;
    background-color: var(--background-color-secondary);

    &__container img {
      border-radius: 5px 5px 0 0;
    }
  }
}
</style>
