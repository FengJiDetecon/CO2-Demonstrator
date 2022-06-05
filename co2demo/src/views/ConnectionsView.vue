<template>
  <div class="page-wrapper">
    <div class="content-container">
      <h3 class="page-title">Data Spaces and Connections History</h3>

        <div class="window-links">
        
        <router-link class="link" to="/connections-history">
        <div class="link-button">
        Connections History
        </div>
        </router-link>
        
        
        <router-link class="link" to="/dataspaces-overview">
        <div class="link-button">Dataspaces Overview
        </div>
        </router-link>
        
        </div>  


        <router-view v-slot="{ Component, route }" id="page-content">
          <transition :name="route.meta.transition" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>

    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  background: var(--white);
  padding: 40px;
  height: 100%;
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

* {
  color: var(--background);
}

.window-links {
  display: flex;
  column-gap: 10px;
  border-bottom: 1px solid var(--background);
}

.link-button {
  text-decoration: none;
  background-color: var(--background);
  color: var(--white);
  padding: 10px 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.link-button:hover {
  background: var(--libackground);
  transition: all linear 0.2s;
}

.link {
  text-decoration: none;
}


</style>
