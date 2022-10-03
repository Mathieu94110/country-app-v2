<script>
export default {
  name: "CardDetails",
  components: {},
  data() {
    return {
      allCoutries: [],
    };
  },
  methods: {
    goBack() {
      this.$router.push("./home");
    },
  },
};
</script>

<template>
  <Header />

  <div v-for="(item, index) in country" :key="index">
    <CountryDetails
      :key="item.name"
      :flag="item.flags.png"
      :name="item.name"
      :nativeName="item.nativeName"
      :population="item.population"
      :region="item.region"
      :subregion="item.subregion"
      :capital="item.capital"
      :topLevelDomain="item.topLevelDomain[0]"
      :currencie="item.currencies && item.currencies"
      :languages="item.languages"
      :borders="item.borders"
    />
  </div>
</template>

<style></style>
