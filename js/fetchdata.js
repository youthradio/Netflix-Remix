let dataPack = []
let moviesData = []

fetchData = async () => {
  await d3.csv('data/questions.csv').then(data => {
    data.forEach(e => {
      const options = []
      for(let i=0; i <3; i++){
        if(e[`Option-${i+1}`] !== ""){
          options.push({
            label: e[`Option-${i+1}`],
            url: e[`Image-${i+1}`]
          })
        }
      }
      dataPack.push({
        question: e.Question,
        options: options,
        funfact: {
          fact: e.FunFack,
          url: e.FunFack_url
        }
      })

    })
  })


  return d3.csv('data/movies.csv').then(data => {
      data.forEach(m => {
        moviesData.push({
            name: m.Movie_Name,
            tags: m.Tags.split(',').map(e=> e.trim()),
            description: m.Description,
            video: m.Video_trailer,
            actors: m.Actors,
            year: m.Year
        })
    })
  })
}
