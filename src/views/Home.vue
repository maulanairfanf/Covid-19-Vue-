<template>
  <div class="home container">
    <!-- <v-carousel class="rounded-lg">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height d-flex justify-center align-center">
          <div class="display-2 white--text font-weight-thin" justify="center">{{ item.title }}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>-->

    <v-layout id="layout" row wrap class="dflex justify-end">
      <v-flex id="layout-right" xs12 md8>
        <v-row class="dflex justify-center">
          <v-img max-width="60%" :src="pict.src" aspect-ratio="1" contain></v-img>
        </v-row>
      </v-flex>
    </v-layout>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4" class="justify-center">
        <v-text-field
          type="text"
          v-model="search"
          placeholder="Search Country *Use Kapital"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>

    <div v-for="country in searchCountry" :key="country" class="grey--text">
      <router-link v-bind:to="/country/ + country.name">
        <h2>{{country.name}}</h2>
      </router-link>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      search: "",
      countrys: [],
      pict: {
        src: require("../assets/people-mask.png"),
      },
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
        console.log(data);
        this.countrys = data.countries;
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
#layout {
  /* border: 2px solid black; */
}
#layout-right {
  /* border: 2px solid black; */
  background: rgba(226, 195, 139, 0.3);
  padding: 5em;
}
</style>



