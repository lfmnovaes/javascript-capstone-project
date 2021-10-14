const id = 'qafeh2BKDxqFOjaoaHYS';
const api = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}`;
const get = '/likes?item_id=';
const post = '/likes/';

async function getLikes() {
  try {
    const response = await fetch(api + get + itemID);
    const likes = await response.json();
    console.log(likes);
  } catch {
    console.log('there is an error');
  }
}

const newLike = (itemID) => {
  fetch(api + post, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.text()).then((text) => {
    console.log(text);
  });
};

export { getLikes, newLike };
