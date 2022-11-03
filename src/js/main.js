import {getMovieDetails, getMovies, getSearchMoves} from "./api";

document.addEventListener('DOMContentLoaded', function () {
    const searchIpt = document.querySelector(".ipt_search");
    const searchBtn = document.querySelector("#btn_search");

    searchBtn.addEventListener('click', event => {
        let movieName = searchIpt.value;
        getSearchMoves(".root", movieName);
    })

});

window.addEventListener('hashchange', event => {
    checkURL();
});

function checkURL() {
    const locationHash = location.hash;

    if (locationHash[0] !== "#") getMovies(".root", ['popular', 'top_rated', 'upcoming']);

    const [hash, movieId] = locationHash.split("=");

    if (hash === '#movieId') getMovieDetails(".root", movieId);
}

checkURL();