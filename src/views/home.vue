<script>
import CountryList from "../components/countryList";
import SearchBar from "../components/searchbar";
import filterByRegion from "../components/filterByRegion";
import { baseUrl } from "../api/api-calls";

export default {
  name: "Home",
  components: {
    SearchBar,
    filterByRegion,
    CountryList,
  },
  data() {
    return {
      countries: [],
      searchedCountry: null,
      region: "",
      countryDetails: {},
    };
  },

  beforeMount() {
    this.getCountries();
  },

  methods: {
    async getCountries() {
      const res = await fetch(`${baseUrl}/all`);
      const data = await res.json();
      this.countries = data;
    },

    onSearch(value) {
      this.searchedCountry = value;
    },
    onSelect(value) {
      this.region = value;
    },
  },
  computed: {
    filtered() {
      if (this.searchedCountry) {
        return this.countries.filter((item) => {
          return this.searchedCountry
            .toLowerCase()
            .split(" ")
            .every((c) => item.name.common.toLowerCase().includes(c));
        });
      } else if (this.region !== "" || this.region !== "all regions") {
        return this.countries.filter((item) => {
          return this.region
            .toLowerCase()
            .split(" ")
            .every((r) => item.region.toLowerCase().match(r));
        });
      }
      console.log(this.countries);
      return this.countries;
    },
  },
};
</script>

<template>
  <div class="home">
    <div className="home__researches-container">
      <SearchBar v-on:updateBySearch="onSearch" />
      <filterByRegion @selectedRegion="onSelect($event)" />
    </div>
    <CountryList :filtered="filtered" />
  </div>
</template>
<style lang="scss">
body {
  font-size: 14px;
}
.home {
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin: 40px;

  &__researches-container {
    width: 100%;
    height: 160px;
    display: block;
    justify-content: space-between;
    align-items: center;
    > .searchInput,
    > div select {
      box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
  }
}

@media (min-width: 890px) {
  .home {
    justify-content: space-between;
    &__researches-container {
      height: 120px;
      display: flex;
      justify-content: space-between;
      > .searchInput,
      > div select {
        border-radius: 5px;
      }
    }
  }
}
</style>
