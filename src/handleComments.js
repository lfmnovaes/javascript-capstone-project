import printComments from './displayComments.js'

let id = 'qafeh2BKDxqFOjaoaHYS';
const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/' + id;
const get =  '/comments?item_id=';
const post = '/comments/'

async function getComments(itemID) {
   
  const response = await fetch(api + get + itemID);
  const comments = await response.json();  
  printComments(comments);
}

const addComment = (itemID, user, text) => {
    console.log("inside function")
    fetch(api + post, {
      method: 'POST',
      body: JSON.stringify({
        item_id : itemID,
        username : user,
        comment : text
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.text()).then((text) => {
      console.log(text);
    });    
  };

export { getComments, addComment };
