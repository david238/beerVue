<template>
  <div class="beerDetails pa-12">
   <v-container class="beerDetailsContainer">
      <v-row class="beerDetailsRow">
        <v-col class="mt-6 listofBeers" md="4" lg="4" xl="4" cols="12" sm="12" v-if="selectedItem.image_url">
          <img v-bind:src="selectedItem.image_url" width="160" height="100%" alt="beer image" class="beerImg">
        </v-col>
         <v-col class="mt-6 beerDetails" md="8" lg="8" xl="8" cols="12" sm="12" v-if="selectedItem.id" >
          <h3 class="beerId">No:{{selectedItem.id}}</h3>
          <h3 class="beerBrewed">Brewed on: {{ selectedItem.first_brewed}}</h3>
          <h4 class="beerName py-4 ">{{selectedItem.name}}</h4>
          <p class="beerDescription py-1">{{selectedItem.description}}</p>
          <ul v-for="food in selectedItem.food_pairing" v-bind:key="food">
            <ol class="foodPairing"><v-icon class="foodPairingIcon pr-8">mdi-thumb-up</v-icon>{{food}}</ol>
          </ul>
        </v-col>
      </v-row>
   </v-container>
   
  </div>
</template>

<script>
export default {
  name: 'BeerDetails',
  props: {
    selectedItem: Object
  },
  data() {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.beerDetails { 
  background: #1B5E20;
  overflow: hidden;
}

.listofBeers {
  height: 700px;
}

.beerId {
  color: white;
  font-size: 20px;
}

.beerBrewed {
  font-family: 'Delius Unicase';
  font-size: 15px;
  font-weight: bold;
  color: white;
}

.beerImg {
  border:none;
}

.beerName {
  font-family: 'Catamaran';
  font-size: 58px;
  font-weight: bold;
  line-height: 1.2em;
  color: #FFAB40;
}

.beerDescription { 
  color: white;
  font-size: 15px;
}

.foodPairing {
  font-family: 'Delius Unicase';
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 25px;
  color: white;
  padding: 0;
}

.foodPairingIcon {
  color: #FFAB40;
}
</style>
