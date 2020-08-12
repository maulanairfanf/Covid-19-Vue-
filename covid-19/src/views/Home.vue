<template>
  <div class="home container">
    <h1>HomePage</h1>
    <div v-for="country in countrys" :key="country.name">
      <h2>{{country.name}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countrys: [],
    };
  },
  created() {
    fetch("https://covid19.mathdro.id/api/countries")
      .then((Response) => Response.json())
      .then((data) => {
        this.countrys = data.countries;
      });
  },
};
</script>





