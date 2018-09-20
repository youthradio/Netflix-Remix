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
        fF.innerHTML = dataPack[npage].funfact.fact

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
                return movie.tags.includes(answer[1]) // this return is for the
                //the every function
            })
        })
        console.log(response)

        if (response.length == 1) {

            //Need something to check if the answers start with a vowel

            var statement = "A " + answers[0][0] + " Movie with " + "A " + answers[2][0] + " " + answers[1][0] + " Lead is...";
            $('#pre-title').innerHTML = statement;

            $("#pie-page").hidden = true;
            $("#results-page").hidden = false;
            $("#options").hidden = false;
            $("#question-title").hidden = true;

            if (response[0].name == "None") {
                console.log("no movie found!!!")
                $("#yt-video").hidden = true;
            }


            var movieTitle = response[0].name
            var movieDesc = response[0].description
            var movieURL = response[0].video

            console.log(movieDesc)

            $('#title').innerHTML = movieTitle
            $('#description-1').innerHTML = movieDesc
            $('#video-url').src = movieURL.replace('watch?v=', 'embed/')
            
        } else if (response.length > 1) {

            //For outcomes that provide more than a single film, randomize a selection in that array

         
            var rProcess = response[Math.floor(Math.random() * response.length)];
     
            $("#pie-page").hidden = true;
            $("#results-page").hidden = false;
            $("#options").hidden = false;
            $("#question-title").hidden = true;


            var movieTitle = rProcess.name
            var movieDesc = rProcess.description
            var movieURL = rProcess.video

            $('#title').innerHTML = movieTitle
            $('#description-1').innerHTML = movieDesc
            $('#video-url').src = movieURL.replace('watch?v=', 'embed/')
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
    $("#results-page").hidden = true;
    $("#options").hidden = true;
    $("#question-title").hidden = false;
    $('#video-url').src = ''
    $("#yt-video").hidden = false;

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
        console.log(answers)
    }

});

$("#share").addEventListener('click', function() {
    tweetMessage()
})

$("#try-again").addEventListener('click', function() {
    tryAgain()
})
fetchData().then(() => {
    $("#pie-page").hidden = false;
    nextPage(0);
});
