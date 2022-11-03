import { fetchRequest } from "./utils";

fetchRequest('movie/popular', '.popular', "Most popular");
fetchRequest('movie/top_rated', '.top-rated', "Top Rated");
fetchRequest('movie/upcoming', '.upcoming', "Upcoming");