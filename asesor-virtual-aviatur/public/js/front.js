
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBBfVjZbxOUtzNdpTUfCRNRj1pBcIGKRzI",
    authDomain: "asesor-virtual-aviatur.firebaseapp.com",
    databaseURL: "https://asesor-virtual-aviatur.firebaseio.com",
    projectId: "asesor-virtual-aviatur",
    storageBucket: "asesor-virtual-aviatur.appspot.com",
    messagingSenderId: "900213313534",
    appId: "1:900213313534:web:7f754d7744283f6002baaf",
    measurementId: "G-PPGTS5B5GT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var app = new Vue({
  el: '#app',
  data: {
    advisers: []
  },
  methods: {
    getAdvisers: function () {
      firebase.database().ref('adviser/').once('value').then((snapshot)=> {
        this.advisers=snapshot.val()
      })
    }
  },
  beforeMount: function () {
    this.getAdvisers()
  }
})
