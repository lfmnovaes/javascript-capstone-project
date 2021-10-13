import { addComment } from './handleComments.js';

const addCommentListener = (item) => {
  const button = document.getElementById('btnComment');
  const username = document.getElementById('username');
  const comment = document.getElementById('comment');

  button.addEventListener('click', () => {
    addComment(item, username.value, comment.value);
    username.value = '';
    comment.value = '';
  });
};

export default addCommentListener;