<template>
  <div id="sisteme" class="sistems">
    <h1>Informatii Sisteme</h1>
    <div class="sistems-content">
      <Card class="sistem-card">
        <template #header>
          <img src="../assets/img/solar.svg" />
        </template>
        <template #title>
          <h1>Off Grid</h1>
        </template>
        <template #content>
          Un sistem independent de generare a energiei electrice utilizând
          panouri solare fotovoltaice, fără a fi conectată la rețeaua electrică
          principală. Energia este stocată în baterii pentru a fi utilizată în
          perioadele fără soare sau noaptea.
        </template>
      </Card>
      <Card class="sistem-card">
        <template #header>
          <img src="../assets/img/tower.svg" />
        </template>
        <template #title>
          <h1>On Grid</h1>
        </template>
        <template #content>
          Un sistem de generare a energiei electrice utilizand panouri solare
          fotovoltaice, conectate direct la reteaua electrica principala,
          permitand producerea si furnizarea de energie in retea, cu
          posibilitatea de a compensa sau vinde surplusul de energie.
        </template>
      </Card>
      <Card class="sistem-card">
        <template #header>
          <img class="hybrid-img" src="../assets/img/hybrid.svg" />
        </template>
        <template #title>
          <h1>Hibrid</h1>
        </template>
        <template #content>
          Un sistem hibrid oferă flexibilitate și siguranță în furnizarea de
          energie electrică. În perioadele în care nu există suficientă lumină
          solară sau bateriile sunt descărcate, sistemul poate comuta automat la
          alimentarea din rețeaua electrică.
        </template>
      </Card>
    </div>
  </div>
</template>
<script setup>
import Card from "primevue/card";
</script>
<style lang="scss">
.sistems {
  width: 60%;
  margin: auto;
  padding: 5rem 0;
  color: var(--main);
  h1 {
    margin-bottom: 5rem;
  }
}

.sistems-content {
  display: flex;
  gap: 5rem;
}

.sistem-card {
  width: 30%;
  text-align: center;
  h1 {
    margin: 0;
    color: var(--main);
  }
  img {
    width: 50%;
    margin-top: 3rem;
  }
}

.hybrid-img {
  width: 300px !important;
}

@media screen and (max-width: 1024px) {
  .sistems{
    width: 100%;
    h1{
      text-align: center;
    }
  }
  .sistems-content{
    flex-flow: column;
    align-items: center;
  }
  .sistem-card{
    width: 90%;
  }
}
</style>