<template>
  <v-container class="About container--fluid">
    <v-row>
      <v-flex class="d-flex justify-center align-center">
        <v-img aspect-ratio="2" :src="pictGlobe.src">
          <v-card color="rgb(0, 0, 0, 0)" class="d-flex align-center" flat height="100%">
            <v-row class="d-flex justify-center">
              <v-col cols="10">
                <v-flex lg12 class="ml-16 d-flex justify-start">
                  <h1 class="heading white--text">Covid-19</h1>
                </v-flex>
                <v-flex lg12 class="ml-16 d-flex justify-start">
                  <h2
                    class="tittle white--text"
                  >Corona(CO), Virus(VI), Disease(D,penyakit) yang ditemukan pada tahun 2019</h2>
                </v-flex>
              </v-col>
            </v-row>
          </v-card>
        </v-img>
      </v-flex>
    </v-row>

    <v-row class="d-flex justify-center section-2 container mx-auto">
      <v-flex lg5 class="d-flex justify-center ml-1">
        <v-img :src="pictVirus.src" contain aspect-ratio="1.7"></v-img>
      </v-flex>
      <v-flex lg6 class="d-flex justify-start align-center mt-2">
        <v-flex lg8>
          <h1 class="grey--text text--darken-2">
            What is
            <span class="red--text text--darken-1">Covid-19</span> ?
          </h1>
          <h3 class="grey--text text--darken-1 tittle text-justify mt-2">
            Covid-19 adalah virus corona jenis baru yang tengah menyerang masyarakat dunia saat ini, virus corona merupakan
            jenis virus yang diidentifikasi sebagai penyebab penyakit pada saluran pernapasan, yang pertama kali terdeteksi
            muncul di Kota Wuhan, Tiongkok.
            Virus ini diketahui pertama kali muncul di pasar hewan dan makanan laut di Kota Wuhan. Kemudian terdapat laporan
            bahwa banyak pasien yang menderita virus ini dan ternyata terkait dengan pasar hewan dan makanan laut tersebut.
            Orang pertama yang jatuh sakit akibat virus ini juga diketahui merupakan para pedagang di pasar itu. Mereka menduga
            virus corona baru ini hampir dapat di pastikan berasal dari ular.
          </h3>
        </v-flex>
      </v-flex>
    </v-row>

    <v-row class="d-flex justify-center container mx-auto">
      <v-flex lg12 class="d-flex justify-center">
        <v-flex class="text-center">
          <h1  class="grey--text text--darken-3 mt-4">Symptoms</h1>
          <h3 class="grey--text text--darken-1 mt-4 mb-6">Jika anda merasakan gejala dibawah ini segera periksakan ke dokter</h3>
        </v-flex>
      </v-flex>
      <v-flex v-for="gejala in pictGejala" :key="gejala" class="d-flex flex-wrap">
        <v-card
          color="rgb(0, 0, 0, 0)"
          class="mx-auto mt-6 card-costum"
          max-width="450px"
          outlined
          flat
        >
          <v-img :src="gejala.src"></v-img>
          <v-card-title class="d-flex justify-center mt-6">
            <h3 class="text-center grey--text text--darken-1">{{gejala.heading}}</h3>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pictGlobe: {
        src: require("../assets/globe.jpg"),
      },
      pictVirus: {
        src: require("../assets/virus-blue.jpg"),
      },
      pictGejala: [
        {
          src: require("../assets/batuk_berlendir.jpeg"),
          heading: "Batuk Berlendir",
          title:
            "Jika suhu tubuh mencapai di atas 37,5 derajat Celsius, disarankan segera berkonsultasi ke rumah sakit",
        },
        { src: require("../assets/demam.jpg"), heading: "Demam", title: "" },
        { src: require("../assets/diare.jpg"), heading: "Diare", title: "" },
        {
          src: require("../assets/sesak_nafas.jpg"),
          heading: "Sesak Nafas",
          title: "",
        },
        {
          src: require("../assets/tenggorokan.jpg"),
          heading: "Sakit Tenggorokan",
          title: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
.About {
  font-family: "Nunito Sans", sans-serif;
}
.heading {
  font-size: 76px;
}

.section-2 {
  margin-top: 10%;
  margin-bottom: 10%;
}

@media screen and (max-width: 768px) {
  .heading {
    font-size: 36px;
  }
  .tittle {
    font-size: 12px;
  }
  .card-costum {
    max-width: 300px !important;
  }
}
</style>