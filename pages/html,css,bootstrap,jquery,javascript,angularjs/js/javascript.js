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

							  
var i;
for (i = 0; i < navLinks.length; i++) {
	var temp = "navLink";
	var t = temp.concat(i);
    document.getElementById(t).innerHTML = navLinks[i];
} 

var j;
for (j = 0; j < baseHeaders.length; j++) {
	var temp = "baseHeader";
	var t = temp.concat(j);
    document.getElementById(t).innerHTML = baseHeaders[j];
}

// document.getElementById("shade_white_home").innerHTML = "Portfolio";

// document.getElementById("shade_white_header_name").innerHTML = me.fullName();

// document.getElementById("shade_white_header_info").innerHTML = me.info;


