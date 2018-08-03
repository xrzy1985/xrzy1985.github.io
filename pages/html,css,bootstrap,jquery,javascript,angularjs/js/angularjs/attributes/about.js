// Home

app1.directive("idk", function(){
	
	// $scope.str = 'about[' + 0 + ']';
	
	return{
		template: 
		`
			<b class="shade"> 
				{{ about[0].first }}
			</b> 
			
			{{ about[0].second }} 
		`
	};
});

// AngularJS controllers control the application
app1.controller('ctrl_about', function($scope){
	
	$scope.paragraph1 = {
		first: 'I am a graduate', 
		second: ''
	};
	
	$scope.url = 'https://noworrieswoodworking.github.io';
	
	$scope.about = [
	
		{
			url: 'images/profile.jpg', 
			first: 'I am a graduate', 
			second: `
					of Kennesaw State University\'s College of Computing and Software Engineering 
					with a 3.71 GPA, where I majored in computer science. I started out at Dalton 
					State College in Dalton, Ga. I proceeded to work, study, and finish an associate
					degree at DSC before moving to Kennesaw to attend Southern Polytechnic State
					University to start work on a B.S. in Computer Science. SPSU was eventually merged
					with Kennesaw State University, and that is how I became a Kennesaw State University student.
					I was always fascinated by technology, and especially how technology can modify our life for the better.
					`
											}, 
		{
			first: 'After graduation', 
			second: `
					, my grandfather surprised me with a large sum of money to travel with. So, 
					we ended up traveling across the US to California, and back to Atlanta. I then
					took a flight to Italy to stay with some family, where I fell into the tourist role; rowing along the Venice canals,
					dreaming of the fights held in the Colosseum, and getting to actually see Mount Vesuvius from Pompeii was amazing. I
					ended up befriending a group of Australians while I was traveling southern Italy on a motorbike in Bari,
					who ended up offering me a place to stay outside of Melbourne. So, I took the next cheapest flight to Australia.
					My friend Steve took me all along the Gold Coast to watch people surf with great white sharks, we ate
					fresh fish I've never heard of, and we even drank a few cold ones with a wallaby. The mates and I traveled
					to New Zealand, off the North Island's Bay of Plenty specifically, to see the amazing views. We saw Auckland,
					Hobbiton, but camping deep in the Fiordland National Park was out of this world. Milford Sound is by far the
					most incredible view I've ever seen, outside of Margot Robbie. All in all, I had spent 3 months in Italy with
					my second Uncle, and six months living with Steve in Hopper's Crossing. I officially came back to the western
					world in October, and I still had some money left over. The plan was to arrive back in Texas, visit my cousin
					and her kids before coming back home, but I didn't want the ride to end yet. I ended up signing up for a bus trip
					along the Eastern coast of Mexico to the Ria Celestun National Park. I met some of the nicest people through
					my travels, and without those people I would have came home much sooner than I did. I will always cherish these
					memories, experiences, and try to build upon those each and every day.
		`},
		{
			first: 'I had to return home early', 
			second: `
					, due to my grandfather being diagnosed with stage 4 
					prostate cancer. I returned to the States in January, where I stayed with him until his inevitable 
					passing. I'm glad I got to spend the majority of the last year of my life with him, and I'll be 
					looking forward to the day that we meet again. My grand father taught me almost everything I know today.
					He taught me how to be honest, how to hunt, how to fish, how to cook, how to clean, how to talk to women,
					and most importantly he taught me how to have integrity. People always ask me where I want to be in five 
					years, but my answer is always the same; happy. I want to be happy with life, happy with my arangements, 
					and happy with my work. I can rest easily at night knowing that I worked hard in college, worked 40+ hours
					a week while attending school, and still graduated with a 3.71 GPA. I wasn't lucky enough to find an internship
					while I was in college, but I'm not going to let that stop me. In the meantime...
		`},
		{
			website: $scope.url,
			first: 'I started a small business', 
			second: `, that I own and operate out of my garage. The shop goes by the name,`,
			third: `
					. I actually discovered my love for wood working while I was in Australia. I helped my mate, Steve, build 
					a whole new addition to the north face of his home. Steve showed me some tips and tricks to apply to 
					wood working to help me become a better carpenter. I love wood working because it allows me to be creatively
					free, work under pressure, work within constraints, manage my time more effectively, make money, and a 
					by product of the business is my happiness. I ended up building small projects here and there,
					developing a great reputation among clients, and now I actually have to turn business down. Although, I do
					use the money to pay bills, I do the work because I love to, and I don't want to exhaust that option. 
					I'm not currently working in the IT field, but I will find the right fit for myself somewhere. Wood working 
					isn't the only projects I've had up my sleeve. 
		`},
		{
			first: 'Since I have been stateside', 
			second: `
					, the main focus has been to learn as much technology as I possibly can. The first official language that caught 
					my eye was C#, and I can not believe I waited this long to learn the object oriented language. C# is a Turring 
					complete language, easy to use syntax, and can be used to help develop web applications through .Net, desktop applications, 
					APIs, video games using Unity, and now with Xamarin forms, a developer can create cross platform applications on iOS, 
					Android, and Windows platforms. Xamarin has, using C# and Visual Studio, changed the app game for me. I use to be limited 
					to not learning how to develop on media devices due to my processing power, but Xamarin has solved those issues. I'm 
					able to design forms, write code, test, debug, and fix issues dynamically using Visual Studio, a usb cable, and my 
					iPhone device. I have also touched on a bit of scripting using Unity to create my own copy of a few well known titles; 
					space invaders, pac man, and super mario brothers is in works eventually. My experience with front end development was 
					limited in college. It wasn't until I was well into a senior level classes that I encountered any front end development. 
					The majority of the projects developed up to that point were desktop applications, mobile designs, tedious coding assignments,
					and plenty of SQL statements. The project I was apart of had two major issues throughout development. The first was our 
					initial choice in frameworks. We all decided that we wanted to develop in a language we haven't before, learn a new technique,
					and apply the knowledge in unique ways. The problem was, we were unfamiliar with Django framework, Python, and web development
					in general. Django proved to be too easily broken by every little thing. The second issue was that half of our group never 
					showed up, didn't contribute, and failed the class. So, we ended up developing in a framework that put us behind schedule,
					the team went from having a product owner, team lead, graphic designer, and two programmers to just having a programmer and
					a graphic designer. We worked well together though. I've ran into issues along the way in college, but I always over came 
					the situation. Junior year was when I took computer organization and architecture, and the partner I was paired with did 
					not reply to any contact I sent. I could've let that bother me, hold me back, and hurt me in the long run. I went down a 
					different path though. I studied for exams, learned how to bread board, wrote a small python script to test the hardware I built, 
					and then rewrote the Python code in an assembly language to push onto the MSP-430's motherboard. I focused on object oriented 
					programming principles, backend capabilities, and algorithms primarily throughout my time at University.  The more complex projects I was apart of used the agile methodology further;
					breaking tasks down into individual modules, proper requirements gathering, scrum meetings, and accountability. I always enjoyed
					working within a group of people, each individual has their own strengths, and those strengths could be your weakness. By pairing up,
					the two of you can properly overcome any problem. 
		`},
		{
			first: 'The future', 
			second: `
					 is looking up in every way possible. I have a set plan in action, I'm working on learning new skills that will 
					help me achieve my short term goals, and currently waiting for the right opportunity to arise. I'm a hard working 
					individual with great work references, from the work that I've been apart of, and I do not have a problem finding 
					a job to support myself. The restaurant I work at, my wood working shop, and part time web consulation is currently
					providing me enough comfort to wait for the right opportunity to present itself. I have noticed that I need to stop
					applying for jobs that I know I am definitely not qualified for, like mid level software developer positions, but I 
					always have the idea that maybe I can interview anyway or they might have an entry level position available. Any chance
					I can get to progress my career, I will take, and I will be successful through hard work, dedication, and accountability. 
		`},
	];
	
})