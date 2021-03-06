const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

async function setLikes(total, id) {
  return fetch(`${api + id}/likes/`)
    .then((response) => response.json())
    .then((likes) => likes)
    .catch(() => {
      const emptyArr = [];
      for (let i = 0; i < total; i += 1) {
        emptyArr.push(0);
      }
      return emptyArr;
    });
}

const newLike = (itemID, id) => {
  fetch(`${api + id}/likes/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `item${itemID}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.text());
};

async function like(total, api) {
  const likeList = await setLikes(total, api);
  const fullLikeList = [];
  let index = -1;
  for (let i = 0; i < total; i += 1) {
    index = likeList.findIndex((item) => item.item_id === `item${i}`);
    if (index !== -1) {
      fullLikeList.push(likeList[index].likes);
    } else {
      fullLikeList.push(0);
    }
  }
  return fullLikeList;
}

const listenLikes = (likedList, api) => {
  likedList.forEach((_, i) => {
    const btnLike = document.getElementById(`btnLike-${i}`);
    btnLike.addEventListener('click', () => {
      newLike(i, api);
      const likeText = document.getElementById(`like-${i}`);
      likeText.removeChild(likeText.firstChild);
      likeText.appendChild(
        document.createTextNode(`${likedList[i] + 1} likes`),
      );
    });
  });
};

export { newLike, like, listenLikes };
