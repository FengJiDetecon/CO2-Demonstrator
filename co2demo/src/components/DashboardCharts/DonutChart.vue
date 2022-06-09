<template>
<div class="page-wrapper">
    <div id="tester" ref="myDiv" class="pie-chart"></div>

</div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {

    data () {
        return{

        }
    },

    mounted() {

var data = [{
  values: [27, 11, 25, 8, 1, 3, 25],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  text: 'CO2',
  textposition: 'inside',
  domain: {column: 1},
  name: 'CO2 Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

var layout = {
  title: 'Global Emissions 1990-2011',
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'CO2',
      x: 0,
      y: 0
    }
  ],
  height: 400,
  width: 600,
  showlegend: false,
};

    Plotly.newPlot( this.$refs.myDiv, data, layout )
  }

}
</script>


<style scoped>
* {
    color: black;
}

</style>