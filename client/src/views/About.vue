<template>
  <v-container fluid class="m-5">
    <v-container class="grey lighten-5 mt-3">
      <v-row no-gutters class="justify-center" wrap>
        <v-btn
          color="success ma-3"
          :loading="isUpdating"
          depressed
          @click="isUpdating = true"
        >
          <v-icon left>update</v-icon>Update Now
        </v-btn>
        <v-btn color="success ma-3" depressed>
          <v-icon left>remove</v-icon>Remove a card !
        </v-btn>
        <v-btn color="success ma-3" depressed>
          <v-icon left>add</v-icon>
          <span>Add a new card!</span>
        </v-btn>
      </v-row>
    </v-container>

    <v-row>
      <v-col col="12" md="6" class="mx-auto">
        <v-card
          color="#000839"
          dark
          :loading="isUpdating"
          style="min-height: 500px"
        >
          <template v-slot:progress>
            <v-progress-linear
              absolute
              color="green lighten-3"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="12" class="mb-5">
                  <v-text-field
                    class="mt-4"
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    color="blue-grey lighten-2"
                    label="Header"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" class="mb-5">
                  <v-textarea
                    :disabled="isUpdating"
                    outlined
                    shaped
                    rows="8"
                    class="mt-5 "
                    filled
                    color="blue-grey lighten-2"
                    label="Paragraph"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="12" class="mt-5">
                  <v-text-field
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    class="mt-5"
                    color="blue-grey lighten-2"
                    label="Button"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <v-col col="12" md="6" class="mx-auto">
        <v-card
          color="#000839"
          dark
          :loading="isUpdating"
          style="min-height: 555px"
        >
          <template v-slot:progress>
            <v-progress-linear
              absolute
              color="green lighten-3"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img height="200" src="../assets/wp2284195.jpg">
            <v-row>
              <v-row class="pa-4" align="center" justify="center">
                <v-col class="text-center"></v-col>
              </v-row>
            </v-row>
          </v-img>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <v-file-input
                    label="File input"
                    outlined
                    shaped
                    filled
                    prepend-icon="insert_drive_file"
                  ></v-file-input>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    color="blue-grey lighten-2"
                    label="Title"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" class="mb-5">
                  <v-textarea
                    :disabled="isUpdating"
                    outlined
                    shaped
                    rows="4"
                    filled
                    color="blue-grey lighten-2"
                    label="Paragraph"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
     
      <v-col col="12" md="6" class="mx-auto">
        <v-card
          color="#000839"
          dark
          :loading="isUpdating"
          style="min-height: 555px"
        >
          <template v-slot:progress>
            <v-progress-linear
              absolute
              color="green lighten-3"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img height="200" src="../assets/wp2284195.jpg">
            <v-row>
              <v-row class="pa-4" align="center" justify="center">
                <v-col class="text-center"></v-col>
              </v-row>
            </v-row>
          </v-img>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <v-file-input
                    label="File input"
                    outlined
                    shaped
                    filled
                    prepend-icon="insert_drive_file"
                  ></v-file-input>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    color="blue-grey lighten-2"
                    label="Name"
                  ></v-text-field>
                </v-col>
             
                <v-col cols="12" md="12">
                  <v-text-field
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    color="blue-grey lighten-2"
                    label="Office"
                  ></v-text-field>
                </v-col>
             
                <v-col cols="12" md="12">
                  <v-text-field
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    color="blue-grey lighten-2"
                    label="Text"
                  ></v-text-field>
                </v-col>
             
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
     
      <v-col col="12" md="6" class="mx-auto">
        <v-card
          color="#000839"
          dark
          :loading="isUpdating"
          style="min-height: 555px"
        >
          <template v-slot:progress>
            <v-progress-linear
              absolute
              color="green lighten-3"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img height="200" src="../assets/wp2284195.jpg">
            <v-row>
              <v-row class="pa-4" align="center" justify="center">
                <v-col class="text-center"></v-col>
              </v-row>
            </v-row>
          </v-img>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <v-file-input
                    label="File input"
                    outlined
                    shaped
                    filled
                    prepend-icon="insert_drive_file"
                  ></v-file-input>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    color="blue-grey lighten-2"
                    label="Name"
                  ></v-text-field>
                </v-col>
             
                <v-col cols="12" md="12">
                  <v-text-field
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    color="blue-grey lighten-2"
                    label="Office"
                  ></v-text-field>
                </v-col>
             
                <v-col cols="12" md="12">
                  <v-text-field
                    :disabled="isUpdating"
                    outlined
                    shaped
                    filled
                    color="blue-grey lighten-2"
                    label="Text"
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

      title: "The summer breeze",
    };
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },

  methods: {
    shortenText: (text) => `${text.split(" ", 9).join(" ")} ...`,
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
};
</script>
