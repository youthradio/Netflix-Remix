var currentPage = 1;
var answers = [];

/*
//When any button of the answer div is clicked, add the specific click's text to the answer array

$('.answers').click(function() {
	answers += (event.target.firstChild.nodeValue) + ", ";
	console.log(answers);

	if (currentPage == 1) {

	currentPage = currentPage + 1;
	changePage(currentPage);
	console.log(currentPage);
	}

	else if (currentPage == 2) {

	currentPage = currentPage + 1;
	changePage(currentPage);
	console.log(currentPage);
	}

}); */

function nextPage(npage){
	var buttonel = document.createElement('div');
	Object.entries(dataPack[npage]).forEach(function(ele){
		var buttonText = document.createElement('button')
		buttonText.innerHTML = ele[1]
		buttonel.appendChild(buttonText)
	});
	var answerSection = document.querySelector("#slide1")
	answerSection.innerHTML = ''; //Quickly cleans the HTML content inside the slide
	answerSection.appendChild(buttonel)
	answerSection.addEventListener('click', function(event) {
		console.log(event.target.firstChild.nodeValue);
		answers += (event.target.firstChild.nodeValue) + ", ";
		currentPage = currentPage + 1
		nextPage(currentPage)
	});
};

$(document).ready(function(){
	nextPage(1);
});
