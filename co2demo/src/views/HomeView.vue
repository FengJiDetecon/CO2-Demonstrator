<template>
  <main class="page-wrapper">
    <div class="dashboard-container">
      <h3 class="dashboard-title">CO2 Footprint Tracking Dashboard</h3>
      <div class="dashboard-view">
        <router-view v-slot="{ Component, route }" id="page-content">
          <transition :name="route.meta.transition" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </main>
</template>

<style scoped>
.page-wrapper {
  padding: 40px;
  display: flex;
  align-content: center;
}

.dashboard-container {
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 20px 40px;
  max-width: 1000px;
  background-color: var(--white);
  border-radius: 15px;
}

.dashboard-title {
  margin: 0;
  font-size: 2rem;
}

.dashboard-container * {
  color: var(--background);
}
</style>
