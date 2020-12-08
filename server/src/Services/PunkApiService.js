const axios = require('axios');

class PunkApiService {

    constructor() {
        this.fullPathGetAllBeers = 'https://api.punkapi.com/v2/beers';
    }

    reduceElements(params) {
        return params.map((element) => {
            return {
                id: element.id,
                name: element.name,
                description: element.description,
                first_brewed: element.first_brewed,
                food_pairing: element.food_pairing,
                image_url: element.image_url
            };
        });
    }

    checkBeerId(id) {
       // get a single beer
       return new Promise ((resolve, reject) => {
            //return only id id, name, description, first_brewed, food_pairings
            try {
                if (id && id > 0) {
                    axios.get(this.fullPathGetAllBeers + `/${id}`).then((response) => {
                        resolve(this.reduceElements(response.data)[0]);
                    }).catch((error) => {
                        reject(error);
                    });    
                } else {
                    reject('invalid id');
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    // Get beer details by name, using beer 
    getBeerName(beerName) {
        return new Promise ((resolve, reject) => {
            //return only id id, name, description, first_brewed, food_pairings
            try {
                axios.get(this.fullPathGetAllBeers, {params: {beer_name: beerName}}).then((response) => {
                    resolve(this.reduceElements(response.data));
                }).catch((error) => {
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = PunkApiService;