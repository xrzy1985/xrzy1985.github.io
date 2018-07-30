var config = {
	
	apiKey: "AIzaSyANNksn5w6ebGP-hinHibwKz1er3UVz7DE",
    authDomain: "portfolio-xrzy.firebaseapp.com",
    databaseURL: "https://portfolio-xrzy.firebaseio.com",
    projectId: "portfolio-xrzy",
    storageBucket: "portfolio-xrzy.appspot.com",
    messagingSenderId: "264341910138"	
};

firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

var path = 'portfolio/header';
var ref = database.ref(path);
ref.on('value', getData, errData);


function getData(data){
	var info = data.val();
	var keys = Object.keys(info);
	
	for(var i = 0; i < keys.length; i++)
	{
		// find out the key 
		var k = keys[i];
		var n = info[k];
		document.getElementById(k).innerHTML = n;
	}	
}

// To return an error to the console for viewing
function errData(err){
	console.log("Error");
	console.log(err);
}

var me = {
	firstName:"James", 
	lastName:"Patterson", 
	age:32, 
	email: "james.patterson@themerakicode.com",
	info: "Kennesaw State University · College of Computing and Software Engineering",
	website: "the meraki code",
	fullName : function() {
        return this.firstName + " " + this.lastName;
    }	
};

var navLinks = ["Home", "About", "Goals", "Projects", "Skills", "Strengths"];

var baseHeaders = ["Information", "About", "Goals", "Projects", "Skills", "Strengths"];

							  
var ii;
for (ii = 0; ii < navLinks.length; ii++) {
	var temp = "navLink";
	var t = temp.concat(ii);
    document.getElementById(t).innerHTML = navLinks[ii];
} 

var j;
for (j = 0; j < baseHeaders.length; j++) {
	var temp = "baseHeader";
	var t1 = temp.concat(j);
    document.getElementById(t1).innerHTML = baseHeaders[j];
}

// document.getElementById("shade_white_home").innerHTML = "Portfolio";

//document.getElementById("shade_white_header_name").innerHTML = me.fullName();

//document.getElementById("shade_white_header_info").innerHTML = me.info;


