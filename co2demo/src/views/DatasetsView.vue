<template>
  <div class="page-wrapper">
    <div class="content-container">
      <h3 class="page-title">Connected Datasets</h3>

      <div class="datasets-column">
        <div class="dataset-wrapper">
          <div class="description-area">
            <h3 class="dataset-title">Co2 Tracking</h3>
            <p class="dataset-description">Owner: <span></span></p>
            <p class="dataset-description">Last update:</p>
          </div>

          <div class="buttons-area">
            <div class="dataset-button">View Data</div>
            <div class="dataset-button">Details</div>
          </div>
        </div>

        <div class="dataset-wrapper">
          <div class="description-area">
            <h3 class="dataset-title">Co2 Tracking</h3>
            <p class="dataset-description">Owner: <span></span></p>
            <p class="dataset-description">Last update:</p>
          </div>

          <div class="buttons-area">
            <div class="dataset-button">View Data</div>
            <div class="dataset-button">Details</div>
          </div>
        </div>

        <div class="dataset-wrapper">
          <div class="description-area">
            <h3 class="dataset-title">Co2 Tracking</h3>
            <p class="dataset-description">Owner: <span></span></p>
            <p class="dataset-description">Last update:</p>
          </div>

          <div class="buttons-area">
            <div class="dataset-button">View Data</div>
            <div class="dataset-button">Details</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  background: var(--white);
  padding: 40px;
}

.content-container {
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-top: 0;
  color: var(--background);
}

.datasets-column {
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.dataset-wrapper {
  background: var(--background);
  width: 100%;
  height: 100%;
  max-height: 150px;
  border-radius: 5px;
  box-shadow: 2px 2px 3px 3px var(--lightshadow);
  padding: 20px;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-areas: "description", "buttons";
}

.description-area {
  grid-area: "description";
  display: flex;
  flex-direction: column;
}

.buttons-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  row-gap: 10px;
}

.dataset-button {
  background: var(--libackground);
  padding: 7px;
  width: 100%;
  max-width: 200px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 3px;
  text-align: center;
}

.dataset-button:hover {
  cursor: pointer;
  background: var(--white);
  color: var(--background);
  transition: all 0.2s linear;
}

.dataset-title {
  font-size: 1rem;
  margin-top: 0;
}

.dataset-description {
  margin: 5px 0;
}
</style>
