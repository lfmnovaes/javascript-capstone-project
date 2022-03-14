import { getComments, addComment } from './handleComments.js';
import { getCounter } from './countComments.js';

let comments = [];

export const loadAllComments = async (api, size) => {
  comments = [];
  for (let i = 0; i < size; i += 1) {
    comments.push(getComments(`${i}`, api));
  }
  Promise.all(comments).then((result) => {
    comments = result;
  });
};

const createLi = (username, comment, date) => {
  const li = `
  <li class="list-group-item">${date}<strong> ${username} says: </strong>${comment}</li>
  `;
  return li;
};

const setNumberComments = (id) => {
  const commentHeader = document.getElementById('commentHeader');
  commentHeader.innerText = `Comments (${getCounter(comments[id])})`;
};

export const loadComments = (id) => {
  const commentList = document.getElementById('commentList');
  if (Promise.resolve(comments[id]) === comments[id]) {
    comments[id].then((result) => {
      result.forEach((e) => {
        commentList.innerHTML += createLi(
          e.username,
          e.comment,
          e.creation_date
        );
      });
    });
  } else {
    comments[id].forEach((e) => {
      commentList.innerHTML += createLi(e.username, e.comment, e.creation_date);
    });
  }
  setNumberComments(id);
};

window.addNewComment = (id, api) => {
  const commentList = document.getElementById('commentList');
  const nameField = document.getElementById('username');
  const commentField = document.getElementById('comment');
  const today = new Date();
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  commentList.innerHTML += createLi(nameField.value, commentField.value, date);
  addComment(id, nameField.value, commentField.value, api);
  comments[id].push({
    username: nameField.value,
    comment: commentField.value,
    creation_date: date,
  });
  nameField.value = '';
  commentField.value = '';
};
