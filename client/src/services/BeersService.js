import Api from '@/services/Api';

export default {
    getBeer(params) {
        return Api().get('beers', {params: params});
    },
    postBeerRating(params) {
        return Api().post(`beers/rating/${params.id}`, params);
    }
};