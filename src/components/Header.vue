<template>
  <nav class>
    <v-toolbar flat app class="grey--text">
      <v-app-bar-nav-icon app @click="drawer = !drawer "></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span>Covid-19</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary class="grey lighten-5">
      <v-list nav>
        <v-list-item router to="/" link>
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>home</v-list-item-title>
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

        <v-list-item router to="/saved" link>
          <v-list-item-icon>
            <v-icon>bookmark</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Saved</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
</style>