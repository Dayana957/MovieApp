import {MOVIE_API_PATH, KEY_PARAM, IMG_PATH, SEARCH_MOVIE_API_PATH} from "./constants";

export const generateMovieUrl = path => `${MOVIE_API_PATH}/${path}?${KEY_PARAM}`;
export const generateSearchMovieUrl = movieName => `${SEARCH_MOVIE_API_PATH}?query=${movieName}&${KEY_PARAM}`;
export const loadImgW200 = imgPath => `${IMG_PATH}w200${imgPath}`;
export const loadImgOriginal = imgPath => `${IMG_PATH}original${imgPath}`;
export const convertRate = rate => Math.round(rate / 0.1);
export const convertData = data => new Date(data).toShortFormat();
export const generateTitle = str => {
    const title = str.replaceAll('_', ' ');
    return title[0].toUpperCase() + title.slice(1);
}

Date.prototype.toShortFormat = function() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"];

    const day = this.getDate();

    const monthIndex = this.getMonth();
    const monthName = monthNames[monthIndex];

    const year = this.getFullYear();

    return `${day} ${monthName} ${year}`;
}

