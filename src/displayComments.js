import { getComments, addComment } from './handleComments.js';

const comments = [];

const loadAllComments = async () => {
  for (let i = 0; i < 8; i += 1) {
    comments.push(getComments(`${i}`));
  }
  return Promise.all(comments);
};

// const createLi2 = (commentList, username, comment, date) => {
//   const commentItem = document.createElement('li');
//   const user = document.createElement('strong');

//   commentItem.setAttribute('class', 'list-group-item');
//   commentItem.appendChild(document.createTextNode(date));
//   user.appendChild(document.createTextNode(` ${username} says: `));
//   commentItem.append(user);
//   commentItem.appendChild(document.createTextNode(comment));
//   commentList.append(commentItem);
// };

const createLi = (username, comment, date) => {
  const li = `
  <li class="list-group-item">${date}<strong> ${username} says: </strong>${comment}</li>
  `;
  return li;
};

// const removeComments = (commentList) => {
//   while (commentList.firstChild) {
//     commentList.removeChild(commentList.firstChild);
//   }
// };

const loadComments = (id) => {
  let commentList = document.getElementById('commentList');
  // removeComments(commentList);
  // console.log(comments[id].length);
  // console.log(commentsResult[id].length);
  comments[id].then((result) => {
    result.forEach((e) => {
      console.log(e);
      commentList.innerHTML += createLi(e.username, e.comment, e.creation_date);
    });
    console.log(commentList);
  });
  // commentsResult[id].forEach((e) => {
  //   console.log(e);
  //   commentList.innerHTML += createLi(e.username, e.comment, e.creation_date);
  // });
};

window.addNewComment = (id) => {
  const commentList = document.getElementById('commentList');
  const nameField = document.getElementById('username');
  const commentField = document.getElementById('comment');
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  commentList.innerHTML += createLi(nameField.value, commentField.value, date);
  addComment(id, nameField.value, commentField.value);
  nameField.value = '';
  commentField.value = '';
  // loadAllComments().then(result => comments = result);
};

export { loadAllComments, loadComments };