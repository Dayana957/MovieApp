import {loadImgW200} from "./utils";

export class ProductionCard {
    templates = {
        renderProductionCard: function ({logo_path, name, origin_country}) {
            return `
            <div class="production-card">
                <div class="production-img">
                    <img src="${loadImgW200(logo_path)}" alt="${name}"> 
                </div>
                <div class="production-content">
                    <div class="production-inform">
                        <div class="production_name_popularity">Name: ${name}</div>
                        <div class="production_origin_country">${origin_country}</div>
                    </div>
                </div>
            </div>          
            `
        }
    }

    constructor(data) {
        this.data = data;
    }

    renderProductionCard(){
        return this.data.map(production => this.templates.renderProductionCard(production)).join('');
    }
}