<template>
  <div class="home container">
    <v-carousel>
    <v-carousel-item class="rounded-lg"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
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
            src: '../assets/logo.png',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
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





