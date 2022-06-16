<template>
    <div class="dataspace-card">
          <p class="dataspace-title">{{ info.Dataspace[id] }} </p>
          <p class="dataspace-description">{{ info.DataspaceDescription[id] }}</p>
          <div class="line"></div>
          <p class="dataspace-detail"><span class="bold">Owner: </span>{{ info.Owner[id] }}</p>
          <p class="dataspace-detail"><span class="bold">Last access: </span>{{ info.LastAccess[id] }}</p>
          <p class="dataspace-detail"><span class="bold">Contact: </span>{{ info.Contact[id] }}</p>
        </div>
</template>

<script>

export default {
    props: ["info", "id"]
}

</script>

<style scoped>
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
</style>
