<template>
  <div class="home container">
    <v-row id="section1" class="dflex flex-lg-wrap">
      <v-flex id="caption" xs12 lg4>
        <h2>Covid-19 Alert</h2>
        <h1>Stay at Home to Stop</h1>
        <h1>Corona Virus Spread</h1>
        <span>Hentikan penyebarang Virus Corona dengan tetap berada dirumah.</span>
        <br />
        <span>Jika merasa anda mengalami gejalanya cek disini bro !</span>
      </v-flex>
      <v-flex id="layout-right" class="dflex ml-auto rounded-lg" xs12 lg8>
        <v-row class="dflex justify-center">
          <v-img max-width="60%" id="pict" :src="pictMask.src" aspect-ratio="1" contain></v-img>
        </v-row>
      </v-flex>
    </v-row>

    <v-layout id="section2" class="dflex justify-center text-center">
      <v-row id="section2-1" lg12>
        <v-flex xs12 lg3>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{countCountry}}</v-list-item-title>
            <v-list-item-subtitle id="subtitle">Countries</v-list-item-subtitle>
          </v-list-item-content>
        </v-flex>
        <v-flex xs12 lg3>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{infoCases.confirmed.value}}</v-list-item-title>
            <v-list-item-subtitle>Confirmed Cases</v-list-item-subtitle>
          </v-list-item-content>
        </v-flex>
        <v-flex xs12 lg3>
          <v-list-item-content>
            <v-list-item-title id="recover" class="headline mb-1">{{infoCases.recovered.value}}</v-list-item-title>
            <v-list-item-subtitle>Recovered Cases</v-list-item-subtitle>
          </v-list-item-content>
        </v-flex>
        <v-flex xs12 lg3>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{infoCases.deaths.value}}</v-list-item-title>
            <v-list-item-subtitle>Confirmed Deaths</v-list-item-subtitle>
          </v-list-item-content>
        </v-flex>
        <v-flex xs12>
          <v-list-item-content>
            <v-list-item-subtitle id="update1">
              Last Update :
              {{infoCases.lastUpdate}}, Source :
              <a
                id="update2"
                href="https://github.com/mathdroid/covid-19-api"
              >Github</a>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-flex>
      </v-row>
    </v-layout>

    <v-row id="section3" class="container d-flex justify-center align-center mb-6">
      <v-flex xs12 lg4>
        <v-flex>
          <v-img max-width="80%" :src="pictVirus.src" aspect-ratio="1" class="rounded-lg"></v-img>
        </v-flex>
      </v-flex>
      <v-flex xs12 lg4 id="caption">
        <h2>So, what is</h2>
        <h1>Covid-19?</h1>
        <span>
          Covid-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan bulan Desember 2019.
          Virus baru dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan Tiongkok Covid-19 ini sekarang menjadi sebuah pandemi yang terjadi di banyak negara di seluruh dunia.
        </span>
      </v-flex>
    </v-row>

    <v-row id="filter-section" justify="center">
      <v-list-item-title grey lighten-2 class="dflex justify-center">
        <v-list-item class="dflex justify-center">
          <h3 class="grey--text">Getting info from all countries</h3>
        </v-list-item>
      </v-list-item-title>

      <v-col cols="12" sm="8" md="4" class="justify-center">
        <v-text-field type="text" v-model="search" placeholder="Filtered Country" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row id="list-country" class="container">
      <v-flex
        v-for="country in searchCountry"
        :key="country"
        class="dflex flex-lg-wrap"
        xs6
        md4
        lg3
      >
        <v-list-item class="dflex justify-end">
          <v-list-item-title grey lighten-2>{{country.name}}</v-list-item-title>
          <router-link id="link" v-bind:to="/country/ + country.name">
            <v-list-item-icon>
              <v-icon color="blue darken-2">info</v-icon>
            </v-list-item-icon>
          </router-link>
        </v-list-item>
      </v-flex>
    </v-row>
  </div>
</template>



<script>
export default {
  data() {
    return {
      search: "",
      countrys: [],
      countCountry: "",
      infoCases: "",
      pictVirus: {
        src: require("../assets/virus.png"),
      },
      pictMask: {
        src: require("../assets/people-mask.png"),
      },
    };
  },
  created() {
    fetch("https://covid19.mathdro.id/api/countries")
      .then((Response) => Response.json())
      .then((data) => {
        this.countCountry = parseInt(data.countries.length);
        this.countrys = data.countries;
        console.log(data.countries);
      })
      .catch(function (error) {
        console.log("error" + error);
      });

    fetch("https://covid19.mathdro.id/api/")
      .then((Response) => Response.json())
      .then((data) => {
        this.infoCases = data;
      })
      .catch(function (error) {
        console.log("error" + error);
      });
  },
  computed: {
    searchCountry: function () {
      return this.countrys.filter((data) => {
        return data.name.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");

.home {
  font-family: "Nunito Sans", sans-serif;
}

#filter-section {
}

#link {
  text-decoration: none;
}

/* section3 */
#section3 {
}

#section3 #caption h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;

  color: #ef4565;
}

#section3 #caption h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 53px;

  color: #094067;
}

#section3 #caption span {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 161.4%;
  /* or 29px */

  color: #5f6c7b;
}

/* section2 */

#section2 {
  transform: translate(0%, -20%);
  z-index: 2;
}

#section2-1 {
  max-width: 80%;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 28px 45px rgba(112, 144, 176, 0.22);
}

.v-list-item__subtitle {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 161.4%;
  color: #5f6c7b;
}

#recover {
  color: #21bf73;
}

.headline {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 161.4%;
  color: #ef4565;
}

#update1 {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 161.4%;
  color: #5f6c7b;
}

#update2 {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 161.4%;
  color: #ef4565;
  text-decoration: none;
}

/* section1 */

#v-row {
}
#layout {
}
#layout-right {
  background: rgba(226, 195, 139, 0.3);
  padding: 2em 0 4em 0;
}

#section1 #caption {
  z-index: 1;
  position: absolute;
  transform: translate(55%, 100%);
}

#caption h2 {
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;

  color: #ef4565;
}

#caption h1 {
  font-weight: bold;
  font-size: 48px;
  line-height: 53px;
  color: #094067;
}

#caption span {
  font-weight: 600;
  font-size: 18px;
  line-height: 161.4%;
  color: #5f6c7b;
}

@media screen and (max-width: 768px) {
  #section1 #caption {
    z-index: 1;
    position: relative;
    transform: translate(0%, 0%);
  }
}
</style>



