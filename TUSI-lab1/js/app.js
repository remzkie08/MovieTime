// Whatever you want here...
$(document).ready(function(){
    const MOVIES_API = 'https://pelec4.herokuapp.com';

    //Selectors
    const movieList = $('movie-list');


fetch('https://pelec4.herokuapp.com/movies')
.then(res => res.json())
.then(movies => {
    console.log('MOVIES', movies);

    movies.forEach(movie => {
        let movieItem = <li>
                            <h4>${movie.title}</h4>
                        </li>    
        console.log(movie.title);
    });

  })
})
