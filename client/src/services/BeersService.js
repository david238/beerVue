import Api from '@/services/Api';

export default {
    getBeer(params) {
        return Api().get('beers', {params: params})
    }
}