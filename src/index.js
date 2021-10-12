import './style.css';
import { getMovieById } from './movie.js';
import { getSerieById } from './series.js';
import { createCard } from './card.js';

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

const showIDs = [
  'tt0903747', // Breaking Bad
  'tt0944947' // Game of Thrones
];

const div = document.createElement('div');
div.className = 'row row-cols-1 row-cols-md-3 g-4';
const loadShow = async () => {
  let show;
  await getSerieById().then((s) => { show = s; });
  //console.log(show);
  //div.innerHTML += createCard(show);
};

const showList = [];

const loadShows = async () => {
  for (const show of showIDs) {
    const content = await getSerieById(show);
    showList.push(content);
    //console.log(content);
    div.innerHTML += createCard(content);
  }
};

loadShow();
loadShows();

console.log(showList);
setTimeout(() => console.log(showList[0]), 1000);

main[0].append(div);
//main[0].insertAdjacentHTML('beforeend', createCard());
