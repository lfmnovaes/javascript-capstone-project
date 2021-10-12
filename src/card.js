export const createCard = (obj) => {
  const data = `
    <div class="col">
      <div class="card">
        <img src="${obj.image.original}" class="card-img-top" alt="Poster of ${obj.name}">
        <div class="card-body">
          <h5 class="card-title">${obj.name}</h5>
          <a href="#" class="btn btn-primary">Comments</a>
        </div>
      </div>
    </div>
  `;
  return data;
};
