<template>
    <div id="oferte" class="offers">
        <h1>Ofertele noastre</h1>
        <h2></h2>
        <div class="offers-content">
            <offer-card v-for="(offer, index) in offers" :key="index" :offer="offer" />
        </div>
    </div>
</template>
<script setup>
import OfferCard from '../components/OfferCard.vue';
import offers from '../assets/modules/offers.js';

</script>
<style lang="scss">
.offers {
    width: 60%;
    margin: auto;
    padding: 3rem 0 10rem 0;
    h1{
        color: var(--main);
    }
}

.offers-content {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-top: 5rem;
}

</style>