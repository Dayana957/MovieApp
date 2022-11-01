import { loadImg } from "./utils";

export class Movie {

    templates = {
        renderMovie: function ({poster_path, original_title, release_date, vote_average}) {
            return `
            <div class="movie">
                <div class="movie-img">
                    <img src="${loadImg(poster_path)}" alt="${original_title}"> 
                </div>
                <div class="movie-content">
                <div class="movie-inform">
                    <div class="movie_popularity">${Math.round(vote_average/0.1)}/100</div>
                    <div class="movie_release_data">${new Date(release_date).toShortFormat()}</div>
                </div>
                <div class="movie_titel">${original_title}</div>
                </div>
            </div>            
            `
        }
    }

    constructor(data) {
        this.data = data;
    }

    render() {
       return this.templates.renderMovie(this.data)
    }
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