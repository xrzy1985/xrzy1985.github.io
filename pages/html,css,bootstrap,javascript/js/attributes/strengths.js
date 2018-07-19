var strengths = {
	
	name: strengths,
	
	strengthsHeaders: ["GUI / UI Design", "Object Oriented Principles", "Security", "Web Applications"],

	strengths_gui: `
		A well built GUI/UI shouldn't need instructions if the design is
		correctly built. I make efforts to decrease any learning curve
		on the applications I've been apart of. I strive to increase the
		aesthetics associated with the applications, create an interface
		that requires no additional reading, and amplify the security of
		the application to the best of my ability.
		`,
		
	strengths_oop: `
		I have the knowledge to construct OOP functions, methods, various
		data structures, recursion, and so on. The languages I'm familiar
		with are C#, C++, Java, and Python. I plan on researching the model
		view control method to further my understanding of how web applications
		function on a larger scale.
		`,
	
	strengths_security: `
		A working knowledge of security standards is a good weapon for
		any programmer to have. The ability to use encryption and decryption
		algorithms to encrypt information, securely store sensitive information,
		and decrypt the information without storing any plain text data on the
		database. The importance of attempting to prevent phishing, SQL injection,
		cross-site scripting, denial of service, and man in the middle attacks are
		vital to any web application developer.
		`,

	strengths_web_applications: `
		Web applications are becoming the norm with information being
		store progressively on the cloud. Programmers are opting to create web applications
		that would not require any software downloads, instead websites are
		being designed to work as fully fledged applications. Micro
		frameworks, such as Django and Flask, utilize the model, view,
		and control method to achieve their goal. The encryption standards
		have been raised higher than ever before with 512 and 1024 bit
		encryption techniques taking center stage.
	`	
};
							  
var str;

for (str = 0; str < strengths.strengthsHeaders.length; str++) {
	var temp = "strengthsHeader";
	var t = temp.concat(str);
    document.getElementById(t).innerHTML = strengths.strengthsHeaders[str];
}
	
document.getElementById("strengths_gui").innerHTML = strengths.strengths_gui;
document.getElementById("strengths_oop").innerHTML = strengths.strengths_oop;
document.getElementById("strengths_security").innerHTML = strengths.strengths_security;
document.getElementById("strengths_web_applications").innerHTML = strengths.strengths_web_applications;