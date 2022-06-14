<template>
  <div class="component-wrapper" id="bar-chart">
    <h3 class="graph-title">Summary</h3>

    <div class="content-layout">
    <div class="profile-info">
    <h3 class="component-title">Tyre 206/55 r16</h3>
    <img class="component-image" src="../../assets/tyre-single.jpg" alt="tyre-image">
    </div>

    <div class="indicators-container">
    <div class="indicator-container">
      <div class="indicator-title">Total CO2e Emissions per Tyre </div>
      <div class="indicator-number">123 kg</div>
    </div>
    <div class="indicator-container">
      <div class="indicator-title">Material CO2e Emissions per Tyre </div>
      <div class="indicator-number">43 kg</div>
    </div>
     <div class="indicator-container">
      <div class="indicator-title">Manufacturing Processes CO2e Emissions per Tyre </div>
      <div class="indicator-number">80 kg</div>
    </div>
    <div class="indicator-container">
      <div class="indicator-title">Highest Material CO2e Contributor </div>
      <div class="indicator-number">Rubbber</div>
    </div>
    <div class="indicator-container">
      <div class="indicator-title">Highest Process CO2e Contributor </div>
      <div class="indicator-number">Calendering</div>
    </div>
    </div>
    </div>
    
  </div>
</template>


<style scoped>

.graph-title {
  text-align: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.component-wrapper {
  width: 100%;
  margin: 50px auto;
  background-color: var(--background);
  padding: 10px 20px 40px 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 4px 1px var(--lightshadow);
}

.component-image {
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
}

.component-title {
    font-size: 2rem;
    letter-spacing: 1.5px;
}

.content-layout {
    display: grid;
    grid-template-columns: 30% 70%;
    column-gap: 30px;
}

.indicators-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 15px;
    column-gap: 15px;
}

.indicator-container {
  background-color: var(--pure-white);
  box-shadow: 2px 2px 3px 2px var(--darkbackground);
  border-radius: 15px;
  display: flex;
  width: fit-content;
  align-items: center;
}

.indicator-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--mainblue);
  margin: 0;
  padding: 20px 15px;
}

.indicator-number {
  font-weight: 600;
  background-color: var(--brightblue);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0px 15px;
   height: 100%;
   display: grid;
   align-items: center;
}


</style>
