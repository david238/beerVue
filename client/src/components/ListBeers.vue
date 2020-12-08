<template>
  <div class="ListBeers">
    <v-container>
      <v-row>
        <v-col cols="4">
          <div v-for="beer in listBeers" v-bind:key="beer.id">
            <BeerItem v-bind:beerItem="beer" v-on:item-clicked="changeSelectedItem"/>
          </div>
        </v-col>
        <v-col cols="8">
          <BeerDetails v-bind:selectedItem="selectedItem"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BeerItem from './BeerItem.vue';
import BeerDetails from './BeerDetails.vue';

export default {
  name: 'ListBeers',
  components: {
    BeerDetails,
    BeerItem
  },
  props: {
    listBeers: {
      type: Array
    }
  },
  data() {
    return { 
      selectedItem: {}
    }
  },
  methods: {
    changeSelectedItem(item) {
      this.selectedItem = item;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
