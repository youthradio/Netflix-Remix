var currentPage = 0;
var answers = [];

function nextPage(npage) {

  if (currentPage < dataPack.length) {
    //checks if the current page's number isn't succeeding of the package's array count

    var questionTitle = document.querySelector("#question-title") //have to make 
    questionTitle.innerHTML = dataPack[npage].question;
    dataPack[npage].options.forEach(function(obj, index) {
      var buttonText = document.querySelector('button')
      var opt = document.querySelector('#opt-'+(index+1))

      opt.dataset.key = obj.label
      opt.innerHTML = obj.label
      console.log(obj.label)
    });
   

   var answerSection = document.querySelector(".pie")
    answerSection.addEventListener('click', function(event) {
      if (event.target.dataset.key) {
        console.log(event.target)
        answers.push([event.target.dataset.key, event.target.innerHTML])
        currentPage++
        nextPage(currentPage)
      } 
      
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
    var answerSection = document.querySelector("#slide1")
    $(answerSection).empty()
    if (response.length) {

      var movieTitle = JSON.stringify(response, ["name"])
      var movieDesc = JSON.stringify(response, ["description"])

      console.log(movieDesc)

      $('#title').text(movieTitle)
      $('#description-1').text(movieDesc)
    } else {
      answerSection.innerHTML = "No movies!!"
    }
  }
};

$(document).ready(function() {
  nextPage(0);
});