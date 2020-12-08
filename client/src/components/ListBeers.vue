<template>
  <div class="ListBeers">
    <v-container>
      <v-row>
        <v-col class="mt-6 listofBeers" md="12" lg="4" xl="4" cols="12" sm="12">
          <BeerItem v-for="(beer, index) in listBeers" 
            v-bind:key="index" 
            class="listItemContainer" 
            v-bind:beerItem="beer" 
            v-on:set-active="changeSelectedItem"
            v-bind:index="index"
            v-bind:active="index === activeIndex"/>
        </v-col>
        <v-col class="mt-6 beerDetails" md="12" lg="8" xl="8" cols="12" sm="12">
          <BeerDetails v-bind:selectedItem="selectedItem" v-on="$listeners" v-bind:ratingStatus="ratingStatus" v-bind:bus="bus"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BeerItem from './BeerItem.vue';
import BeerDetails from './BeerDetails.vue';
import Vue from 'vue';

export default {
  name: 'ListBeers',
  components: {
    BeerDetails,
    BeerItem
  },
  props: {
    listBeers: {
      type: Array
    },
    ratingStatus: {
      type: Boolean
    }
  },
  data() {
    return { 
      selectedItem: {},
      bus: new Vue(),
      activeIndex: 0
    }
  },
  methods: {
    changeSelectedItem(index) {
      // set new selectedItem
      this.selectedItem = this.listBeers[index];

      // change activeIndex
      this.activeIndex = index;

      // clear results on item change.
      this.$emit('clear-rating-status');

      // clear Comments and ratings
      this.bus.$emit('clear-ratings-comments');
      this.bus.$emit('close-panel');
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
