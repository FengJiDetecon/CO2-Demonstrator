<template>
    <div class="component-wrapper" id="bar-chart">
    <div id="tester" ref="emissions" class="bar-chart"></div>

    </div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {

    mounted() {

var data = [
  {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar'
  }
];

var layout = {barmode: 'group'};

    Plotly.newPlot( this.$refs.emissions, data, layout )
  }

}
</script>

<style scoped>

.component-wrapper {
  width: 100%;
  margin: 50px auto;
}


.bar-chart {
  width: 100%;
}

</style>