import {Movie} from "./movie";
import {generateTitle} from "./utils";
import {Error} from "./error";

export const renderMovies = (movies, container, type) => {
    const movieCards =
        movies.map(movie => {
            const movieCard = new Movie(movie);
            return movieCard.renderMovieCard();
        }).join('');

    const moviesContainer =
        `<div class="${type}">
            <h2 class="movie-header">${generateTitle(type)}</h2>
            <selector class="movie-flex">${movieCards}</selector>
        </div>`;

    container.insertAdjacentHTML("beforeend", moviesContainer);
}

export const renderMovieDetails = (movieData, mainSelector) => {
    let container = document.querySelector(mainSelector);
    container.innerHTML = '';

    const movieCard = new Movie(movieData);

    const movieDetailsContainer = `
    <selector>
        <div>
            ${movieCard.renderFullMovieDetails()}
        </div>
    </selector>
    `;

    container.insertAdjacentHTML("beforeend", movieDetailsContainer);
}

export const renderErrorPage = (data, mainSelector) => {
    let container = document.querySelector(mainSelector);
    container.innerHTML = '';

    const errorPage = new Error({ status_code: data.status_code, status_message: data.status_message })

    const errorContainer = `
    <selector>
        <div>
            ${errorPage.renderErrorPage()}
        </div>
    </selector>
    `;

    container.insertAdjacentHTML("beforeend", errorContainer);
}

export const renderSearchMoviePage = (movies, mainSelector) => {
    let container = document.querySelector(mainSelector);
    container.innerHTML = '';

    const movieContainer = movies.map(movie => {
        const movieCard = new Movie(movie);
        return movieCard.renderSmallMovieDetails();
    }).join('');

    const searchMovieContainer =
        `
        <selector>
            ${movieContainer}
        </selector>
    `;

    container.insertAdjacentHTML("beforeend", searchMovieContainer);
}