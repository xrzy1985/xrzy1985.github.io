$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

var config = {
	
	apiKey: "AIzaSyANNksn5w6ebGP-hinHibwKz1er3UVz7DE",
    authDomain: "portfolio-xrzy.firebaseapp.com",
    databaseURL: "https://portfolio-xrzy.firebaseio.com",
    projectId: "portfolio-xrzy",
    storageBucket: "portfolio-xrzy.appspot.com",
    messagingSenderId: "264341910138"
	
};

firebase.initializeApp(config);
