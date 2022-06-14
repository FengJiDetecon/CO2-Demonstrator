<template>
  <div class="component-wrapper" id="bar-chart">
    <h3 class="graph-title">CO2e Emissions (kg) per Tyre</h3>
    <div id="tester" ref="emissions" class="bar-chart"></div>
  </div>
</template>

<script>
import Plotly from "plotly.js-dist";

export default {
  mounted() {
    var data = [
      {
        x: ["giraffes", "orangutans", "monkeys"],
        y: [20, 14, 23],
        type: "bar",
      },
    ];

    var layout = {
      barmode: "group",
    };

    Plotly.newPlot(this.$refs.emissions, data, layout, {
      displaylogo: false,
      responsive: true,
    });
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

.bar-chart {
  width: 100%;
}


</style>
