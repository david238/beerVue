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

    <v-main class="mainContainer">
      <div class="error" v-html="error"> Errro</div>
      <ListBeers v-model="listBeers" v-bind:listBeers="listBeers"/>
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
    searchBeerName2(name) {
      // and search for beername
      this.beerName = name;
    },
    async searchBeerName(name) {
      try {
        const response =  await BeersService.getBeer({name: name});
        this.listBeers = response.data.result;
        // console.log('resp: ', response, name);
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  },
  data() {
    return {
      beerName: '',
      error: null,
      listBeers: []
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