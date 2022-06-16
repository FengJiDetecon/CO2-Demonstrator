<template>
  <div class="">
    <h3 class="page-title">Connected Datasets</h3>

    <datasets-column v-if="datajson" :datasets="datajson"></datasets-column>
  </div>
</template>

<script>
import DatasetsColumn from "../DatasetsViewUI/DatasetsColumn.vue";

export default {
  components: {
    DatasetsColumn,
  },
  name: "ConnectedDatasets",
  data() {
    return {
      datajson: null,
    };
  },
  created() {
    fetch("http://localhost:8000/datasets")
      .then((data) => {
        return data.json();
      })
      .then((datajson) => {
        this.datajson = datajson.file_dataFrame;
      });
  },
  methods: {
    backButton() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  background: var(--white);
  padding: 40px;
}

.content-container {
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-top: 0;
  color: var(--background);
}
</style>
