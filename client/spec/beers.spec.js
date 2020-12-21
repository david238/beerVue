import Vue from 'vue';
import Vuetify from 'vuetify';

import { shallowMount } from '@vue/test-utils';
import Beers from '../src/components/Beers.vue';

Vue.use(Vuetify)

const factory = (values = {}) => {
    return shallowMount(Beers, {
        data () {
            return {
                ...values
            }
        }
    })
}


describe('Testing Beer Component', () => {

    it('renders a welcome message', () => {
        const wrapper = factory({})

        expect(wrapper.find('.title').text()).toEqual("Welcome to BeersVue")
    });

    it('renders an error when error is not empty', () => {
        const wrapper = factory({ error: 'oops error'  })

        expect(wrapper.find('.error').exists()).toBeTruthy()
    });

});