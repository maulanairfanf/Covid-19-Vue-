<template>
  <div class="home container">
    <v-row id="section1" class="d-flex flex-lg-wrap">
      <v-flex id="caption" xs12 md12 lg4>
        <v-flex lg10>
          <h2 class="heading-2">Covid-19 Alert</h2>
          <h1 class="heading-1">Stay at Home to Stop Corona Virus Spread</h1>
          <!-- <h1 class="heading-1">Corona Virus Spread</h1> -->
          <span class="tittle">Hentikan penyebarang Virus Corona dengan tetap berada dirumah, sayangi diri anda dan orang sekitar anda.</span>
          <br />
          <span class="tittle"></span>
          <div class="text-center d-flex justify-start mt-2 mb-4">
            <v-btn
              to="/prevent"
              rounded
              color="light-blue accent-3 white--text text-capitalize"
            >How To Prevent</v-btn>
          </div>
        </v-flex>
      </v-flex>
      <v-flex id="layout-right" class="d-flex ml-auto rounded-lg" xs12 md12 lg8>
        <v-row class="d-flex justify-center">
          <v-img max-width="60%" id="pict" :src="pictMask.src" aspect-ratio="1" contain></v-img>
        </v-row>
      </v-flex>
    </v-row>

    <v-layout id="section2" class="d-flex justify-center text-center">
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
        <h2 class="heading-2">So, what is</h2>
        <h1 class="heading-1">Covid-19?</h1>
        <span class="tittle">
          Covid-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan bulan Desember 2019.
          Virus baru dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan Tiongkok Covid-19 ini sekarang menjadi sebuah pandemi yang terjadi di banyak negara di seluruh dunia.
          <div class="text-center d-flex justify-start mt-2">
            <v-btn
              to="/about"
              rounded
              color="light-blue accent-3 white--text text-capitalize"
            >See Details</v-btn>
          </div>
        </span>
      </v-flex>
    </v-row>

    <v-layout class="container d-flex justify-center align-center" row>
      <v-flex xs12 md12 lg12 class="d-flex justify-center align-center">
        <h2 class="heading-2">Covid-19 Overall</h2>
      </v-flex>
      <v-flex xs12 md12 lg6 class="d-flex justify-center align-center text-center">
        <h1
          class="heading-1"
        >Over 780k People Died, We Must Stick Together to Going Through Over This</h1>
      </v-flex>
      <v-flex xs12 m12 lg10 class="d-flex justify-center align-center text-center tittle">
        <p>Akibat covid-19 tardapat ± 1.010.579 orang pekerja yang terkena dampak rincinnya 873.090 pekerja dari 17.224 perusahaan dirumahkan, sedangkan 137.489 pekerja di PHK dari 22.753 perusahaan. Dalam bidang pendidikan sekolah sekolah dan universitas di liburkan aktivitas belajar mengajar dilakukan secara daring</p>
      </v-flex>
      <v-flex xs12 m12 lg10 class="d-flex justify-center align-center text-center tittle">
        <v-btn
          to="/Impact"
          rounded
          color="light-blue accent-3 white--text text-capitalize"
        >See Impact</v-btn>
      </v-flex>
    </v-layout>

    <v-row id="filter-section" justify="center">
      <v-list-item-title grey lighten-2 class="d-flex justify-center">
        <v-list-item class="d-flex justify-center">
          <h3 class="grey--text">Getting info from all countries</h3>
        </v-list-item>
      </v-list-item-title>

      <v-col cols="12" sm="8" md="4" class="justify-center">
        <v-text-field v-model="search" type="text" placeholder="Filtered Country" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row id="list-country" class="container d-flex ml-1">
      <v-card
        outlined
        flat
        raised
        width="300px"
        v-for="country in searchCountry"
        :key="country"
        class="mx-auto d-flex flex-lg-wrap mt-1"
        style="border : none"
      >
        <v-list-item class="d-flex justify-end">
          <v-list-item-title>{{country.name}}</v-list-item-title>
          <v-btn icon @click="select" v-bind:to="/country/ + country.name">
            <v-icon color="blue darken-2">info</v-icon>
          </v-btn>
        </v-list-item>
      </v-card>
    </v-row>

    <!-- <v-row justify="center">
      <v-btn color="primary" dark @click.stop="dialog = true">Open Dialog</v-btn>

      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>

          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

            <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>-->
  </div>
</template>



<script>
export default {
  data() {
    return {
      name: this.$route.params.name,
      dialog: false,
      search: "",
      test: "",
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

    fetch(
      "https://covid19.mathdro.id/api/countries/" + this.name + "/confirmed"
    )
      .then((Response) => Response.json())
      .then((data) => {
        this.test = data[0];
        // this.loader = false;
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
  methods: {
    select() {
      // country.name;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
.home {
  font-family: "Nunito Sans", sans-serif;
}

/* universal */
.heading-1 {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;

  color: #094067;
}

.heading-2 {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 33px;
  color: #ef4565;
}

.tittle {
  font-style: normal;
  font-size: 16px;
  line-height: 161.4%;
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
  .home {
    margin: 10px;
  }
}
</style>



