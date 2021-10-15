import './style.css';
import { loadShows } from './elements.js';
import { loadAllComments } from './displayComments.js';
import { navClick } from './itemCount.js';

const main = document.getElementById('listedShow');

/* 'X5qPSIb9YIcPVQTRSYUg',
  'qafeh2BKDxqFOjaoaHYS',
  'BEBsNB6mN9Na1RehIUoz' */

const apiKEY = [
  'e0wOwtZerSIAcOKZGB5J',
  'WRd0oDpoezSdlcLkESaV',
  'waroYTVKdnkh8l9aKV8p',
];

// COMEDY
const comedyShows = [
  'tt0386676', // The Office
  'tt0108778', // Friends
  'tt0898266', // The Big Bang Theory
  'tt0098904', // Seinfeld
  'tt1442437', // Modern Family
  'tt0096697', // The Simpsons
];

// DRAMA
const dramaShows = [
  'tt0903747', // Breaking Bad
  'tt1475582', // Sherlock
  'tt0185906', // Band of Brothers
  'tt7366338', // Chernobyl
  'tt0773262', // Dexter
  'tt10919420', // Squid Game
  'tt0141842', // The Sopranos
  'tt4574334', // Stranger Things
];

// DOCUMENTARY
const docShows = [
  'tt15260794', // Turning Point: 9/11
  'tt5491994', // Planet Earth II
  'tt15254840', // Nuclear Family
  'tt15166116', // Countdown: Inspiration4 Mission to Space
  'tt8420184', // The Last Dance
  'tt11823076', // Tiger King: Murder, Mayhem and Madness
  'tt14734548', // 9/11: One Day in America
];

loadAllComments(apiKEY[0], dramaShows.length);
loadShows(dramaShows, main, apiKEY[0]);

const modal = `
<div class="modal fade" id="mainModal" tabindex="-1" aria-labelledby="mainModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mainModalLabel">Show name</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Image and Summary
      </div>
      <div id="comments">
        <h2>Comments</h2>
        <ul id="commentList" class="list-group-flush ps-0">
        </ul>
      </div>
      <div id="newComment" class="d-flex flex-column">
        <h2>Add a comment</h2>
        <input id="username" type="text" class="my-2 form-control" placeholder="Your name">
        <textarea id="comment" class="my-2 form-control" placeholder="Your insights" rows="3"></textarea>
        <button id="btnComment" class="my-2 btn btn-secondary">Comment</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;

main.insertAdjacentHTML('beforeend', modal);
const nav = document.getElementById('nav').querySelectorAll('li');

/*
const navClick = (genre) => {
  switch (genre) {
    case 'Drama':
      nav[0].className = 'nav-link active';
      nav[0].innerHTML = `Drama (${dramaShows.length})`;
      nav[1].className = 'nav-link';
      nav[1].innerHTML = 'Comedy';
      nav[2].className = 'nav-link';
      nav[2].innerHTML = 'Documentary';
      break;
    case 'Comedy':
      nav[0].className = 'nav-link';
      nav[0].innerHTML = 'Drama';
      nav[1].className = 'nav-link active';
      nav[1].innerHTML = `Comedy (${comedyShows.length})`;
      nav[2].className = 'nav-link';
      nav[2].innerHTML = 'Documentary';
      break;
    case 'Documentary':
      nav[0].className = 'nav-link';
      nav[0].innerHTML = 'Drama';
      nav[1].className = 'nav-link';
      nav[1].innerHTML = 'Comedy';
      nav[2].className = 'nav-link active';
      nav[2].innerHTML = `Documentary (${docShows.length})`;
      break;
    default:
      break;
  }
};

const listenerNav = (shows, navbar, api, size) => {
  navbar.addEventListener('click', () => {
    navClick(navbar.innerText.split(' ')[0]);
*/
const listenerNav = (shows, navbar, api, size) => {
  navbar.addEventListener('click', () => {
    navClick(nav, navbar.innerText.split(' ')[0], dramaShows, comedyShows, docShows);
    main.innerHTML = '';
    loadAllComments(api, size);
    loadShows(shows, main, api);
    main.insertAdjacentHTML('beforeend', modal);
  });
};

listenerNav(dramaShows, nav[0], apiKEY[0], dramaShows.length);
listenerNav(comedyShows, nav[1], apiKEY[1], comedyShows.length);
listenerNav(docShows, nav[2], apiKEY[2], docShows.length);
