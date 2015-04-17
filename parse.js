load('questions.js');

var data = JSON.parse(multiple);


(function cool(word) {
for (var i = 0;i < 7; i++) {
	var ques = data[i];
     print(JSON.stringify(ques.text));  
     //print('\n the answer is ' + JSON.stringify(ques.answer) + '\n'); 

   for (var j =0;j < 4; j++) {
   	print('    ' + JSON.stringify(ques.decoys[j]));
   }
}

})();

