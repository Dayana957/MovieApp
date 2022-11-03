import { API_PATH, KEY_PARAM, IMG_PATH } from "./constants";
import { Movie } from "./movie";

const generateUrl = path => `${API_PATH}${path}${KEY_PARAM}`;

export const loadImg = imgPath => `${IMG_PATH}${imgPath}`;

export const fetchRequest = (path, selector, title) => {
    fetch(generateUrl(path))
        .then(res => res.json())
        .then(data => data.results)
        .then(results => renderMovies(results, selector, title));
};

function renderMovies(results, selector, title) {
    let container = document.querySelector(selector);

    let titleH2 = `<h2 class="movie-header">${title}</h2>`

    const movies = results.map(({poster_path, original_title, release_date, vote_average}) => {
        const movie = new Movie({poster_path, original_title, release_date, vote_average});
        return movie.render();
    }).join('');

    container.innerHTML = `<div class="movie-flex">${movies}</div>`;
    container.insertAdjacentHTML("afterbegin", titleH2);
}

