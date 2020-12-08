<template>
  <div class="ListBeers">
    <v-container>
      <v-row>
        <v-col class="mt-6 listofBeers" md="12" lg="4" xl="4" cols="12" sm="12">
          <div v-for="beer in listBeers" v-bind:key="beer.id" class="listContainer">
            <BeerItem v-bind:beerItem="beer" v-on:item-clicked="changeSelectedItem"/>
          </div>
        </v-col>
        <v-col class="mt-6 beerDetails" md="12" lg="8" xl="8" cols="12" sm="12">
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
.listofBeers {
  color: white;
  background: #212121;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow-y: auto;
  height: 800px;
  padding: 0;
}

.beerDetails {
    height: 800px;
    padding: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
</style>
