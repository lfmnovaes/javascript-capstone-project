import { getComments } from './handleComments';

let comments = [];

const loadComments = async () => {
  for (let i = 0; i < 8 ; i += 1) {
    comments.push(getComments(`${i}`));
  }
  return await Promise.all(comments);
};

//loadComments();

const consoleLogComments = (n) => {
  comments[n].then((result) => {
    result.forEach((e) => {
      console.log(e);
    });
  });
};

const removeComments = () => {
  const commentList = document.getElementById('commentList');

  while (commentList.firstChild) {
    commentList.removeChild(commentList.firstChild);
  }
};

const commentMaker = (list, username, comment, date) => {
  const commentItem = document.createElement('li');
  const user = document.createElement('strong');

  commentItem.setAttribute('class', 'list-group-item');
  commentItem.appendChild(document.createTextNode(date));
  user.appendChild(document.createTextNode(` ${username} says: `));
  commentItem.append(user);
  commentItem.appendChild(document.createTextNode(comment));
  list.append(commentItem);
};

const printComments = (comments) => {
  const commentContainer = document.getElementById('comments');
  const commentList = document.getElementById('commentList');

  removeComments();

  comments.forEach((comment) => {
    commentMaker(commentList, comment.username, comment.comment, comment.creation_date);
  });

  commentContainer.append(commentList);
};

const listNewComment = (name, Newcomment) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const commentList = document.getElementById('commentList');
  commentMaker(commentList, name, Newcomment, date);
};

export { printComments, listNewComment, loadComments, consoleLogComments };