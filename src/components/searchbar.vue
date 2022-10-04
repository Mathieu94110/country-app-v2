<script>
export default {
  name: "SearchBar",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    passSearchedValue() {
      this.$emit("updateBySearch", this.keyword);
    },
  },
};
</script>

<template>
  <div class="search-bar">
    <div class="search-bar__content">
      <font-awesome-icon icon="search" color="gray" />
      <input
        type="text"
        name="country"
        placeholder="Search for a country"
        v-model="keyword"
        v-on:keyup="passSearchedValue()"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-bar {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  &__content {
    display: flex;
    align-items: center;
    background-color: hsl(0, 0%, 100%);
    width: 100%;
    padding: 5px 5px 5px 20px;
    gap: 5px;
    height: 40px;
    input {
      border: 0;
      background-color: hsl(0, 0%, 100%);
      outline: none;
      font-size: 12px;
      height: 100%;
      width: 100%;
      padding-left: 10px;
      &:placeholder {
        color: var(--text);
      }
    }
  }
}

@media (min-width: 890px) {
  .search-bar {
    width: 460px;
    margin-bottom: 0;
    &__content {
      margin: 0;

      input {
        font-size: 16px;
      }
    }
  }
}
</style>
