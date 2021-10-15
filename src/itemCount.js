export const navClick = (nav, genre, dramaShows, comedyShows, docShows) => {
  switch (genre) {
    case 'Drama':
      nav[0].className = 'nav-link active';
      nav[0].innerHTML = `Drama (${dramaShows.length})`;
      nav[1].className = 'nav-link';
      nav[1].innerHTML = 'Comedy';
      nav[2].className = 'nav-link';
      nav[2].innerHTML = 'Documentary';
      return dramaShows.length;
    case 'Comedy':
      nav[0].className = 'nav-link';
      nav[0].innerHTML = 'Drama';
      nav[1].className = 'nav-link active';
      nav[1].innerHTML = `Comedy (${comedyShows.length})`;
      nav[2].className = 'nav-link';
      nav[2].innerHTML = 'Documentary';
      return comedyShows.length;
    case 'Documentary':
      nav[0].className = 'nav-link';
      nav[0].innerHTML = 'Drama';
      nav[1].className = 'nav-link';
      nav[1].innerHTML = 'Comedy';
      nav[2].className = 'nav-link active';
      nav[2].innerHTML = `Documentary (${docShows.length})`;
      return docShows.length;
    default:
      return 0;
  }
};

export default navClick;