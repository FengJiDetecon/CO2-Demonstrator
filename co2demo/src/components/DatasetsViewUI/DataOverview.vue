<template>
  <div class="content-container">
    <div @click="backButton" class="back-button">
      <span class="material-icons">arrow_back</span> Back
    </div>
    <file-table v-if="datajson" :co2data="datajson"></file-table>
  </div>
</template>

<script>
import FileTable from "../DashboardCharts/FileTable.vue";

export default {
  components: {
    FileTable,
  },
  data() {
    return {
      datajson: null,
      datasetid: null,
    };
  },
  methods: {
    backButton() {
      return this.$router.go(-1);
    },
  },
  created() {
    const datasetid = this.$route.params.id;
    this.datasetid = datasetid;
    const endpoint = "http://localhost:8000/" + datasetid;
    fetch(endpoint)
      .then((data) => {
        return data.json();
      })
      .then((datajson) => {
        this.datajson = datajson;
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
</style>
