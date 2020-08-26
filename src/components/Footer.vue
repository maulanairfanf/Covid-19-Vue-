<template>
  <v-footer color="primary lighten-1 footer mt-0 pt-0" padless>
    <v-row justify="center" align="center" no-gutters>
      <h3 class="white--text ">
        Find me on
        <span class="ml-5">:</span>
      </h3>
      <a href="https://www.instagram.com/maulanairfanfirdian">
        <v-btn color="white" text rounded class="my-2 ml-4">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </a>
      <a href="https://github.com/maulanairfanf">
        <v-btn color="white" text rounded class="my-2">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </a>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>CovInfo</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
.footer {
  font-family: "Nunito Sans", sans-serif;
  border : 2px solid black;
}
a {
  text-decoration: none;
}
</style>