/*function nextPage(npage) {

  if (currentPage < dataPack.length) {
    //checks if the current page's number isn't succeeding of the package's array count
    // var buttonKey = document.querySelector(".box-2")
    // $(buttonKey).empty()

    var questionTitle = document.querySelector("#question-title");
    // questionTitle.classList.add('title');
    questionTitle.innerHTML = dataPack[npage].question;
    var answerSection = document.querySelector(".answer-container");
    //Cleaning up after init
    ([... answerSection.children]).forEach(el => el.remove())
    Object.entries(dataPack[npage].options).forEach(function(ele, index) {
    // ele.getBoundingClientRect()
      var questionDiv = document.createElement('div')
      questionDiv.dataset.key = ele[0]
      questionDiv.classList.add('box', 'circle')
      questionDiv.innerHTML = ele[1]

      var boxLine = document.createElement('div')
      boxLine.classList.add('line', 'circle')

      var boxBG = document.createElement('div')
      boxBG.classList.add('slice-contents', 'circle')

      boxBG.innerHTML = ("");

      answerSection.appendChild(boxBG)
      answerSection.appendChild(boxLine)
      answerSection.appendChild(questionDiv)
     

      const width = questionDiv.getBoundingClientRect().width
      questionDiv.style.transform = `translate(${-width/2}px, -25vh)rotate(${index*120}deg)` 

      const width2 = boxLine.getBoundingClientRect().width
      boxLine.style.transform = `translate(${-width2/2}px, -25vh)rotate(${60+index*120}deg)` 

      const width3 = boxBG.getBoundingClientRect().width
      boxBG.style.transform = `translate(${-width/2}px, -25vh)rotate(${index*120}deg)skewY(40deg)` 


      questionDiv.addEventListener('click', function(event) {
        answers.push([event.target.dataset.key, event.target.innerHTML])
        console.log(answers)
        currentPage++
        nextPage(currentPage)
      });
    });
    
    
    //answerSection.innerHTML = ''; //Quickly cleans the HTML content inside the slide
    


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
    var answerSection = document.querySelector(".answer-container")

    $(answerSection).empty()
    if (response.length) {

      var movieTitle = response[0].name
      var movieDesc = response[0].description
      var movieURL =  response[0].video
      //separates the name and description keys in the response array and filters out the object's leftovers
      //movieURL needs the colon removed before the actual URL

      console.log(movieURL)

      $('#title').text(movieTitle)
      $('#description-1').text(movieDesc)
    } else {
      answerSection.innerHTML = "No movies!!"
    }
  }
};*/

$(document).ready(function() {

  var questionDiv = 

  questionDiv.addEventListener('click', function(event) {
        answers.push([event.target.dataset.key, event.target.innerHTML])
        console.log(answers)
        currentPage++
        nextPage(currentPage)
      });


  nextPage(0);
  hWorld(10);
});

function hWorld(n) {
  var number = n;

  for (i = 0; i < number; i++) {
    console.log("hello world!")
  };

}
