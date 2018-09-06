let dataPack = []
let moviesData = []

fetchData = async () => {
  await d3.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vTTF_OzbI0GYTeLSwYte5EuE_Ooaf6EE0kiXCJKgyJaTEmGzk05WMNDPZ-se-dvB5AWjpTglJ5o_Hy1/pub?gid=2045843988&single=true&output=csv').then(data => {
    data.forEach(e => {
      const options = []
      for(let i=0; i <3; i++){
        options.push({
          label: e[`Option-${i+1}`],
          url: e[`Image-${i+1}`]
        })
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


  return d3.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vTTF_OzbI0GYTeLSwYte5EuE_Ooaf6EE0kiXCJKgyJaTEmGzk05WMNDPZ-se-dvB5AWjpTglJ5o_Hy1/pub?gid=0&single=true&output=csv').then(data => {
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
