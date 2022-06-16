<template>
    <div class="datasets-column">
        <datasets-card :key="id" :id="id" :info="datasets" v-for="id in datasets.ID"></datasets-card>
    </div>
</template>

<script>

    import DatasetsCard from '../DatasetsViewUI/DatasetsCard.vue'

export default {
  components:{
    DatasetsCard,
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

<style  scoped>
.datasets-column {
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>