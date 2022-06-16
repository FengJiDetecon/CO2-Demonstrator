<template>
    <div class="component-wrapper">
    <h3 class="graph-title">Complete Dataset</h3>
    <div id="tester" ref="fileTable" class="table"></div>

</div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {

props: [
    "co2data"
  ],

mounted() {

var headers = Object.keys(this.co2data.file_dataFrame)
var values = Object.values(this.co2data.file_dataFrame)
var target = [[]]

for (const prop in values ){
  target[prop] = Object.values(values[prop])
}


var data = [{
  type: 'table',
  header: {
    values: headers,
    align: ["left", "center"],
    line: {width: 1, color: '#506784'},
    fill: {color: '#063358'},
    font: {family: "Arial", size: 14, color: "white"}
  },
  cells: {
    values: target,
    align: ["left", "center"],
    line: {color: "#506784", width: 1},
	fill: {color: ['#73BBF5', 'white']},
    font: {family: "Arial", size: 12, color: ["#01070C"]}
  }
}]

 var layout = {
  height: 600,
 };

Plotly.newPlot(this.$refs.fileTable, data, layout, {displaylogo: false, responsive:true});

}
}
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

.table {
  width: 100%;
}
</style>