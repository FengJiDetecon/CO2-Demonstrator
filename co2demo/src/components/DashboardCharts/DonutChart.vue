<template>
  <div class="component-wrapper">
    <h3 class="graph-title">CO2e Emissions (%) per Tyre</h3>
    <div id="tester" ref="emissionsPct" class="donut-chart"></div>
  </div>
</template>

<script>
import Plotly from "plotly.js-dist";

export default {
  mounted() {
    var data = [
      {
        values: [27, 11, 25, 8, 1, 3, 25],
        labels: [
          "US",
          "China",
          "European Union",
          "Russian Federation",
          "Brazil",
          "India",
          "Rest of World",
        ],
        text: "CO2",
        textposition: "inside",
        domain: { column: 1 },
        name: "CO2 Emissions",
        hoverinfo: "label+percent+name",
        hole: 0.4,
        type: "pie",
      },
    ];

    var layout ='';

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
