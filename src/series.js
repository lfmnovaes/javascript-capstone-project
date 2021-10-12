export const getSerieById = async (id = 'tt0903747') => {
  const response = await fetch(`https://api.tvmaze.com/lookup/shows?imdb=${id}`);
    return response.json();
};