<template>
    <div @click="$emit('item-clicked', beerItem)" class="pt-5 pl-5 pb-8 beerItemContainer">
        <h5 class="brewed">Crafted On: {{beerItem.first_brewed}}</h5>
        <h3 class="beerName">{{beerItem.name}}</h3>
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
.brewed {
    font-family: 'Delius Unicase';
    font-size: 15px;
    font-weight: bold;
}

.beerName {
    font-family: 'Catamaran';
    font-size: 27px;
    color: #FFAB40;
    font-weight: bold;
}

.beerItemContainer:hover {
    background: #757575;
    cursor: pointer;
}
</style>