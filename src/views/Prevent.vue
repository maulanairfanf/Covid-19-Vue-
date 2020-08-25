<template>
  <v-container class="Symptoms container mt-6">
    <div>
      <v-flex xs12 md12 lg12 class="d-flex justify-center align-center">
        <span class="heading-1 text-center">{{heading}}</span>
      </v-flex>
      <v-flex xs12 md12 lg12 class="d-flex justify-center align-center mt-2 mb-8">
        <v-flex lg4>
          <p class="sub-heading text-center">{{subHeading}}</p>
        </v-flex>
      </v-flex>
    </div>

    <v-row class="d-flex flex-wrap container-costum justify-center">
      <v-card
        v-for="(pict,p) in picts"
        :key="p"
        class="mx-auto mb-6 container justify-center align-center"
        flat
        tile
        min-height="200"
        max-width="450"
      >
        <v-flex class="d-flex justify-center">
          <v-img max-width="250" :src="pict.src" contain></v-img>
        </v-flex>

        <v-card-text class="text-center">
          <h2 class="mb-3 mt-6">{{pict.heading}}</h2>
          <span class="sub-heading">{{pict.title}}</span>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      heading: "Protect yourself and those around you",
      subHeading:
        "Sampai saat ini belum ditemukan vaksin yang dapat menyembuhkan virus corona, cara terbaik untuk saat ini adalah dengan cara menghindari virus tersebut. Berikut hal - hal yang perlu diperhatikan untuk menjaga diri dan orang di sekitar anda ",
      picts: [
        {
          src: require("../assets/cuci-tangan.png"),
          heading: "Mencuci Tangan",
          title:
            "Harus rajin mencuci tangan dengan air mengalir menggunakan sabun atau dapat menggunakan handsanitizer",
        },
        {
          src: require("../assets/tetap-dirumah.png"),
          heading: "Dirumah",
          title: "Tetap dirumah melakukan segala aktivitas di dalam rumah",
        },
        {
          src: require("../assets/masker.png"),
          heading: "Masker",
          title:
            "Gunakan masker jika terpaksa keluar, dan cuci masker secara berkala",
        },
        {
          src: require("../assets/bersihkan.png"),
          heading: "Kebersihan",
          title:
            "Jaga kebersihan barang yang sering anda pakai, lakukan pembersihan secara berkala",
        },
        {
          src: require("../assets/tutup-mulut.png"),
          heading: "Menutup Mulut",
          title:
            "Jika ingin bersin atau batuk tutupi mulut anda dengan siku atau tisu",
        },
        {
          src: require("../assets/hidup-sehat.png"),
          heading: "Pola Sehat",
          title:
            "Jaga kesehatan dengan konsumsi makanan bergizi dan rajin berolahraga",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
.Symptoms {
  font-family: "Nunito Sans", sans-serif;
}

.container-costum {
}

.heading-1 {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
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

.sub-heading {
  font-style: normal;
  font-size: 14px;
  color: #5f6c7b;
}
</style>