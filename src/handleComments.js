const id = 'X5qPSIb9YIcPVQTRSYUg';
const api = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}`;
const get = '/comments?item_id=';
const post = '/comments/';

/*
async function getComments(itemID) {
  try {
    const response = await fetch(api + get + itemID);
    const comments = await response.json();
    printComments(comments);
  } catch {
    // console.log('there is an error');
  }
}
likes */
const getComments = async (itemID) => {
  const response = await fetch(api + get + itemID);
  return response.json();
};

const addComment = async (itemID, user, text) => {
  await fetch(api + post, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
      username: user,
      comment: text,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return 0;
};

export { getComments, addComment };
