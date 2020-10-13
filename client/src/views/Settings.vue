<template>
  <v-container fluid class="m-5">
    <v-row>
      <v-col
        v-for="(item, index) in 1"
        v-bind:key="index"
        col="12"
        md="10"
        class="mx-auto"
      >
        <v-card color="#000839" dark :loading="isUpdating">
          <template v-slot:progress>
            <v-progress-linear
              absolute
              color="green lighten-3"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>
          <!-- <v-img height="200" src="../assets/wp2284195.jpg">
            <v-row>
              <v-row class="pa-4" align="center" justify="center">
                <v-col class="text-center"></v-col>
              </v-row>
            </v-row>
          </v-img> -->
          <v-form>
            <v-container class="mx-auto"> 
              <v-row class="justify-center">
                <v-col cols="12" md="4" >
                  <v-color-picker v-model="color"></v-color-picker>
                <v-sheet dark class="pa-4"  max-width="300" min-width="">
                  <pre>{{ showColor }}</pre>
                </v-sheet>
                </v-col>
            
              </v-row>
            </v-container>
          </v-form>
         </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    autoUpdate: true,

    isUpdating: false,

    title: "The summer breeze",
    types: ["hex", "hexa", "rgba", "hsla", "hsva"],
    type: "hex",
    hex: "#FF00FF",
    hexa: "#FF00FFFF",
    rgba: { r: 255, g: 0, b: 255, a: 1 },
    hsla: { h: 300, s: 1, l: 0.5, a: 1 },
    hsva: { h: 300, s: 1, v: 1, a: 1 },
  }),

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },

  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
  computed: {
    color: {
      get() {
        return this[this.type];
      },
      set(v) {
        this[this.type] = v;
      },
    },
    showColor() {
      console.log(this.color);
      if (typeof this.color === "string") return this.color;

      return JSON.stringify(
        Object.keys(this.color).reduce((color, key) => {
          color[key] = Number(this.color[key].toFixed(2));
          return color;
        }, {}),
        null,

      );
    },
  },
};
</script>
