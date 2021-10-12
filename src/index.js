import './style.css';
import { getMovieById } from './movie.js';
import { getSerieById } from './series.js';

const main = document.getElementsByTagName('main');
const content = `
<h2>Hello world!</h2>
`;
main[0].insertAdjacentHTML('beforeend', content);

/*
const loadMovie = async () => {
  let movie;
  await getMovieById().then((m) => { movie = m; });
  console.log(movie);
  console.log(movie.Title);
};

loadMovie();
*/

const loadSerie = async () => {
  let serie;
  await getSerieById().then((s) => { serie = s; });
  console.log(serie);
  console.log(serie.name);
};

loadSerie();
