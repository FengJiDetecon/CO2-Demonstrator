<template>
  <main class="page-wrapper">
    <div class="content-container">
      <h3 class="dashboard-title">CO2 Footprint Tracking Dashboard</h3>
      <div class="dashboard-view">
        <router-view v-slot="{ Component, route }" id="page-content">
          <transition :name="route.meta.transition" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
        <div class="spacer-bottom"></div>
  </main>
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

.dashboard-title {
  margin: 0;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--mainblue);
}


</style>
