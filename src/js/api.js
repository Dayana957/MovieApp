import {generateMovieUrl, generateSearchMovieUrl} from "./utils";
import {renderErrorPage, renderMovieDetails, renderMovies, renderSearchMoviePage} from "./templates";

export const getMovies = (mainSelector, catalogMoveTypes) => {
    let container = document.querySelector(mainSelector);
    container.innerHTML = '';

    catalogMoveTypes.map(catalogMoveType => {
        fetch(generateMovieUrl(catalogMoveType))
            .then(res => res.json())
            .then(data => {
                if(data.status_message && data.status_code) {
                    renderErrorPage(data, mainSelector);
                } else {
                    renderMovies(data.results, container, catalogMoveType);
                }
            });
    });
};

export const getMovieDetails = (mainSelector, movieId) => {
    fetch(generateMovieUrl(movieId))
        .then(res => res.json())
        .then(data => {
            if(data.status_message && data.status_code) {
                renderErrorPage(data, mainSelector);
            } else {
                renderMovieDetails(data, mainSelector)
            }
        });
}

export const getSearchMoves = (mainSelector, movieName) => {
    fetch(generateSearchMovieUrl(movieName))
        .then(res => res.json())
        .then(data => {
            if(data.status_message && data.status_code) {
                renderErrorPage(data, mainSelector);
            } else {
                renderSearchMoviePage(data.results, mainSelector)
            }
        });
}