<template>
  <div class="home container">
    <v-carousel class="rounded-lg">
      <v-carousel-item
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

    <v-row justify="center">
      <v-col cols="12" sm="8" md="4" class="justify-center">
        <v-text-field placeholder="Search Country" outlined>
          <v-btn icon>
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </v-text-field>
      </v-col>
    </v-row>

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
        {
          src: require("../assets/lampu.jpg"),
          title: "Night Lamp",
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



