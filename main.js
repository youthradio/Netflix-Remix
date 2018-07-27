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
      currentPage++
      nextPage(currentPage)
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

      var movieTitle = JSON.stringify(response, ["name"]).replace(/[{":"}]/g, "").replace("name", "").replace(/]|[[]/g, '')
      var movieDesc = JSON.stringify(response, ["description"]).replace(/[{":"}]/g, "").replace("description", "").replace(/]|[[]/g, '')
      var movieURL = JSON.stringify(response, ["video"]).replace(/[{""}]/g, "").replace("video", "").replace(/]|[[]/g, '')
      //separates the name and description keys in the response array and filters out the object's leftovers

      console.log(movieURL)

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
