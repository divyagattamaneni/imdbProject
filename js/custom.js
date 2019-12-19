let search=document.getElementById('searchText');

search.addEventListener('keypress', e=> {
    let searchText=e.target.value;
    getMovies(searchText);//calling getmovies function as callback function
});

function getMovies(searchText)
{
    let api=`http://www.omdbapi.com/?s=${searchText}&apikey=3e80183e`;
    window.fetch(api)
    .then(data =>{//nextstep is converting response data into json object....
        //how to convert res into obj into json object
       let jsondata= data.json();
       jsondata.then(movie=>{
          let movies=movie.Search;
          let output='';

          for(let imdbMovie of movies){
              output +=`
              <h1>${imdbMovie.Title}</h1>
              <p>${imdbMovie.Year}</p>
              <p>${imdbMovie.imbdID}</p>
              <p>${imdbMovie.Type}</p>
              <img src="${imdbMovie.Poster}"/>
              
              `;
              document.getElementById('template').innerHTML= output;
          }
       }).catch(err => console.log(err));// if rejects executing catch block
       
       })
    .catch(err=>console.log(err));//fetching data from omdb server...
}
