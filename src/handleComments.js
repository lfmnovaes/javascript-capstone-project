import { printComments, listNewComment } from './displayComments.js';

const id = 'qafeh2BKDxqFOjaoaHYS';
const api = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}`;
const get = '/comments?item_id=';
const post = '/comments/';

async function getComments(itemID) {
  const response = await fetch(api + get + itemID);
  const comments = await response.json();
  printComments(comments);
}

const addComment = (itemID, user, text) => {
  fetch(api + post, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
      username: user,
      comment: text,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.text()).then(() => {
    listNewComment(user, text);
  });
};

export { getComments, addComment };
