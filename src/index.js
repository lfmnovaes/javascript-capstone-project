import './style.css';
import { loadShows } from './elements.js';
import { loadComments } from './displayComments.js';

const main = document.getElementsByTagName('main');

loadShows(main[0]);
loadComments();
//consoleLogComments(1);

const modal = `
<div class="modal fade" id="mainModal" tabindex="-1" aria-labelledby="mainModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mainModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div id="comments">
        <h2>Comments</h2>
        <ul id="commentList" class="list-group-flush ps-0">      
        </ul>
      </div>
      <div id="newComment" class="d-flex flex-column">   
        <h2>Add a comment</h2> 
        <input type="text" class="my-2 form-control" id="username" placeholder="Your name">
        <textarea class="my-2 form-control" id="comment" placeholder="Your insights" rows="3"></textarea>
        <button class="my-2 btn btn-secondary" id="btnComment">Comment</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;

main[0].insertAdjacentHTML('beforeend', modal);
// getComments('item1');
// addCommentListener('item1');