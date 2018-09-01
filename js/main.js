var currentPage = 0;
var answers = [];

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

            $("#pie-page").hide();
            $("#results-page").show();
            $("#options").show();


            var movieTitle = response[0].name
            var movieDesc = response[0].description
            var movieURL = response[0].video

            console.log(movieDesc)

            $('#title').text(movieTitle)
            $('#description-1').text(movieDesc)
            $('#video-url').attr("src", movieURL)
        } else if (response.length > 1) {

            //For outcomes that provide more than a single film, randomize a selection in that array

            var singleResponse = function() {
                var rProcess = response[Math.floor(Math.random() * response.length)];
                return rProcess;
            }

            //Call the function


            $("#pie-page").hide();
            $("#results-page").show();
            $("#options").show();


            var movieTitle = singleResponse().name
            var movieDesc = singleResponse().description
            var movieURL = singleResponse().video

            $('#title').text(movieTitle)
            $('#description-1').text(movieDesc)
            $('#video-url').attr("src", movieURL)
        } else {
            $("#pie-page").hide();
            $("#results-page-none").show();
            $("#options").show();
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
    $("#pie-page").show();
    $("#results-page").hide();
    $("#results-page-none").hide();
    $("#options").hide();

    console.log(answers + ", " + currentPage)

};

var answerSection = document.querySelector(".pie")

answerSection.addEventListener('click', function(event) {
    if (event.target.dataset.key) {
        console.log(event.target)
        answers.push([event.target.dataset.key, event.target.innerHTML])
        currentPage++
        nextPage(currentPage)
        console.log(currentPage)
    }

});

$("#share").click(function() {
    tweetMessage()
})

$("#try-again").click(function() {
    tryAgain()
})

$(document).ready(function() {
    $("#pie-page").show();
    nextPage(0);
});