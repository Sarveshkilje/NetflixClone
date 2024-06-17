
const api ="api_key=a095accdc64e148dc973da19fc33619b";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;

// img url
const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w300"; 

// requests for movies data
const requests = {
    
//   fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,

};

//use to truncate string
function truncate(str , n){
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

//banner
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())

.then((data) => {
    console.log(data.results);

    const setMovie = 
    data.results[Math.floor(Math.random()* data.results.length - 1)];

    var banner = document.getElementById("banner");
    var banner__title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");

    if (setMovie && setMovie.backdrop_path) {
        banner.style.backgroundImage = `url(${banner_url}${setMovie.backdrop_path})`;
    } else {
        console.error("Movie backdrop path is not available.");
    }
    
    if (setMovie) {
        // banner__desc.innerText = truncate(setMovie.overview || '', 150);
        banner__title.innerText = setMovie.name || 'No Title Available';
      }
});

//movies rows

fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())

.then((data) => {
   const headrow = document.getElementById("headrow");
   const row = document.createElement("div");

   row.className = "row";
   row.classList.add("netflixrow");

   headrow.appendChild(row);

   const title = document.createElement("h2");

   title.className = "row__title";
   title.innerText = "NETFLIX ORIGINALS";

   row.appendChild(title);

   const row_posters = document.createElement("div");
   row_posters.className = "row__posters";
   row.appendChild(row_posters);

   data.results.forEach((movie) => {

    const poster = document.createElement("img");
    poster.className = "row_posterLarge";

    var s = movie.name.replace(/\s+/g, "");

    poster.id = s;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);
   });
});

//top rated

fetch(requests.fetchTrending)
.then ((res) => res.json())

.then((data)=> {
  const headrow = document.getElementById('headrow');
  const row =document.createElement('div');
  row.classNAme = "row";
  headrow.appendChild(row);

  const title = document.createElement("h2");
  title.className ="row__title";
  title.innerText = "Top Rated";
  row.appendChild(title);

  const row_posters =document.createElement("div");
  row_posters.className= "row__posters";
  row.appendChild(row_posters);

  data.results.forEach((movie) => {
    
    // console.log(movie);

    const poster = document.createElement("img");
    poster.className = "row_posterLarge";

    var s2 =movie.id;

    poster.id = s2;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);
   });
});

//Action Movies

fetch(requests.fetchActionMovies)
.then ((res) => res.json())

.then((data)=> {
  const headrow = document.getElementById('headrow');
  const row =document.createElement('div');
  row.classNAme = "row";
  headrow.appendChild(row);

  const title = document.createElement("h2");
  title.className ="row__title";
  title.innerText = "Top Rated";
  row.appendChild(title);
  
  const row_posters =document.createElement("div");
  row_posters.className= "row__posters";
  row.appendChild(row_posters);

  data.results.forEach((movie) => {
    
    // console.log(movie);

    const poster = document.createElement("img");
    poster.className = "row_posterLarge";

    var s2 =movie.id;

    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);
   });
});

//comdey

fetch(requests.fetchComedyMovies)
.then ((res) => res.json())

.then((data)=> {
  const headrow = document.getElementById('headrow');
  const row =document.createElement('div');
  row.classNAme = "row";
  headrow.appendChild(row);

  const title = document.createElement("h2");
  title.className ="row__title";
  title.innerText = "Top Rated";
  row.appendChild(title);
  
  const row_posters =document.createElement("div");
  row_posters.className= "row__posters";
  row.appendChild(row_posters);

  data.results.forEach((movie) => {
    
    // console.log(movie);

    const poster = document.createElement("img");
    poster.className = "row_posterLarge";

    var s2 =movie.id;

    poster.id = s2;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);
   });
})

//Horror

fetch(requests.fetchHorrorMovies)
.then ((res) => res.json())

.then((data)=> {
  const headrow = document.getElementById('headrow');
  const row =document.createElement('div');
  row.classNAme = "row";
  headrow.appendChild(row);

  const title = document.createElement("h2");
  title.className ="row__title";
  title.innerText = "Top Rated";
  row.appendChild(title);
  
  const row_posters =document.createElement("div");
  row_posters.className= "row__posters";
  row.appendChild(row_posters);

  data.results.forEach((movie) => {
    
    // console.log(movie);

    const poster = document.createElement("img");
    poster.className = "row_posterLarge";

    var s2 =movie.id;

    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);
   });
})

// Romance

fetch(requests.fetchRomanceMovies)
.then ((res) => res.json())

.then((data)=> {
  const headrow = document.getElementById('headrow');
  const row =document.createElement('div');
  row.classNAme = "row";
  headrow.appendChild(row);

  const title = document.createElement("h2");
  title.className ="row__title";
  title.innerText = "Top Rated";
  row.appendChild(title);
  
  const row_posters =document.createElement("div");
  row_posters.className= "row__posters";
  row.appendChild(row_posters);

  data.results.forEach((movie) => {
    
    // console.log(movie);

    const poster = document.createElement("img");
    poster.className = "row_posterLarge";

    var s2 =movie.id;

    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);
   });
})