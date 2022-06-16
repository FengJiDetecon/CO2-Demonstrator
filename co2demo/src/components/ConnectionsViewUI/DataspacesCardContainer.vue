<template>
    <div class="dataspaces-container">
        <dataspaces-card :key="id" :id="id" :info="datasets" v-for="id in datasets.ID"></dataspaces-card>
    </div>
</template>

<script>
import DataspacesCard from '../ConnectionsViewUI/DataspacesCard.vue'

export default {
  components:{
    DataspacesCard,
  },
  props: [
    "datasets"
  ],
  data(){
    return {
        titles: [],
        datasetinfo: [],
    }
  },
}
</script>

<style scoped>
.dataspaces-container {
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 20px;
  row-gap: 20px;
  height: 100%;
  width: 100%;
}

</style>
