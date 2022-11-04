import {convertData, convertRate, loadImgOriginal, loadImgW200} from "./utils";
import {ProductionCard} from "./production";

export class Movie {

    templates = {
        renderMovieCard: ({id, poster_path, original_title, release_date, vote_average}) => {
            return `
            <div class="movie">
                <a href="#movieId=${id}">
                    <div class="movie-img">
                        <img src="${loadImgW200(poster_path)}" alt="${original_title}"> 
                    </div>
                </a>
                <div class="movie-content">
                    <div class="movie-inform">
                        <div class="movie_popularity">${convertRate(vote_average)}/100</div>
                        <div class="movie_release_data">${convertData(release_date)}</div>
                    </div>
                    <div class="movie_title">${original_title}</div>
                </div>
            </div>            
            `
        },
        renderFullMovieDetails: ({backdrop_path, original_title, overview, vote_average, release_date, status, production_companies}) => {
            const prodCard = new ProductionCard(production_companies);

            return `
            <div class="movie-details">
                <div class="movie-img">
                    <img src="${loadImgOriginal(backdrop_path)}" alt="${original_title}"> 
                </div>
                <div class="info-content">
                    <div class="content-info-movie">
                        <div class="main-movie-title">${original_title}</div>
                        <div class="movie_popularity">${convertRate(vote_average)}/100</div>
                        <div class="movie_release_data">${convertData(release_date)}</div>
                        <div>
                            <p class="status">Status:<span>${status}</span></p>
                        </div>
                        <div>
                            <p>${overview}</p>
                        </div>
                        <div class="movie-production">
                            <h4>Porduction</h4>
                            <div class="production-img">
                                ${prodCard.renderProductionCard()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        renderSmallMovieDetails: ({id, poster_path, original_title, release_date, vote_average, status, overview}) => {
            return `
            <div class="movie-small-details">
                ${this.renderMovieCard( {id, poster_path, original_title, release_date, vote_average})}  
                <div class="info-content-search">
                     <div class="status-search">
                            <p class="status">Status:<span>${status}</span></p>
                     </div>
                     <div class="info-movie-search">
                            <p>${overview}</p>
                     </div>
                </div>
            </div>
            `;
        }
    }

    constructor(data) {
        this.data = data;
    }

    renderMovieCard() {
       return this.templates.renderMovieCard(this.data)
    }

    renderFullMovieDetails() {
        return this.templates.renderFullMovieDetails(this.data)
    }

    renderSmallMovieDetails() {
        return this.templates.renderSmallMovieDetails(this.data);
    }
}
