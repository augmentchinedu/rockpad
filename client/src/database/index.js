import Vue from "vue";
import Vuex from "vuex";
import db from "./db";

// db = db.collection("version1")
// db.collection("version1")
//   .doc("metadata")
//   .set({
//     categories: ["ficion", "romance", "action", "history"]
//   })
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   });
db.get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {}
});
