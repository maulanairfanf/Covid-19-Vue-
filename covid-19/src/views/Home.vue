<template>
  <div class="home container">
    <v-carousel>
      <v-carousel-item
        class="rounded-lg"
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height container" align="center" justify="center">
          <div class="display-2 white--text font-weight-thin">{{ item.title }}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-col cols="12" sm="6" md="3" class="justify-center">
      <v-text-field placeholder="Search Country" outlined>
        <v-icon>home</v-icon>
      </v-text-field>
    </v-col>

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
      items: [
        {
          src: require("../assets/pohon-salju.jpg"),
          title: "Winter Tree",
        },
      ],
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

<style scoped>
</style>



