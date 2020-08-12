<template>
  <nav class>
    <v-toolbar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer "></v-app-bar-nav-icon>
      <v-toolbar-title class="grey-text">
        <span>Covid-19</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item to="/" link>
        <v-list-item-icon>
          <v-icon>home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/about" link>
        <v-list-item-icon>
          <v-icon>info</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/saved" link>
        <v-list-item-icon>
          <v-icon>bookmark</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Saved</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      // items: [
      //   { route: "/", title: "Home", icon: "home" },
      //   { route: "/about", title: "About", icon: "info" },
      //   { route: "/saved", title: "Saved", icon: "bookmark" },
      // ],
      //   mini: true
    };
  },
};
</script>