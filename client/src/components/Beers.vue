<template>
  <div class="Beers">
    <v-app-bar
      app
      color="amber lighten-1"
      dark
    >
      <div class="d-flex align-center">
          <SearchBar v-on:search-beer="searchBeerName"/>
      </div>
      <v-spacer></v-spacer>
      <span class="mr-2">Welcome to BeersVue</span>
    </v-app-bar>

    <v-main>
      <div v-html="error"/>
      <ListBeers v-model="listBeers" v-bind:listBeers="listBeers" value=""/>
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

</style>