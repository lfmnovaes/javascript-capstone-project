const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const get = '/comments?item_id=';
const post = '/comments/';

const getComments = async (itemID, id) => {
  const response = await fetch(api + id + get + itemID);
  return response.json();
};

const addComment = async (itemID, user, text, id) => {
  await fetch(api + id + post, {
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
