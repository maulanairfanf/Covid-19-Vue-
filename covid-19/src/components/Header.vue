<template>
  <nav class="">
    <v-toolbar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer "></v-app-bar-nav-icon>
      <v-toolbar-tittle class="grey-text">
        <span>Covid-19</span>
      </v-toolbar-tittle>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      items: [
        { route: "/", title: "Home", icon: "home" },
        { route: "/about", title: "About", icon: "info" },
        { route: "/saved", title: "Saved", icon: "bookmark" },
      ],
    //   mini: true
    };
  },
};
</script>