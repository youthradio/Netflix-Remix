//Inital variables

const $ = (s) => document.querySelector(s)
//jQuery is now not needed, but to ensure the legacy code for selecting elements works, this defines the jquery function as a querySelector function
var currentPage = 0;
var answers = [];
var answerSection = document.querySelector(".pie")
//This couldn't be private
var noFilm = false;

//Functions

function nextPage(npage) {

    if (currentPage < dataPack.length) {
        //checks if the current page's number isn't succeeding of the package's array count

        var questionTitle = document.querySelector("#question-title")
        questionTitle.innerHTML = dataPack[npage].question;

        dataPack[npage].options.forEach(function(obj, index) {
            var buttonText = document.querySelector('button')
            var opt = document.querySelector('#opt-' + (index + 1))
            var image = document.querySelector(`#img-${index + 1} image`)


            image.setAttribute('xlink:href', obj.url)
            opt.dataset.key = obj.label
            opt.innerHTML = obj.label


        });

        var fF = document.querySelector('#fun-fact-text')
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

            var statement =  (answers[0][0][0] === 'A' ? 'An '  : 'A ') + answers[0][0] + " Movie with " + (answers[2][0][0] === 'A' ? 'An '  : 'A ') + answers[2][0] + " " + answers[1][0] + " Lead is...";
            statement = statement.toLowerCase()
            var finalStatement = statement.charAt(0).toUpperCase() + statement.substr(1);
            $('#pre-title').innerHTML = finalStatement;

            $("#pie-page").hidden = true;
            $("#results-page").hidden = false;
            $("#options").hidden = false;
            $("#question-title").hidden = true;

            if (response[0].name == "None") {

                $("#description-1").classList.replace("text-left", "text-center");
                console.log("no movie found!!!")
                $("#yt-video").hidden = true;
                $("#react-img").hidden = false;
                $("#pre-desc").hidden = true;
                noFilm = true;
            }

            if (noFilm === true){
                var movieTitle = "We couldn't find " + finalStatement.replace(/is.../g,'');
                $('#pre-title').hidden = true;
            } 

            else {
            var movieTitle = response[0].name }

            var movieDesc = response[0].description
            var movieURL = response[0].video
            var movieYear = response[0].year
            var movieActors = response[0].actors

            console.log(movieDesc)
            console.log(movieYear)
            console.log(movieActors)

            $('#title').innerHTML = movieTitle
            $('#description-1').innerHTML = movieDesc
            $('#video-url').src = movieURL.replace('watch?v=', 'embed/')

            $('#mYear').innerHTML = movieYear
            $('#mActors').innerHTML = movieActors

        } else if (response.length > 1) {

            

            var statement =  (answers[0][0][0] === 'A' ? 'An '  : 'A ') + answers[0][0] + " Movie with " + (answers[2][0][0] === 'A' ? 'An '  : 'A ') + answers[2][0] + " " + answers[1][0] + " Lead is...";
            statement = statement.toLowerCase()
            var finalStatement = statement.charAt(0).toUpperCase() + statement.substr(1);
            $('#pre-title').innerHTML = finalStatement;

            //For outcomes that provide more than a single film, randomize a selection in that array

            var rProcess = response[Math.floor(Math.random() * response.length)];

            $("#pie-page").hidden = true;
            $("#results-page").hidden = false;
            $("#options").hidden = false;
            $("#question-title").hidden = true;


            var movieTitle = rProcess.name
            var movieDesc = rProcess.description
            var movieURL = rProcess.video
            var movieYear = rProcess.year
            var movieActors = rProcess.actors

            $('#title').innerHTML = movieTitle
            $('#description-1').innerHTML = movieDesc
            $('#video-url').src = movieURL.replace('watch?v=', 'embed/')

            $('#mYear').innerHTML = movieYear
            $('#mActors').innerHTML = movieActors
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
    $("#react-img").hidden = true;
    $("#options").hidden = true;
    $("#question-title").hidden = false;
    $('#video-url').src = ''
    $("#yt-video").hidden = false;
    $("#pre-desc").hidden = false;
    $("#description-1").classList.replace("text-center", "text-left");

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

$("#tweetMessage").addEventListener('click', function() {
    tweetMessage()
})

$("#tryAgain").addEventListener('click', function() {
    tryAgain()
})

window.addEventListener('DOMContentLoaded', function() {
  const elementRoot = $('body')
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { height } = entry.contentRect;
        const elementHeight = 'elementHeight:' + height;
        console.log(elementHeight);
        parent.postMessage(elementHeight, '*');
      }
    });
    resizeObserver.observe(elementRoot);
});
fetchData().then(() => {
    $("#pie-page").hidden = false;
    nextPage(0);
});
