<template>
  <v-container class="Impact container--fluid">
    <v-col class="d-flex justify-center align-center pt-10">
      <h1 class="grey--text text--darken-3"> <span class="red--text">Impact</span> Of The World</h1>
    </v-col>
    <v-col class="d-flex justify-center align-center pb-10">
      <v-flex lg6>
        <p
          class="text-center grey--text"
        >Pandemi covid-19 yang melanda dunia memberikan dampak yang terlihat nyata dalam berbagai bidang tidak hanya dalam perekonomian dunia juga masih banyak lagi.</p>
      </v-flex>
    </v-col>

    <v-row
      v-for="pict in picts"
      :key="pict"
      :style="{'background-color' : pict.hex}"
      class="d-flex justify-center align-center pt-16 pb-16 mx-auto"
    >
      <v-flex lg4 class="d-flex justify-center pt-16 pb-16 mx-auto">
        <v-img max-width="350" :src="pict.src" contain></v-img>
      </v-flex>
      <v-flex lg4 class="d-flex justify-center align-center mt-2">
        <h2 class="grey--text text--darken-3">{{pict.heading}}</h2>
      </v-flex>
      <v-flex lg4 class="d-flex justify-center align-center media">
        <v-flex lg10 >
          <span class="descTitle">{{pict.title | shorttext(100) }}</span>
          <span class="descEmpty">{{pict.title}}</span>
          <a class="text-center" v-on:click="toggler($event)">Read More</a>
        </v-flex>
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
          hex: "#E3F2FD",
          src: require("../assets/economy.svg"),
          heading: "Ekonomi",
          title:
            "Berbagai industri terkena dampak karena ketergantungan pada rantai pasokan global sehingga menghambat proses produksi.memberlakukan sistem pengurangan karyawan menurunnya produksi sehingga perusahaan bisa mengalami kerugian yang berujung PHK. seuruh dunia mengalami pelemahan ekonomi sehingga menyebabkan harga komoditas turun dan ekspor Indonesia ke beberapa negara juga terhenti Pemberlakuan social distancing dan lockdown mengakibatkan masyarakat tidak dapat beraktivitas di luar rumah bahkan untuk mereka yang berstatus sebagai pekerja harian atau pedagang kaki lima.pasar saham terjun bebas karena dampak virus Corona secara global akan menyebabkan para investor enggan mengeluarkan uangnya untuk berinvestasi. ",
        },
        {
          hex: "#BBDEFB",
          src: require("../assets/culture.svg"),
          heading: "Budaya",
          title:
            "Bentuk peribadatan keagamaan yang sedikit terkikis, diantaranya adalah budaya jamaah sholat wajib lima waktu dan sholat tarawih serta  tadarusan yang tidak lagi dilaksankan di masjid dan mushola warga setempat warga masyarakat menjadi kurang berinteraksi antar satu dengan yang lainnya individualis melemahnya pelestarian budaya jabat tangan tersebut, akan memberikan celah yang besar terhadap adanya kerentanan sosial antar masyarakat.",
        },
        {
          hex: "#E3F2FD",

          src: require("../assets/teach.svg"),
          heading: "Pendidikan",
          title:
            "Pelaksanaan kegiatan belajar mengajar dilaksanakan dengan sistem online atau sistem dalam jaringan (daring). Dengan berlakunya sistem daring, tentunya peserta didik maupun tenaga pendidik dari semua kalangan memiliki penghambat efektivitas pembelajaran secara daring seperti, diharuskan memiliki akses jaringan internet yang baik. Namun, banyak daerah-daerah yang memiliki akses internet kurang baik atau tidak lancar sehingga menjadi salah satu kendala berlangsungnya kegiatan belajar mengajar dengan baik, Keterbatasan Penguasaan Teknologi Informasi oleh Guru dan Siswa, Kurang siapnya penyediaan Anggaran, kurangnya sarana dan prasarana dimana tidak semua pelajar memiliki smartphone untuk melakukan belajar online",
        },
        {
          hex: "#BBDEFB",

          src: require("../assets/pariwisata.svg"),
          heading: "Pariwisata",
          title:
            "Biro perjalanan Wisata adalah salah satu sektor yang terdampak langsung akibat virus corona ini yang mana banyak pembatalan rencana perjalanan wisata yang sudah diagendakan jauh hari sebelumnya, akhirnya dibatalkan karena adanya virus ini. Presentase pembatalan yang diakibatkan virus ini hampir menyentuh angka 100% yang mengakibatkan banyak biro perjalanan wisata juga seakan akan mati sepenuhnya dalam hal perekenomian dan terpaksa merumahkan keseluruhan karyawannya karena masih banyak beban juga yang harus ditanggung dari pembatalan rencana perjalananan yang diakibatkan dan juga masih banyak faktor finansial lain yang ditimbulkan akibat covid-19. Hotel  menjadi sektor yang paling parah juga dihantam oleh pandemi virus covid-19 ini yang mana banyak hotel yang mengandalkan pendapatan dari kerjasama dengan biro perjalanan wisata. Dengan tidak adanya dukungan dari biro perjalanan wisata, hotel seakan akan lumpuh dari aktivitas pemesanan yang memberi sumbangan pendapatan hotel sebesar 60%. Sekarang ini banyak hotel yang sudah merumahkan hampir 99% karyawan tanpa gaji dan menutup operasional hotel sepenuhnya untuk memotong kerugian yang lebih banyak lagi akibat tidak adanya pemasukan dan tingkat okupansi hotel yang rendah dan tidak sebanding dengan pendapatan yang diterima.",
        },
      ],
    };
  },
  filters: {
    shorttext: function (value, limit) {
      if (value) {
        return value.substring(0, limit);
      }
    },
  },
  methods: {
    toggler(e) {
      console.log(e);
      if (e.target.innerText == "Read More") {
        e.target.innerText = "Read Less";
        event.target.parentElement.children[0].className = "descEmpty";
        event.target.parentElement.children[1].className = "descTitle";
      } else {
        e.target.innerText = "Read More";
        event.target.parentElement.children[0].className = "descTitle";
        event.target.parentElement.children[1].className = "descEmpty";
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
.container--fluid {
  padding: 0;
}

.Impact {
  font-family: "Nunito Sans", sans-serif;
}

.descEmpty {
  display: none;
}

@media screen and (max-width: 1024px ){
  .media{
    text-align: center;
  }
};
</style>