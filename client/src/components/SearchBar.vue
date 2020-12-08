<template>
  <div class="SearchBar mt-7">
      <v-input >
          <v-text-field height="30" class="pt-3"
            label="Search A Beer" v-model="searchThisBeer"
          ></v-text-field>
          <v-btn
            class="mx-2"
            fab
            dark
            x-small
            color="orange accent-2"
            @click="$emit('search-beer', searchThisBeer)"
          >
            <v-icon dark>
              mdi-magnify
            </v-icon>
          </v-btn>
      </v-input>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchThisBeer: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
