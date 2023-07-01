<template>
  <div class="offer-card">
    <Card>
      <template #header><img :src="imgURL" /></template>
      <template #content>
        <table>
            <tr v-for="(row, index) in offer" :key="index">
                <td class="label-row">{{ row.label }}</td>
                <td class="value-row">{{ row.value }}</td>
            </tr>
        </table>
      </template>
    </Card>
  </div>
</template>
<script setup>
import Card from "primevue/card";
import attributions from "../assets/modules/attributions.js";
const props = defineProps({
  offer: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

let imgURL = new URL(
  `../assets/img/${attributions[props.offer.imgID].imgName}.jpg`,
  import.meta.url
);
</script>
<style lang="scss">
.p-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 350px;
    height: auto;
  }
}

.p-card-content {
    table{
        width: 100%;
    }
    table tr{
        position: relative;
        display: flex;
        justify-content: space-between;
        white-space: nowrap;
        gap: 2rem;
    }
    .label-row{
        font-weight: bold;
        color: var(--main);
        margin: 0.2rem 0
    }
}
</style>