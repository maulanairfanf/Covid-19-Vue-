<template>
  <nav class>
    <v-toolbar flat app>
      <v-app-bar-nav-icon app @click="drawer = !drawer "></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="name-app">CovInfo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <ShareNetwork
        v-for="network in networks"
        :network="network.network"
        :key="network.network"
        :url="sharing.url"
        :title="sharing.title"
      >
        <v-btn icon>
          <v-icon :class="network.icon" :color="network.color">mdi-fecebook</v-icon>
        </v-btn>
      </ShareNetwork>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary class="grey lighten-5">
      <v-list nav>
        <v-list-item router to="/" link>
          <v-list-item-icon>
            <v-icon color="black">home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router to="/about" link>
          <v-list-item-icon>
            <v-icon color="black">info</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router to="/prevent" link>
          <v-list-item-icon>
            <v-icon color="black">security</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Prevent</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router to="/impact" link>
          <v-list-item-icon>
            <v-icon color="black">warning</v-icon>
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
      sharing: {
        url: "https://covid-19-maulana.netlify.app/",
        title: "Hi ingin tau lebih banyak tentang covid-19, lets check",
        // description:
        //   'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
        // quote: "The hot reload is so fast it's near instant. - Evan You",
        // hashtags: "vuejs,vite,javascript",
        // twitterUser: "youyuxi",
      },
      networks: [
        {
          network: "facebook",
          name: "Facebook",
          icon: "mdi-facebook",
          color: "#1877f2",
        },
        {
          network: "twitter",
          name: "Twitter",
          icon: "mdi-twitter",
          color: "#1da1f2",
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: "mdi-whatsapp",
          color: "#25d366",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
nav {
  font-family: "Nunito Sans", sans-serif;
}

.name-app {
  font-family: "Open Sans", sans-serif;
  font-size: 26px;
}
</style>

    // :description="sharing.description"
    //     :quote="sharing.quote"
    //     :hashtags="sharing.hashtags"
    //     :twitterUser="sharing.twitterUser"