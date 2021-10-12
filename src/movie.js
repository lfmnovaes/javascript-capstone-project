const apiKey = 'd7c059b3';
const movies = [ 'tt1375666' ];

// export const getMovieById = async () => {
//   return fetch('http://www.omdbapi.com/?i=tt1375666&apikey=d7c059b3&r=json')
//     .then((response) => {
//       response.json()
//     });
// }

export const getMovieById = async () => {
  const response = await fetch('http://www.omdbapi.com/?i=tt1375666&apikey=d7c059b3&r=json');
    return response.json();
};