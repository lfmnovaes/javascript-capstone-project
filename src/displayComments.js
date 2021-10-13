const removeComments = () => {
    const commentList = document.getElementById('commentList');
    
    while (commentList.firstChild) {
        commentList.removeChild(commentList.firstChild);
    }
}

const printComments = (comments) => {
  const commentContainer = document.getElementById('comments');
  const commentList = document.getElementById('commentList');

  removeComments();

  comments.forEach((comment) => {
    const commentItem = document.createElement('li');
    const user = document.createElement('strong');

    commentItem.setAttribute('class', 'list-group-item');
    commentItem.appendChild(document.createTextNode(comment.creation_date));
    user.appendChild(document.createTextNode(` ${comment.username} says: `));
    commentItem.append(user);
    commentItem.appendChild(document.createTextNode(comment.comment));
    commentList.append(commentItem);
  });

  commentContainer.append(commentList);
};

export default printComments;