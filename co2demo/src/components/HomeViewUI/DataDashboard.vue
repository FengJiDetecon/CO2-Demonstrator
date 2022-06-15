<template>
    <div class="page-wrapper">

      <div @click="backButton" class="back-button">
        <span class="material-icons">arrow_back</span> Back
      </div>

        <h3 class="window-title">CO2 Emissions Visualization Tools</h3>

        <div class="graph-wrapper">
        <summary-chart v-if="datajson" :co2data="datajson" ></summary-chart>
        <bar-chart v-if="datajson" :co2data="datajson"></bar-chart>
        <donut-chart v-if="datajson" :co2data="datajson"></donut-chart>
        <file-table v-if="datajson" :co2data="datajson"></file-table>
        </div>

    </div>
</template>

<script>
import BarChart from '../DashboardCharts/BarChart.vue'
import DonutChart from '../DashboardCharts/DonutChart.vue'
import FileTable from '../DashboardCharts/FileTable.vue'
import SummaryChart from '../DashboardCharts/SummaryChart.vue'


export default {
  name: "DataDashboard",
  components: {
    DonutChart,
    BarChart,
    FileTable,
    SummaryChart
  },
  data() {
    return {
      datajson: null,
    }
  },
  methods: {
    backButton() {
      return this.$router.go(-1);
    },
  },
  created() {
    fetch('http://localhost:8000/').then(data => {
      return data.json()
    }).then (datajson => {
      console.log(datajson)
      this.datajson = datajson
    })
  },
};


</script>


<style scoped>

.page-wrapper {
    width: 100%;
    height: 100%;
    overflow: auto;
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

.window-title{
  color: var(--mainblue);
  font-size: 1.5rem;
  margin-top: 40px;
}

.graph-wrapper {
    width: 100%; 
}


</style>