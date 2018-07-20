function changePage (a){

	if (a == 1) {
	$('#slide1').find('#title').text(questionData.one);
	$('.answers').find('#a1').text(answerDataOne.one);
	$('.answers').find('#a2').text(answerDataOne.two);
	$('.answers').find('#a3').text(answerDataOne.three); }

	if (a == 2) {
	$('#slide1').find('#title').text(questionData.two);
	$('.answers').find('#a1').text(answerDataTwo.one);
	$('.answers').find('#a2').text(answerDataTwo.two);
	$('.answers').find('#a3').text(answerDataTwo.three); }

	if (a == 3) {
	$('#slide1').find('#title').text(questionData.three);
	$('.answers').find('#a1').text(answerDataThree.one);
	$('.answers').find('#a2').text(answerDataThree.two);
	$('.answers').find('#a3').text(answerDataThree.three); }
}