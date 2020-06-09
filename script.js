function submitAnswers(){
	var total = 5;
	var score = 0;

	var firstname = document.forms["quizForm"]["firstName"].value;
	var sex = document.forms["quizForm"]["sex"].value;


	//Get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	
	
	//validation
	
	for(i=1;i <= total; i++){

		if(eval('q' + i) == null || eval('q' + i) == ''){
			alert('You missed question ' + i);
			return false;
		}	
	}
	//Set Correct Answers
	var correctanswers = ["b","a","d","b","d"];

	//check answers
	for(i = 1; i <= total; i++){
		if(eval('q' + i) == correctanswers[i - 1]){
			score++;
		}
	}
	//Display the results
	var results = document.getElementById('results');
	
	var single = document.forms["quizForm"]['single'].value;
	var married = document.forms['quizForm']['married'].value;
	var s = '';
	if(s == single ){
		s = single;
	results.innerHTML = '<h3>' + firstname + ' a ' + sex +' and ' + s + ' scored <span>' + score + '</span> out of <span>' + total + '</span>';
	}else {
		s = married;
		results.innerHTML = '<h3>' + firstname + ' a ' + sex +' and ' + s + ' scored <span>' + score + '</span> out of <span>' + total + '</span>';
	}
	//get the answers of the tester
	var x = [];
	for(i = 0; i <5; i++){
		x[i] = eval('q' + (i+1));		
	}
	var y = document.getElementById("answers1").innerHTML = '<h3> Your answers are ' + x;
	

	return false;

}