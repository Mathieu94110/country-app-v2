<script>
export default {
  name: "CountryList",
  props: {
    flag: String,
    name: String,
    nativeName: String,
    population: Number,
    region: String,
    subregion: String,
    capital: String,
    topLevelDomain: String,
    currencie: Array,
    languages: Array,
    borders: Array,
  },
  methods: {
    goBack() {
      this.$router.push("./home");
    },
    searchCountryWithCode(item) {
      return this.$router.push(`/code/${item}`);
    },
  },
  computed: {
    numberWithCommas() {
      return this.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<template>
  <div class="card-details-page-container">
    <div class="go-back-container">
      <button class="go-back-button" @click.prevent="goBack()">
        <font-awesome-icon icon="arrow-left" color="gray" />
        <span class="go-back-button-text">Back</span>
      </button>
    </div>
    <section class="card-details-container">
      <div key="{name}" class="card-details-items">
        <div class="card-details-items-img">
          <img alt="product-image" :src="flag" />
        </div>

        <article class="card-details-content">
          <div class="details-content-rows">
            <span class="details-content-items-left-bloc">
              <h2 class="card-details-name">{{ name }}</h2>
            </span>
          </div>
          <div class="details-content-rows">
            <span class="details-content-items-left-bloc">
              <h3>
                Native Name:{" "}
                <span class="style-italic">{{ nativeName }}</span>
              </h3> </span
            >{" "}
            <span class="details-content-items">
              <h3>
                Top Level Domain:{" "}
                <span class="style-italic">{{ topLevelDomain }}</span>
              </h3>
            </span>
          </div>

          <div class="details-content-rows">
            <span class="details-content-items-left-bloc">
              <h3>
                Population:{" "}
                <span class="style-italic">
                  {{ numberWithCommas(population) }}
                </span>
              </h3>
            </span>

            <h3 v-if="currencie">
              Currencies:{" "}
              <span
                class="style-italic"
                v-for="item in currencie"
                :key="item.name"
              >
                {{ item.name }}
              </span>
            </h3>
          </div>
          <div class="details-content-rows">
            <span class="details-content-items-left-bloc">
              <h3>
                Region: <span class="style-italic">{{ region }}</span>
              </h3>
            </span>
            <h3>
              Languages:{" "}

              <span
                class="style-italic"
                v-for="item in languages"
                :key="item.name"
              >
                {item.name}
              </span>
            </h3>
          </div>
          <div class="details-content-rows">
            <span class="details-content-items-left-bloc">
              <h3>
                Sub Region:{" "}
                <span class="style-italic">{{ subregion }}</span>
              </h3>
              {" "}
            </span>
          </div>
          <div class="details-content-rows">
            <span class="details-content-items-left-bloc">
              <h3 v-if="capital">
                Capital: <span class="style-italic">{{ capital }}</span>
              </h3>
            </span>
          </div>
          <div class="borders-countries-container">
            <h3 class="border-countries-title">Border Countries:</h3>

            <div class="borders" v-if="borders">
              <div v-for="(item, index) in borders" :key="index">
                <ul>
                  <li @click="searchCountryWithCode(item)">
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
  height: 100%;
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
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        overflow-x: hidden;

        .details-content-rows {
          display: flex;

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
        }
      }
    }
  }
}

@media (max-width: 1292px) {
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

@media (max-width: 954px) and (min-width: 515px) {
  .card-details-page-container {
    .go-back-container {
      height: 80px;
      width: 100%;
    }

    .card-details-container {
      width: 100%;
      height: 800px;
      display: block;
      .card-details-items {
        display: block;
        .card-details-items-img {
          text-align: center;
          img {
            height: auto;
            width: 50%;
            margin: 0;
          }
        }
      }
    }
  }
}

@media (max-width: 514px) and (min-width: 350px) {
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
