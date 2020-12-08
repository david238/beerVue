<template>
  <v-app class="application">
    <Beers/>
  </v-app>
</template>

<script>
import Beers from './components/Beers.vue'

export default {
  name: 'App',

  components: {
    Beers
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ovo');
@import url('https://fonts.googleapis.com/css?family=Delius+Unicase');
@import url('https://fonts.googleapis.com/css?family=Catamaran:wght@100;400');

.application {background: #616161 !important;}
</style>
