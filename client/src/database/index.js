import Vue from "vue";
import Vuex from "vuex";
import db from "./db";

db.doc("data")
  .set({
    categories: ["ficion", "romance", "action", "history"],
    name: "Thanks"
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    init:()=>{
    }
  }
});
