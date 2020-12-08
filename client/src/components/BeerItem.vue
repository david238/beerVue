<template>
    <div @click="$emit('item-clicked', beerItem)">
        <h4>{{beerItem.id}}</h4>
        <h3>{{beerItem.name}}</h3>
    </div>
</template>

<script>
export default {
    name: "BeerItem",
    props: {
    beerItem: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>