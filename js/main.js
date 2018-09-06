//Inital variables
const $ = (s) => document.querySelector(s)
var currentPage = 0;
var answers = [];
var answerSection = document.querySelector(".pie")

//Functions

function nextPage(npage) {

    if (currentPage < dataPack.length) {
        //checks if the current page's number isn't succeeding of the package's array count

        var questionTitle = document.querySelector("#question-title") //have to make
        questionTitle.innerHTML = dataPack[npage].question;

        dataPack[npage].options.forEach(function(obj, index) {
            var buttonText = document.querySelector('button')
            var opt = document.querySelector('#opt-' + (index + 1))
            var image = document.querySelector(`#img-${index + 1} image`)


            image.setAttribute('xlink:href', obj.url)
            opt.dataset.key = obj.label
            opt.innerHTML = obj.label
            /*console.log(obj.label)*/


        });

        var fF = document.querySelector('#fun-fact-text')
        /*fF.innerHTML = dataPack[npage].funFact.fact*/
        fF.innerHTML = funFactPack[npage].fact

    } else {
        //evaluate the response, look on moviesData to find the tags
        console.log(answers)
        //loops over all the movie data
        //runs filter, function return true or false
        //if true the movie has all the tags
        var response = moviesData.filter(function(movie) {
            //for each movie, go over all the answers and check if each one(every) is on one of the movies and return which movie has all then or none of them
            return answers.every(function(answer) { //this return is for the filter function
                //every is a prototype function, return true if all tests for
                //all answers is true
                //for each answer find if its on the movie
                //get the movie tags values, not the keys
                return Object.values(movie.tags).includes(answer[1]) // this return is for the
                //the every function
            })
        })
        console.log(response)
        if (response.length == 1) {

            $("#pie-page").hidden = true;
            $("#results-page").hidden = false;
            $("#options").hidden = false;
            $("#question-title").hidden = true;


            var movieTitle = response[0].name
            var movieDesc = response[0].description
            var movieURL = response[0].video

            console.log(movieDesc)

            $('#title').innerHTML = movieTitle
            $('#description-1').innerHTML = movieDesc
            $('#video-url').src = movieURL
        } else if (response.length > 1) {

            //For outcomes that provide more than a single film, randomize a selection in that array

            var singleResponse = function() {
                var rProcess = response[Math.floor(Math.random() * response.length)];
                return rProcess;
            }

            //Call the function


            $("#pie-page").hidden = true;
            $("#results-page").hidden = false;
            $("#options").hidden = false;
            $("#question-title").hidden = true;


            var movieTitle = singleResponse().name
            var movieDesc = singleResponse().description
            var movieURL = singleResponse().video

            $('#title').innerHTML = movieTitle
            $('#description-1').innerHTML = movieDesc
            $('#video-url').src = movieURL
        } else {

            //There weren't any movies found!

            $("#pie-page").hidden = true;
            $("#results-page-none").hidden = false;
            $("#options").hidden = false;
            $("#question-title").hidden = true;
        }
    }
};

function tweetMessage(msg) {
    const url = 'insert url'
    const tweet = `#TeensVsNetflix: via @youthradio ${url}`
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`
    window.open(tweetUrl, 'pop', 'width=600, height=400, scrollbars=no')
}

function tryAgain() {
    currentPage = 0;
    answers = [];
    nextPage(0);
    $("#pie-page").hidden = false;
    $("#results-page").hidden = true;;
    $("#results-page-none").hidden = true;
    $("#options").hidden = true;
    $("#question-title").hidden = false;

    console.log(answers + ", " + currentPage)

};

//Events

answerSection.addEventListener('click', function(event) {
    if (event.target.dataset.key) {
        console.log(event.target)
        answers.push([event.target.dataset.key, event.target.innerHTML])
        currentPage++
        nextPage(currentPage)
        console.log(currentPage)
    }

});

$("#share").addEventListener('click', function() {
    tweetMessage()
})

$("#try-again").addEventListener('click', function() {
    tryAgain()
})

document.addEventListener("DOMContentLoaded", function() {
    $("#pie-page").hidden = false;
    nextPage(0);
});
