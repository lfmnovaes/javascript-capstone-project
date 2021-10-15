import { getShowById } from './getShow.js';
import { listenLikes, like } from './handleLikes.js';
import { loadComments } from './displayComments.js';

const createCard = (obj, counter, like) => {
  const data = `
  <div class="col">
    <div class="card">
      <img src="${obj.image.medium}" class="card-img-top img-fluid" alt="Poster of ${obj.name}">
      <div class="card-body">

        <div class="d-flex flex-row justify-content-between align-items-center">
          <h5 class="card-title">${obj.name}</h5>
          <div id="btnLike-${counter}" class="pointer">          
            <i  class="fa-regular fa-heart" "></i>          
            <span id="like-${counter}">${like} likes</span>
          </div>
        </div>
        <button id="btn${counter}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mainModal" onclick="populateModal(${counter})">
          Comments
        </button>
      </div>
    </div>
  </div>
  `;

  return data;
};

let showResults = [];

const createAlbum = async (arr, main) => {
  const container = document.createElement('div');
  container.className = 'container';
  const div = document.createElement('div');
  div.className = 'row row-cols-1 row-cols-md-4 g-4';
  container.appendChild(div);
  const likeList = await like(showIDs.length);
  let counter = 0;
  arr.forEach((e) => {
    div.innerHTML += createCard(e, counter, likeList[counter]);
    counter += 1;
  });
  main.append(container);
  listenLikes(likeList);
};

export const loadShows = async (type, main) => {
  showResults = [];
  type.forEach((id) => {
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
          <button id="btnComment" class="my-2 btn btn-secondary" onclick="addNewComment(${id})">Comment</button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    `;
  });
  setTimeout(() => { loadComments(id); }, 100);
};

export default loadShows;
