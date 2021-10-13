import './style.css';
import { loadShows } from './elements.js';
 import { getComments } from './handleComments.js';
// import addCommentListener from './eventListener.js';

const main = document.getElementsByTagName('main');
const content = `
<h2>Hello world!</h2>
`;
main[0].insertAdjacentHTML('beforeend', content);

loadShows(main[0]);

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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;

main[0].insertAdjacentHTML('beforeend', modal);
getComments('item10');