<template>
  <v-container fluid class="m-5">
    <v-container class="grey lighten-5 mt-3 ">
      <v-row no-gutters class="justify-center" wrap>
       <v-btn
        color="success ma-3"
        :loading="isUpdating"
        depressed
        
        @click="isUpdating = true"
      >
        <v-icon left>update</v-icon>Update Now
      </v-btn>
       </v-row>
    </v-container>

    <v-row>
      <v-col v-for="(item, index) in 1" v-bind:key="index" col="12" md="12" class="mx-auto">
        <v-card color="#000839" dark :loading="isUpdating">
          <template v-slot:progress>
            <v-progress-linear absolute color="green lighten-3" height="4" indeterminate></v-progress-linear>
          </template>

          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    value="2 Eastbourne Paddington, London W2 6AA UK"
                    color="blue-grey lighten-2"
                    label="Address"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    value="(+447) 4800 5823"
                    color="blue-grey lighten-2"
                    label="Phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    value="info@flutterarchitects.com"
                    color="blue-grey lighten-2"
                    label="Email"
                  ></v-text-field>
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
  data() {
    return {
      autoUpdate: true,

      isUpdating: false,

      title: "The summer breeze"
    };
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  },

  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    }
  }
};
</script>
