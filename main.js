var currentPage = 0;
var answers = [];



function nextPage(npage) {

    if (currentPage < dataPack.length) {
    //checks if the current page's number isn't succeeding of the package's array count

        var optionText = document.createElement('div');
        var questionTitle = document.createElement('h1');
        questionTitle.classList.add('title');
        questionTitle.innerHTML = dataPack[npage].question;
        Object.entries(dataPack[npage].options).forEach(function(ele) {
            var buttonText = document.createElement('button')

            buttonText.innerHTML = ele[1]
            buttonText.dataset.key = ele[0]
            optionText.appendChild(buttonText)
        });
        var answerSection = document.querySelector("#slide1")
        $(answerSection).empty()
        answerSection.appendChild(questionTitle)
        //answerSection.innerHTML = ''; //Quickly cleans the HTML content inside the slide
        answerSection.appendChild(optionText)
        optionText.addEventListener('click', function(event) {
            answers.push([event.target.dataset.key, event.target.innerHTML])
            console.log(answers)
            currentPage++
            nextPage(currentPage)
        });

    } else {
        var answerSection = document.querySelector("#slide1")
        $(answerSection).empty()
    	answerSection.innerHTML = " HEHEHHEEHHEHEHx"
    }
};

$(document).ready(function() {
    nextPage(0);
});