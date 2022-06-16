<template>
  <div class="dataset-wrapper">
    <div class="description-area">
      <h3 class="dataset-title">{{ info.ContentTitle[id] }}</h3>
      <p class="dataset-description">
        <span class="bold">Owner: </span> {{ info.Owner[id] }}
      </p>
      <p class="dataset-description">
        <span class="bold">Last update: </span>{{ info.LastUpdate[id] }}
      </p>
    </div>

    <div class="buttons-area">
      <router-link class="link" :to="'data-overview/' + this.id" >
        <div class="dataset-button">View Data</div></router-link>
      <router-link class="link" :to="'data-details/' + this.id">
        <div class="dataset-button">Details</div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info", "id"],
};
</script>

<style scoped>
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
  background: var(--brightblue);
  padding: 7px;
  width: 100%;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 3px;
  text-align: center;
}

.link {
  text-decoration: none;
  width: 100%;
  max-width: 200px;
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
