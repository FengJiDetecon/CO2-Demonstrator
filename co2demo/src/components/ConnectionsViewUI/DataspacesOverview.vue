<template>

<div class="subsection-wrapper">
<h3 class="page-title">Dataspaces</h3>

<div class="dataspaces-container">
        <div class="dataspace-card">
          <p class="dataspace-title">Continental Manufacturing Dataspace </p>
          <p class="dataspace-description">Dataspace centered on manufacturing CO2 emission datasets.</p>
          <div class="line"></div>
          <p class="dataspace-detail"><span class="bold">Owner: </span>Continental GmbH </p>
          <p class="dataspace-detail"><span class="bold">Last access: </span>12.12.12 12:12:12</p>
          <p class="dataspace-detail"><span class="bold">Contact: </span>continental-dataspace@gmail.com</p>
        </div>

      <div class="dataspace-card">
          <p class="dataspace-title">Michelin Germany  Dataspace </p>
          <p class="dataspace-description">CO2 emission datasets focused on scope 1 and scope 2 emissions. Datasets focused on products produced in Germany.</p>
          <div class="line"></div>
          <p class="dataspace-detail"><span class="bold">Owner: </span>Michelin Germany GmbH </p>
          <p class="dataspace-detail"><span class="bold">Last access: </span>12.12.12 12:12:12</p>
          <p class="dataspace-detail"><span class="bold">Contact: </span>michelin-dataspace@gmail.com</p>
        </div>

  <div class="dataspace-card">
          <p class="dataspace-title">Bridgestone Greendata Dataspace </p>
          <p class="dataspace-description">Bridgestone's initiative for sustainability and data sharing. </p>
          <div class="line"></div>
          <p class="dataspace-detail"><span class="bold">Owner: </span>Bridgestone GmbH </p>
          <p class="dataspace-detail"><span class="bold">Last access: </span>12.12.12 12:12:12</p>
          <p class="dataspace-detail"><span class="bold">Contact: </span>bridgestone-dataspace@gmail.com</p>
        </div>

   <div class="spacer-bottom"></div>
    
</div>

</div>
</template>

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

.dataspaces-container {
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 20px;
  row-gap: 20px;
  height: 100%;
}

.dataspace-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: var(--mainblue);
  box-shadow: 2px 2px 2px 2px var(--lightshadow);
  padding: 20px;
  border-radius: 7px;  
}

.dataspace-title {
  font-size: 1.5rem;
  font-size: 700;
  margin: 0;
}

.dataspace-description {
  margin-bottom: 15px;
  color: var(--libackground);
}

.dataspace-detail {
  margin: 5px 0;
}

.line {
  border-bottom: 2px solid var(--background);
  margin-bottom: 15px;
}

.spacer-bottom {
    height: 500px;
}

</style>