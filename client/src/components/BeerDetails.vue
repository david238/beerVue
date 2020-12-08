<template>
  <div class="beerDetails pa-9">
   <v-container class="beerDetailsContainer">
      <v-row class="beerDetailsRow">
        <v-col class="listofBeers" md="12" lg="4" xl="4" cols="12" sm="12" v-if="selectedItem.image_url">
          <img v-bind:src="selectedItem.image_url" width="160" height="100%" alt="beer image" class="beerImg">
        </v-col>
         <v-col class="beerDetails" md="12" lg="8" xl="8" cols="12" sm="12" v-if="selectedItem.id" >
          <h3 class="beerId">No:{{selectedItem.id}}</h3>
          <h3 class="beerBrewed">Brewed on: {{ selectedItem.first_brewed}}</h3>
          <h4 class="beerName py-4 ">{{selectedItem.name}}</h4>
          <p class="beerDescription py-1">{{selectedItem.description}}</p>
          
          <ul v-for="(food,i) in selectedItem.food_pairing" v-bind:key="i" class="mt-8 pa-0">
            <ol class="foodPairing"><v-icon class="foodPairingIcon pr-8">mdi-thumb-up</v-icon>{{food}}</ol>
          </ul>
        </v-col>
      </v-row>
      <div class="rating mt-8" v-if="selectedItem.image_url">
        <v-expansion-panels v-model="openClose">
          <v-expansion-panel>
            <v-expansion-panel-header>
              Submit a Review
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-rating
                color="warning"
                hover
                length="5"
                size="37"
                v-bind:value="defaultRating"
                v-model.number="rating"
              ></v-rating>
              <v-textarea
                class="mt-5"
                outlined
                name="comments"
                label="Add a comment"
                v-model="comments"
              ></v-textarea>
              <v-btn
                class="mb-6"
                color="accent"
                elevation="2"
                medium
                rounded
                @click="onSubmit(selectedItem.id)"
              >Submit</v-btn>
              <div v-if="ratingStatus == true">
                Submitted successfully
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
   </v-container>
  </div>
</template>

<script>
export default {
  name: 'BeerDetails',
  props: ['selectedItem', 'ratingStatus', 'bus'],
  data() {
    return {
      defaultRating: 3,
      rating: 0,
      comments: '',
      openClose: null
    }
  },
  methods: {
    onSubmit(id) {
      let reviews = { 
        id: id,
        rating: this.rating,
        comment: this.comments 
      };
      
      // emit event to rate beer
      this.$emit('rate-beer', reviews);

      this.clearRatingsComments();
    },
    clearRatingsComments() {
      this.rating = 0;
      this.comments = '';
    },
    closePanel() {
      this.openClose = null;
    }
  },
  mounted() {
    this.bus.$on('clear-ratings-comments', this.clearRatingsComments);
    this.bus.$on('close-panel', this.closePanel);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.beerDetails { 
  background: #1B5E20;
  overflow: auto;
}

.listofBeers {
  height: 700px;
  text-align: center;
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

.rating {
  text-align: center;
}
</style>
