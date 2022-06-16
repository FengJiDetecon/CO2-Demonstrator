<template>

<div class="subsection-wrapper">
<h3 class="page-title">Dataspaces</h3>

<div class="dataspaces-container">
        <dataspaces-card-container v-if="datajson" :datasets="datajson"></dataspaces-card-container>

   <div class="spacer-bottom"></div>
    
</div>

</div>
</template>

<script>
import DataspacesCardContainer from '../ConnectionsViewUI/DataspacesCardContainer.vue'

export default {
  components:{
    DataspacesCardContainer,
  },
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
}
</script>


<style scoped>

.subsection-wrapper {
    height: 100%;
    margin-bottom: 100px;    
}


.page-title {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--mainblue);
}


.spacer-bottom {
    height: 500px;
}

</style>