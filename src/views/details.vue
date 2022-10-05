<script>
import { baseUrl } from "../api/api-calls";

export default {
  name: "Details",
  data() {
    return {
      countryDetails: null,
    };
  },
  mounted() {
    let contryName = this.$route.params.name;
    if (contryName) {
      this.getCountryDetails(contryName);
    }
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    searchCountryWithCode(item) {
      return this.$router.push({ name: "Details", params: { name: item } });
    },
    async getCountryDetails(name) {
      const code = name;
      const fields = [
        "name",
        "region",
        "subregion",
        "capital",
        "population",
        "languages",
        "currencies",
        "flags",
        "borders",
        "tld",
        "cca3",
      ];

      try {
        const result = await fetch(
          `${baseUrl}/alpha/${code.toLowerCase()}?fields=${fields.join(",")}`
        );
        this.countryDetails = await result.json();
      } catch (err) {
        console.log(err);
      }
    },
    valueOrNA(value) {
      if (Array.isArray(value)) {
        value = value.join(", ");
      }
      return value ? value.trim() : "N/A";
    },
  },
  computed: {
    numberWithCommas() {
      return this.countryDetails.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    nativeNames() {
      return Object.values(this.countryDetails.name.nativeName)
        .map((nativeName) => nativeName.common)
        .sort()
        .join(", ");
    },
    languages() {
      return Object.values(this.countryDetails.languages).sort().join(", ");
    },
    currencies() {
      return Object.values(this.countryDetails.currencies)
        .map((currency) => `${currency.name} (${currency.symbol})`)
        .sort()
        .join(", ");
    },
  },
  // evey time url params change we refresh card data
  watch: {
    "$route.params.name": {
      handler: function (name) {
        this.getCountryDetails(name);
      },
    },
  },
};
</script>

<template>
  <div class="details" v-if="countryDetails">
    <div class="details__go-back-container">
      <button class="details__go-back-button" @click.prevent="goBack()">
        <font-awesome-icon icon="arrow-left" color="gray" />
        <span class="details__go-back-button-text">Back</span>
      </button>
    </div>
    <section class="details__card-container">
      <div class="details__card-items">
        <div class="details__card-items-img">
          <img
            :alt="`Flag of ${countryDetails.name.common}`"
            :src="countryDetails.flags.png"
          />
        </div>

        <article class="details__card-content">
          <div class="details__content-rows">
            <span>
              <h2 class="details__content-title">
                {{ countryDetails.name.common }}
              </h2>
            </span>
          </div>

          <div class="details__content-rows">
            <span>
              <h3>
                <span class="details__items-key">Native name:</span>
                <span>
                  {{ valueOrNA(nativeNames) }}
                </span>
              </h3>
            </span>

            <h3>
              <span class="details__items-key">Capital:</span>
              <span>
                {{ valueOrNA(countryDetails.capital) }}
              </span>
            </h3>
          </div>

          <div class="details__content-rows">
            <span>
              <h3>
                <span class="details__items-key">Population:</span>
                <span>
                  {{ numberWithCommas }}
                </span>
              </h3>
            </span>

            <h3>
              <span class="details__items-key">Currencies:</span>
              <span>
                {{ valueOrNA(currencies) }}
              </span>
            </h3>
          </div>
          <div class="details__content-rows">
            <span>
              <h3>
                <span class="details__items-key">Région:</span>
                <span> {{ valueOrNA(countryDetails.region) }}</span>
              </h3>
            </span>
            <h3>
              <span class="details__items-key">Languages:</span>

              <span>
                {{ valueOrNA(languages) }}
              </span>
            </h3>
          </div>
          <div class="details__content-rows">
            <span>
              <h3>
                <span class="details__items-key">Sub regions:</span>
                <span> {{ valueOrNA(countryDetails.subregion) }}</span>
              </h3>
            </span>
            <h3>
              <span class="details__items-key">Top Level Domain:</span>
              <span> {{ valueOrNA(countryDetails.tld) }}</span>
            </h3>
          </div>

          <div class="details__borders-container">
            <h3 class="details__border-countries">Border Countries:</h3>
            <div class="details__borders" v-if="countryDetails.borders">
              <div v-for="(item, index) in countryDetails.borders" :key="index">
                <ul>
                  <li
                    class="details__border-items"
                    @click="searchCountryWithCode(item)"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.details {
  margin: auto;
  height: calc(100vh - 64px);
  padding: 0 80px;
  &__go-back-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    width: 100%;
  }
  &__go-back-button {
    width: 80px;
    height: 30px;
    border-radius: 4px;
    box-shadow: rgb(60 64 67 / 15%) 0px 2px 6px 2px;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }
  &__go-back-button-text {
    padding-left: 10px;
    font-weight: 600;
    font-size: 16px;
  }
  &__card-container {
    width: 100%;
    height: 400px;
  }
  &__card-items {
    display: block;
  }
  &__card-items-img {
    height: 200px;
    img {
      margin: 0;
      height: 100%;
      width: 100%;
    }
  }
  &__card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow-x: hidden;
  }
  &__content-rows {
    display: flex;
    margin-top: 20px;
    :first-child {
      margin-right: 10px;
    }
  }
  &__content-title {
    font-size: 32px;
  }
  &__items-key {
    font-size: 1rem;
    text-decoration: underline;
  }
  &__borders-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  &__border-countries {
    font-size: 1rem;
    text-decoration: underline;
    text-align: left;
    min-width: 128px;
    margin-right: 10px;
  }
  &__borders {
    display: flex;
    overflow-x: auto;
    width: auto;
    justify-content: space-between;
  }
  &__border-items {
    padding: 8px;
    margin: 0 3px;
    color: var(--switch-color);
    border: 1px solid var(--switch-color);
    font-weight: 600;
    &:hover {
      cursor: pointer;
    }
  }
}
@media (min-width: 670px) {
  .details {
    &__go-back-container {
      height: 180px;
    }
    &__go-back-button {
      width: 130px;
      height: 40px;
      border-radius: 4px;
      box-shadow: rgb(60 64 67 / 15%) 0px 2px 6px 2px;
      border: none;
      font-weight: 600;
      cursor: pointer;
    }
    &__card-items {
      display: flex;
      height: 100%;
    }
    &__card-items-img {
      img {
        height: 400px;
      }
    }
    &__card-content {
      margin-left: 20px;
      width: 100%;
      max-width: 660px;
    }
    &__content-rows {
      margin-top: 0px;
    }
    &__borders-container {
      margin-top: 0px;
    }
  }
}

@media (max-width: 1200px) {
  .details {
    padding: 0 20px;
    &__content-rows {
      display: block;
      text-align: left;
      font-size: 0.8rem;
    }
    &__borders-container {
      display: flex;
    }
  }
}
</style>
