<template>
  <div class="component-wrapper" id="donut-chart">
    <h3 class="graph-title">CO2e Emissions (%) per Tyre</h3>
    <div id="testerb" ref="emissionsPct" class="donut-chart"></div>
  </div>
</template>

<script>
import Plotly from "plotly.js-dist";

export default {
   props: [
    "co2data"
  ],

  mounted() {

    const labelsY = Object.values(this.co2data.emissions_pct['Section'])
    const valuesX = Object.values(this.co2data.emissions_pct['CO2e Emissions (%) per Tyre'])

    var data = [
      {
        labels: labelsY,
        values: valuesX,
        // text: "CO2",
        // textposition: "inside",
    
        // name: "CO2 Emissions",
        // hoverinfo: "label+percent+name",
        // hole: 0.4,
        type: "pie",
      },
    ];

    var layout = ''


    Plotly.newPlot(this.$refs.emissionsPct, data, layout, {displaylogo: false, responsive:true});
  },
};
</script>

<style scoped>

.graph-title {
  text-align: center;
  color: var(--mainblue);
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.component-wrapper {
  width: 100%;
  margin: 50px auto;
  background-color: var(--pure-white);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 4px 1px var(--lightershadow);
}


.donut-chart {
  width: 100%;
}
</style>
