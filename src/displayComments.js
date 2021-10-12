const printComments = (comments) => {
  const commentContainer = document.getElementById('comments');
  const commentList = document.createElement('ul');

  comments.forEach((comment) => {
    const commentItem = document.createElement('li');
    const user = document.createElement('strong');

    commentItem.appendChild(document.createTextNode(comment.creation_date));
    user.appendChild(document.createTextNode(` ${comment.username} says: `));
    commentItem.append(user);
    commentItem.appendChild(document.createTextNode(comment.comment));
    commentList.append(commentItem);
  });

  commentContainer.append(commentList);
};

export default printComments;