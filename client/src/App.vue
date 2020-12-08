<template>
  <v-app>
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
