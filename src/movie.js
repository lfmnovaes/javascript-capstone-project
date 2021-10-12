const apiKey = 'd7c059b3';

export const getMovieById = async (id = 'tt1375666') => {
  const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
    return response.json();
};
