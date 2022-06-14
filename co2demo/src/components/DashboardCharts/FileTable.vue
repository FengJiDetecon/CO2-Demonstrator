<template>
    <div class="component-wrapper">
    <h3 class="graph-title">Merged Files</h3>
    <div id="tester" ref="fileTable" class="table"></div>

</div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {

    mounted() {

var values = [
      ['Salaries', 'Office', 'Merchandise', 'Legal', '<b>TOTAL</b>'],
      [1200000, 20000, 80000, 2000, 12120000],
      [1300000, 20000, 70000, 2000, 130902000],
      [1300000, 20000, 120000, 2000, 131222000],
      [1400000, 20000, 90000, 2000, 14102000]]

var data = [{
  type: 'table',
  header: {
    values: [["<b>EXPENSES</b>"], ["<b>Q1</b>"],
				["<b>Q2</b>"], ["<b>Q3</b>"], ["<b>Q4</b>"]],
    align: ["left", "center"],
    line: {width: 1, color: '#506784'},
    fill: {color: '#119DFF'},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    align: ["left", "center"],
    line: {color: "#506784", width: 1},
	fill: {color: ['#25FEFD', 'white']},
    font: {family: "Arial", size: 11, color: ["#506784"]}
  }
}]

 var layout ='';

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