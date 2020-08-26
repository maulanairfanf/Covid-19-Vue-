<template>
  <nav class>
    <v-toolbar flat app>
      <v-app-bar-nav-icon app @click="drawer = !drawer "></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="name-app">CovInfo</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary class="grey lighten-5">
      <v-list nav>
        <v-list-item router to="/" link>
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router to="/about" link>
          <v-list-item-icon>
            <v-icon>info</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router to="/prevent" link>
          <v-list-item-icon>
            <v-icon>security</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Prevent</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router to="/impact" link>
          <v-list-item-icon>
            <v-icon>warning</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Impact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item router to="/saved" link>
          <v-list-item-icon>
            <v-icon>bookmark</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Saved</v-list-item-title>
          </v-list-item-content>
        </v-list-item>-->
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');nav {
  font-family: "Nunito Sans", sans-serif;
}

.name-app {
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
}
</style>