import { getShowById } from './getShow.js';
import { consoleLogComments } from './displayComments.js';

const showIDs = [
  'tt0903747', // Breaking Bad
  'tt1475582', // Sherlock
  'tt0185906', // Band of Brothers
  'tt7366338', // Chernobyl
  'tt0773262', // Dexter
  'tt10919420', // Squid Game
  'tt0141842', // The Sopranos
  'tt4574334', // Stranger Things
];

const createCard = (obj, counter) => {
  const data = `
  <div class="col">
    <div class="card">
      <img src="${obj.image.medium}" class="card-img-top img-fluid" alt="Poster of ${obj.name}">
      <div class="card-body">
        <h5 class="card-title">${obj.name}</h5>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mainModal" onclick="populateModal(${counter})">
          Comments
        </button>
      </div>
    </div>
  </div>
  `;
  return data;
};

const showResults = [];

const createAlbum = (arr, main) => {
  const container = document.createElement('div');
  container.className = 'container';
  const div = document.createElement('div');
  div.className = 'row row-cols-1 row-cols-md-4 g-4';
  container.appendChild(div);
  let counter = 0;
  arr.forEach((e) => {
    div.innerHTML += createCard(e, counter);
    counter += 1;
  });
  main.append(container);
};

export const loadShows = async (main) => {
  showIDs.forEach((id) => {
    showResults.push(getShowById(id));
  });
  return createAlbum(await Promise.all(showResults), main);
};

window.populateModal = (id) => {
  const mainModal = document.getElementById('mainModal');
  showResults[id].then((show) => {
    mainModal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="mainModalLabel">${show.name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="${show.image.medium}" class="mx-auto d-block">
          ${show.summary}
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
    `;
  });
  consoleLogComments(id);
  // getComments(`item${id}`);
  // const username = document.getElementById('username');
  // const comment = document.getElementById('comment');
  // const button = document.getElementById('btnComment');
  // button.addEventListener('click', () => {
  //   addComment(`item${id}`, username.value, comment.value);
  //   username.value = '';
  //   comment.value = '';
  // });
};

export default loadShows;