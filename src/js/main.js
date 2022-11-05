import {getMovieDetails, getMovies, getSearchMoves} from "./api";

document.addEventListener('DOMContentLoaded', function () {
    const searchIpt = document.querySelector(".ipt_search");
    const searchBtn = document.querySelector("#btn_search");

    searchBtn.addEventListener('click', event => {
        let movieName = searchIpt.value;
        location.hash = '#search=' + movieName;
        getSearchMoves(".root", movieName);
    });

    searchIpt.addEventListener('keyup', event => {
        if (event.which === 13) {
            let movieName = searchIpt.value;
            location.hash = '#search=' + movieName;
            getSearchMoves(".root", movieName);
        }

    })

});

window.addEventListener('hashchange', event => {
    checkURL();
});

function checkURL() {
    const locationHash = location.hash;

    if (locationHash[0] !== "#") getMovies(".root", ['popular', 'top_rated', 'upcoming']);

    const [hash, key] = locationHash.split("=");

    if (hash === '#movieId') getMovieDetails(".root", key);

    if (hash === '#search') getSearchMoves(".root", key);
}

checkURL();