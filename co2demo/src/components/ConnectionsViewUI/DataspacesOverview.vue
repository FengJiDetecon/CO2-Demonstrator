<template>

<div class="subsection-wrapper">
<h3 class="dataspace-title">Dataspaces</h3>

<div class="dataspaces-container">
        <div class="dataspace-card">
          <p><span class="bold">Dataspace: </span>Continental Manufacturing Dataspace </p>
          <p><span class="bold">Owner: </span>Continental GmbH </p>
          <p><span class="bold">Description: </span>Dataspace centered on manufacturing CO2 emission datasets.</p>
          <p><span class="bold">Last access: </span>12.12.12 12:12:12</p>
          <p><span class="bold">Contact: </span>continental-dataspace@gmail.com</p>
        </div>

        <div class="dataspace-card">
          <p><span class="bold">Dataspace: </span>Continental Manufacturing Dataspace </p>
          <p><span class="bold">Owner: </span>Continental GmbH </p>
          <p><span class="bold">Description: </span>Dataspace centered on manufacturing CO2 emission datasets.</p>
          <p><span class="bold">Last access: </span>12.12.12 12:12:12</p>
          <p><span class="bold">Contact: </span>continental-dataspace@gmail.com</p>
        </div>

        <div class="dataspace-card">
          <p><span class="bold">Dataspace: </span>Continental Manufacturing Dataspace </p>
          <p><span class="bold">Owner: </span>Continental GmbH </p>
          <p><span class="bold">Description: </span>Dataspace centered on manufacturing CO2 emission datasets.</p>
          <p><span class="bold">Last access: </span>12.12.12 12:12:12</p>
          <p><span class="bold">Contact: </span>continental-dataspace@gmail.com</p>
        </div>

        <div class="dataspace-card">
          <p><span class="bold">Dataspace: </span>Continental Manufacturing Dataspace </p>
          <p><span class="bold">Owner: </span>Continental GmbH </p>
          <p><span class="bold">Description: </span>Dataspace centered on manufacturing CO2 emission datasets.</p>
          <p><span class="bold">Last access: </span>12.12.12 12:12:12</p>
          <p><span class="bold">Contact: </span>continental-dataspace@gmail.com</p>
        </div>

</div>

<div class="spacer-bottom"></div>
</div>
</template>

<style scoped>

.subsection-wrapper {
    height: 100%;
    margin-bottom: 100px;    
}

* {
    color: var(--background);
}

.dataspace-title {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
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
  height: 100%;
  box-shadow: 2px 2px 2px 2px var(--lightshadow);
  padding: 20px;
  border-radius: 7px;  
}

.bold {
    font-weight: 600;
}

.spacer-bottom {
    height: 50px;
}

</style>