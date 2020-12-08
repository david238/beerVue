<template>
  <div class="beerDetails">
    Beer Details here
    {{selectedItem.id}}
    {{selectedItem.name}}
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

</style>
