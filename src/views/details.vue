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
      return this.$router.push(`/code/${item}`);
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
};
</script>

<template>
  <div class="card-details-page-container" v-if="countryDetails">
    <div class="go-back-container">
      <button class="go-back-button" @click.prevent="goBack()">
        <font-awesome-icon icon="arrow-left" color="gray" />
        <span class="go-back-button-text">Back</span>
      </button>
    </div>
    <section class="card-details-container">
      <div class="card-details-items">
        <div class="card-details-items-img">
          <img
            :alt="`Flag of ${countryDetails.name.common}`"
            :src="countryDetails.flags.png"
          />
        </div>

        <article class="card-details-content">
          <div class="details-content-rows">
            <span class="details-content-items-left-bloc">
              <h2 class="card-details-name">
                {{ countryDetails.name.common }}
              </h2>
            </span>
          </div>

          <div class="details-content-rows">
            <span class="details-content-items-left-bloc">
              <h3>
                <span>Native name:</span>
                <span class="items-value">
                  {{ valueOrNA(nativeNames) }}
                </span>
              </h3>
            </span>

            <h3>
              <span>Capital:</span>
              <span class="items-value">
                {{ valueOrNA(countryDetails.capital) }}
              </span>
            </h3>
          </div>

          <div class="details-content-rows">
            <span class="details-content-items-left-bloc">
              <h3>
                <span>Population:</span>
                <span class="items-value">
                  {{ numberWithCommas }}
                </span>
              </h3>
            </span>

            <h3>
              <span>Currencies:</span>
              <span class="items-value">
                {{ valueOrNA(currencies) }}
              </span>
            </h3>
          </div>
          <div class="details-content-rows">
            <span class="details-content-items-left-bloc">
              <h3>
                <span>Région:</span>
                <span class="items-value">
                  {{ valueOrNA(countryDetails.region) }}</span
                >
              </h3>
            </span>
            <h3>
              <span>Languages:</span>

              <span class="items-value">
                {{ valueOrNA(languages) }}
              </span>
            </h3>
          </div>
          <div class="details-content-rows">
            <span class="details-content-items-left-bloc">
              <h3>
                <span>Sub regions:</span>
                <span class="items-value">
                  {{ valueOrNA(countryDetails.subregion) }}</span
                >
              </h3>
            </span>
            <h3>
              <span>Top Level Domain:</span>
              <span class="items-value">
                {{ valueOrNA(countryDetails.tld) }}</span
              >
            </h3>
          </div>

          <div class="borders-countries-container">
            <h3 class="border-countries-title">Border Countries:</h3>
            <div class="borders" v-if="countryDetails.borders">
              <div v-for="(item, index) in countryDetails.borders" :key="index">
                <ul>
                  <li
                    class="borders-items"
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
.card-details-page-container {
  margin: auto;
  height: calc(100vh - 64px);
  padding: 0 80px;
  .go-back-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 180px;
    width: 100%;

    .go-back-button {
      width: 130px;
      height: 40px;
      border-radius: 4px;
      box-shadow: rgb(60 64 67 / 15%) 0px 2px 6px 2px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      .go-back-button-text {
        padding-left: 10px;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }

  .card-details-container {
    width: 100%;
    height: 400px;
    .card-details-items {
      display: flex;

      img {
        height: 400px;
        margin-right: 100px;
      }
      .card-details-content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        overflow-x: hidden;

        .details-content-rows {
          display: flex;
          .items-value {
            margin-left: 10px;
          }
          .details-content-items {
            width: 50%;
            &-left-bloc {
              width: 50%;
              text-align: left;

              h2.card-details-name {
                font-size: 32px;
              }
            }
          }
        }

        .borders-countries-container {
          display: flex;
          align-items: center;

          .border-countries-title {
            width: 130px;
          }
          .borders {
            display: flex;
            overflow-x: auto;
          }

          .borders ul {
            margin: 10px;
            padding: 3px 20px;
            border-radius: 3px;
            box-shadow: rgb(60 64 67 / 15%) 0px 2px 6px 2px;
          }
          .borders-items {
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1500px) {
  .card-details-page-container {
    padding: 0 20px;
    .card-details-container {
      width: 100%;
      height: 300px;
      .card-details-items {
        img {
          height: 300px;
          margin-right: 100px;
        }
        .details-content-rows {
          display: block;
        }
        .borders-countries-container {
          display: flex;
          .borders ul {
            padding: 3px 10px;
            margin: 5px;
          }
        }
      }
    }
  }
}

@media (max-width: 1200px) and (min-width: 515px) {
  .card-details-page-container {
    .go-back-container {
      height: 80px;
      width: 100%;
    }

    .card-details-container {
      margin: 0 15%;
      width: 70%;
      height: 800px;
      display: block;
      .card-details-items {
        display: block;
        .card-details-items-img {
          text-align: center;
          img {
            height: auto;
            width: 100%;
            margin: 0;
          }
        }
      }
    }
  }
}

@media (max-width: 514px) and (min-width: 320px) {
  .card-details-page-container {
    .go-back-container {
      height: 80px;
    }
    .card-details-container {
      .card-details-items {
        display: block;
        .card-details-items-img {
          height: 200px;
          img {
            margin: 0;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
