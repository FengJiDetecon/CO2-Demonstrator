<template>
  <div class="content-container">

      <div @click="backButton" class="back-button">
        <span class="material-icons">arrow_back</span> Back
      </div>

      <h3 class="details-title">File Details</h3>
      <data-details-rows v-if="datajson" :id="datasetid" :datadetails="datajson"></data-details-rows>

  </div>
</template>

<script>
import DataDetailsRows from '../DatasetsViewUI/DataDetailsRows.vue'

export default {
  components: {
    DataDetailsRows
  },
  methods: {
  backButton() {
      return this.$router.go(-1);
    },
  },
  data() {
    return {
      datajson: null,
      datasetid: null,
    };
  },
  created(){
    const datasetid = this.$route.params.id
    this.datasetid = datasetid

    fetch("http://localhost:8000/datasets")
      .then((data) => {
        return data.json();
      })
      .then((datajson) => {
        this.datajson = datajson.file_dataFrame;
      });  
  },

};
</script>

<style scoped>

.content-container {
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

* {
  color: var(--mainblue);
}

.back-button {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-weight: 600;
  color: var(--white);
  padding: 10px 20px;
  border-radius: 5px;
  background-color: var(--background);
  width: fit-content;
  cursor: pointer;
}

.back-button span {
  color: var(--libackground);
}

.details-title {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 20px;
}


</style>
