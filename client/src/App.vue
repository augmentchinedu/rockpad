<template>
  <v-app app class="grey lighten-4">
    <nav>
      <v-app-bar app text>
        <v-app-bar-nav-icon
          class="grey--text"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <!-- <span class="font-weight-light">Todo</span> -->
          <span class="font-weight-900">Pexmon</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn text class="grey" @click="signOut">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app color="#000839">
        <v-layout column align-center>
          <v-flex class="mt-5" align-center>
            <v-col>
              <v-avatar size="100" ml-3>
                <img src="./assets/pexmon.png" alt />
              </v-avatar>
            </v-col>
            <p class="white--text text-center subheading mt-1">
              {{ $store.state.hostname }}
            </p>
          </v-flex>
          <!-- <v-flex class="mb-3">
          <popup />
          </v-flex>-->
        </v-layout>

        <!-- <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.icon"
            v-bind:to="item.route"
          >
            <v-list-item-action class="ml-5">
              <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
      </v-navigation-drawer>
    </nav>
    <v-main class="mx-4 mb-4 mt-4">
      <!-- <router-view></router-view> -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        drawer: false,
        items: [
          // { title: "Home", icon: "aspect_ratio", route: "/home" },
          // { title: "About", icon: "account_circle", route: "/about" },
          // { title: "Expertise", icon: "apartment", route: "/expertise" },
          // { title: "Projects", icon: "folder_open", route: "/projects" },
          // { title: "Team", icon: "people", route: "/team" },
          // { title: "Counter", icon: "people", route: "/counter" },
          // { title: "Contact", icon: "contact_phone", route: "/contact" },
          // { title: "Logo", icon: "branding_watermark", route: "/logo" },
          // { title: "Languages", icon: "g_translate", route: "/languages" },
          // { title: "Settings", icon: "settings", route: "/settings" }
        ],
        color: "#fead15",
        colors: ["blue"],
        right: false,
        miniVariant: false,
        expandOnHover: false,
        background: true
      };
    },
    computed: {
      bg() {
        return this.background
          ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
          : undefined;
      }
    },
    mounted() {
      console.log({
        apiKey: process.env.VUE_APP_API_KEY,
        authDomain: process.env.VUE_APP_AUTH_DOMAIN,
        databaseURL: process.env.VUE_APP_DATABASE_URL,
        projectId: process.env.VUE_APP_PROJECT_ID,
        storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
        appId: process.env.VUE_APP_APP_ID,
        measurementId: process.env.VUE_APP_MEASUREMENT_ID
      });
    },
    methods: {
      signOut() {
        location.reload();
      }
    }
  };
</script>

<style>
  #app {
    font-family: "Nunito", sans-serif !important;
  }
</style>
