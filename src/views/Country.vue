<template>
  <div class="container mt-10 justify-center">
    <v-text-field v-show="loader" color="light-blue 
" loading></v-text-field>
    <!-- <v-row> -->
    <v-img width="90%" class="d-flex justify-center align-center mx-auto" :src="pict.src">
      <v-flex class="text-center" style="border : 2px solid black">
        <h3>{{countrys.countryRegion}}</h3>
        <h3>country : {{countrys.countryRegion}}</h3>
        <h3>confirmed : {{countrys.confirmed}}</h3>
        <h3>recovered : {{countrys.recovered}}</h3>
        <h3>active : {{countrys.active}}</h3>
        <h3>deaths : {{countrys.deaths}}</h3>
        <div class="my-2" @click="$router.go(-1)">
          <v-btn color="primary">Back</v-btn>
        </div>
      </v-flex>
    </v-img>
    <!-- </v-row> -->
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
</style>