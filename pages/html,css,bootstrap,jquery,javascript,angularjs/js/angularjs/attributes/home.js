// Home
// 

// AngularJS controllers control the application
app1.controller('ctrl_home', function($scope){
	
	$scope.home = [
		{header: 'Seeking', 
			info: 'Entry Level Software Engineer Position'},
		{header: 'Education', 
			info: 'Bachelor\'s Degree in Computer Science'},
		{header: 'Email (preferred)', 
			mail: 'mailto:james.patterson@themerakicode.com', 
			info: 'james.patterson@themerakicode.com'},
		{header: 'Phone', 
			info: '(470) 383-1136'},
		{header: 'Github', 
			url1: 'http://github.com/xrzy1985',
			tooltip1: 'This is my personal GitHub.',
			info1: 'xRzy1985', 
			url2: 'http://github.com/noworrieswoodworking',
			tooltip2: 'This is my small business\' github, where I update our site regularly, and as often as necessary.',
			info2: 'NoWorriesWoodWorking'},
		{header: 'LinkedIn', 
			url: 'https://www.linkedin.com/in/james-patterson-933843133/',
			info: 'james-patterson-933843133'},
		{header: 'Web Application', 
			url: 'https://www.themerakicode.com', 
			tooltip: 'A social based programming tutorial website hosted on PythonAnywhere.com; featuring Python 3.5, Flask, Jinja2, HTML, CSS, Bootstrap 3, Javascript, and AngularJS.',
			info: 'The Meraki Code'},
		{header: 'Small Business', 
			url: 'https://noworrieswoodworking.github.io', 
			tooltip: 'A website hosted on Github for my small business, No Worries Wood Working. The site features HTML, CSS, Bootstrap 4, and Javascript.',
			info: 'No Worries Wood Working'},
		{header: 'HackerRank',
			url: 'https://www.hackerrank.com/xRzy85', 
			tooltip: 'HackRank is a website that allows users to solve CS related problems outside of the college environment.', 
			info: 'xRzy85'}
	];
	
	$scope.home_info = [
		'Entry Level Software Engineer Position ',
		''
	];
	
})