<template>
  <div class="content-container">

      <div @click="backButton" class="back-button">
        <span class="material-icons">arrow_back</span> Back
      </div>

      <h3 class="details-title">File Details</h3>
      <div class="details-list">
        <p class="detail-row">
          <span class="bold">Content title: </span>CO2 tracking Dataset
        </p>
        <p class="detail-row">
          <span class="bold">Content description: </span>CO2 tracking
        </p>
        <p class="detail-row"><span class="bold">Owner: </span>Michelin</p>
        <p class="detail-row"><span class="bold">Last Access: </span>Today</p>
        <p class="detail-row"><span class="bold">Format: </span> CSV</p>
        <p class="detail-row"><span class="bold">Last Update: </span> Today</p>
        <p class="detail-row">
          <span class="bold">Dataspace Title: </span>Michelin Dataspace
        </p>
        <p class="detail-row">
          <span class="bold">Dataspace Description: </span>Michelin Dataspace
        </p>
        <p class="detail-row"><span class="bold">Dataspace ID: </span>123</p>
        <p class="detail-row">
          <span class="bold">Contact: </span>asdfjda@gmail.com
        </p>
      </div>

  </div>
</template>

<script>
export default {
  methods: {
    backButton() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>

.content-container {
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

* {
  color: var(--mainblue);
}

.back-button {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-weight: 600;
  color: var(--white);
  padding: 10px 20px;
  border-radius: 5px;
  background-color: var(--background);
  width: fit-content;
  cursor: pointer;
}

.back-button span {
  color: var(--libackground);
}

.details-title {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 20px;
}

.details-list {
  border-top: 1px solid var(--mainblue);
}
</style>
