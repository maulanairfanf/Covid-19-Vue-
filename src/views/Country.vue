<template>
  <div class="country container mt-10 justify-center">
    <v-text-field v-show="loader" color="light-blue 
" loading></v-text-field>

    <v-img max-width="90%" class="d-flex justify-center align-center mx-auto" :src="pict.src">
      <v-flex class="box text-center mb-16 mx-auto mt-5 pt-10 pb-10 rounded-lg" xs8 lg3>
        <v-flex xs12 md12 lg12 class="d-flex justify-center align-center">
          <p class="heading-2">{{countrys.countryRegion}}</p>
        </v-flex>
        <v-flex xs12 md12 lg12 class="d-flex justify-center align-center">
          <p class="heading-2">Confirmed : {{countrys.confirmed}}</p>
        </v-flex>
        <v-flex xs12 md12 lg12 class="d-flex justify-center align-center">
          <p class="green--text text-lighten-1">Recovered : {{countrys.recovered}}</p>
        </v-flex>
        <v-flex xs12 md12 lg12 class="d-flex justify-center align-center">
          <p class>Active : {{countrys.active}}</p>
        </v-flex>
        <v-flex xs12 md12 lg12 class="d-flex justify-center align-center">
          <p class="red--text text--lighten-1">Deaths : {{countrys.deaths}}</p>
        </v-flex>
        <div class="my-2" @click="$router.go(-1)">
          <v-btn color="#0091EA" class="white--text">Back to home</v-btn>
        </div>
      </v-flex>
    </v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.name,
      countrys: {},
      loader: true,
      pict: {
        src: require("../assets/World.png"),
      },
    };
  },
  created() {
    fetch(
      "https://covid19.mathdro.id/api/countries/" + this.name + "/confirmed"
    )
      .then((Response) => Response.json())
      .then((data) => {
        this.countrys = data[0];
        this.loader = false;
      })
      .catch(function (error) {
        console.log("error" + error);
      });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
.country {
  font-family: "Nunito Sans", sans-serif;
}
.box {
  background-color: white;
  box-shadow: 0px 3px 3px 7px #eeeeee;
}
</style>