var skills = {
	
	name: skills,
	
	skillsHeaders: ["Programming Languages and Frameworks", 
					"Top 5 Languages I'm Comfortable using", 
					"Database Management Experience", 
					"SQL Query Experience",
					"Software Engineering",
					"Software Methodologies", 
					"Information Technology",
					"Encryption and Decryption",
					"Operating Systems Experience",
					"Microsoft Application Suite",
					"IDE and Design Tools"
					 ], 
	skills0: "Visual Basic, Java, C++, C#, Python, SQL, HTML, CSS, Bootstrap, Javascript, AngularJS, Django, Flask, Jinja2",
	skills1: "C#, Python, Java, Visual Basic, SQL",
	skills2: "SQLite3, Oracle 8.x, MySQL Server, Sql Alchemy",
	skills3: "Basic SQL Commands, functions, Joins, Statements, and Database Management",
	skills4: "Requirements gathering, planning, proper time line establishment, dynamic problem solving skills, proper documentation of projects, and finalization of projects on time",
	skills5: "Agile, Waterfall, Extreme Programming",
	skills6: "Database management, Encryption techniques, Web application attack prevention, Hash algorithms",
	skills7: "Public, Private, and Hybrid key, AES 256/512 bit, digital signatures",
	skills8: "Microsoft Windows based systems, and short term uses with Linux and Mac OS",	
	skills9: "Word, Powerpoint, Excel",
	skills10: "Atom, CMD, Notepad++, Dia, Eclipse, JGrasp, Visual Studio, Net beans, PyCharm, Gimp, Unity Engine"
	
};
							  
var sk;

for (sk = 0; sk < skills.skillsHeaders.length; sk++) {
	var temp = "skillsHeaders";
	var t = temp.concat(sk);
    document.getElementById(t).innerHTML = skills.skillsHeaders[sk];
}
	
document.getElementById("skills0").innerHTML = skills.skills0;
document.getElementById("skills1").innerHTML = skills.skills1;
document.getElementById("skills2").innerHTML = skills.skills2;
document.getElementById("skills3").innerHTML = skills.skills3;
document.getElementById("skills4").innerHTML = skills.skills4;
document.getElementById("skills5").innerHTML = skills.skills5;
document.getElementById("skills6").innerHTML = skills.skills6;
document.getElementById("skills7").innerHTML = skills.skills7;
document.getElementById("skills8").innerHTML = skills.skills8;
document.getElementById("skills9").innerHTML = skills.skills9;
document.getElementById("skills10").innerHTML = skills.skills10;