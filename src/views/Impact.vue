<template>
  <v-container class="Impact">
    <v-col class="d-flex justify-center align-center mt-10">
      <h1>Impact Of The World</h1>
    </v-col>
    <v-col class="d-flex justify-center align-center mb-10">
      <v-flex lg4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta sapiente, perferendis exercitationem tempora quidem delectus rerum. Aspernatur, ad facilis dolores cum facere labore ab, quod quisquam vero minima dignissimos!</p>
      </v-flex>
    </v-col>

    <v-row>
      <v-flex
        v-for="(pict,p) in picts"
        :key="p"
        class="d-flex justify-center align-center mx-auto mb-10"
      >
        <v-col lg6 class="d-flex justify-center">
          <v-img max-width="270" :src="pict.src" contain></v-img>
        </v-col>
        <v-col lg6 class="d-flex justify-start">
          <v-flex lg8>
            <h2>{{pict.heading}}</h2>
            <span class="text-center">{{pict.title}}
            </span>
          </v-flex>
        </v-col>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      picts: [
        {
          src: require("../assets/economy.svg"),
          heading: "Ekonomi",
          title: "berbagai industri terkena dampak karena ketergantungan pada rantai pasokan global sehingga menghambat proses produksi.memberlakukan sistem pengurangan karyawan menurunnya produksi sehingga perusahaan bisa mengalami kerugian yang berujung PHK. seuruh dunia mengalami pelemahan ekonomi sehingga menyebabkan harga komoditas turun dan ekspor Indonesia ke beberapa negara juga terhenti Pemberlakuan social distancing dan lockdown mengakibatkan masyarakat tidak dapat beraktivitas di luar rumah bahkan untuk mereka yang berstatus sebagai pekerja harian atau pedagang kaki lima.pasar saham terjun bebas karena dampak virus Corona secara global akan menyebabkan para investor enggan mengeluarkan uangnya untuk berinvestasi. ",
        },
        {
          src: require("../assets/culture.svg"),
          heading: "Budaya",
          title: "Bentuk peribadatan keagamaan yang sedikit terkikis, diantaranya adalah budaya jamaah sholat wajib lima waktu dan sholat tarawih serta  tadarusan yang tidak lagi dilaksankan di masjid dan mushola warga setempat warga masyarakat menjadi kurang berinteraksi antar satu dengan yang lainnya individualis melemahnya pelestarian budaya jabat tangan tersebut, akan memberikan celah yang besar terhadap adanya kerentanan sosial antar masyarakat.",
        },
        {
          src: require("../assets/teach.svg"),
          heading: "Pendidikan",
          title: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
.Impact{
  font-family: "Nunito Sans", sans-serif;
}
</style>