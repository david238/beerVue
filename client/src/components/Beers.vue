<template>
  <div class="Beers">
    <v-app-bar
      app
      color="grey darken-4"
      dark
    >
      <div class="d-flex align-center">
          <SearchBar v-on:search-beer="searchBeerName"/>
      </div>
      <v-spacer></v-spacer>
      <span class="mr-2 title">Welcome to BeersVue</span>
    </v-app-bar>

    <!-- check how would i do the unit testing for the front end. write some code tomorrow -->
    <v-main class="mainContainer">
      <div class="error" v-html="error"> Error</div>
      <ListBeers v-model="listBeers" v-bind:listBeers="listBeers" v-bind:ratingStatus="ratingStatus" @rate-beer="postBeerRating"  @clear-rating-status="clearRatingStatus"/>
    </v-main>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import ListBeers from './ListBeers.vue';
import BeersService from '../services/BeersService';

export default {
  name: 'Beers',
  components: {
      SearchBar,
      ListBeers
  },
  methods: {
    async searchBeerName(name) {
      try {
        const response = await BeersService.getBeer({name: name});
        this.listBeers = response.data.result;
      } catch (err) {
        // TODO: set error
        this.error = 'Oops, an error occured'
      }
    },
    async postBeerRating(params) {
      try {
        const response = await BeersService.postBeerRating(params);
        this.ratingStatus = response.status === 200;
      } catch (err) {
        this.error = 'Oops sorry, we cannot rate this beer right now. Please try later.';
      }
    },
    clearRatingStatus() {
      this.ratingStatus = false;
    }
  },
  data() {
    return {
      beerName: '',
      error: null,
      listBeers: [],
      ratingStatus: false
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  text-align: center;
  font-family: 'Ovo';
}

.mainContainer {
  background: #616161;
}

.title { 
  font-family: 'Ovo';
}
</style>