<template>
  <div class="container">
    <v-text-field v-show="loader" color="success" loading></v-text-field>
    <h2>country : {{countrys.countryRegion}}</h2>
    <h2>confirmed : {{countrys.confirmed}}</h2>
    <h2>recovered    : {{countrys.recovered}}</h2>
    <h2>active : {{countrys.active}}</h2>
    <h2>deaths : {{countrys.deaths}}</h2>
     <div class="my-2" @click="$router.go(-1)">
        <v-btn color="primary">Back</v-btn>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.name,
      countrys: {},
      loader : true
    };
  },
  created() {
    fetch(
      "https://covid19.mathdro.id/api/countries/" + this.name + "/confirmed"
    )
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data[0].confirmed);
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