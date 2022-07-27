<template>
  <div class="navbar-container">
    <div>
      <router-link class="logo-router" :to="{name:'co2-my-components'}">
      <h3 class="logo-text">SEE-O2 MONITOR</h3>
      </router-link>
    </div>
    <div class="tabs-desktop">
      <router-link :to="{name:'my-components'}" class="tab-link">
        <div class="tab">Main Panel</div>
      </router-link>
      <router-link :to="{name:'datasets'}" class="tab-link">
        <li class="tab">Datasets</li>
      </router-link>
      <router-link :to="{name:'connections'}" class="tab-link">
        <div class="tab">Connections</div>
      </router-link>
    </div>

    <div class="hamburger-menu">
      <span @click="openMenu = !openMenu, closeMenu =! closeMenu" class="material-icons hamburger-menu-icon">menu</span>
    </div>

    <div class="mobile-menu" v-bind:class="{ open: openMenu, close: closeMenu }">
      <span  @click="closeMenu = !closeMenu, openMenu =! openMenu" class="exit-mobile-menu material-icons">close</span>
      <div class="mobile-tabs">
      <router-link @click="closeMenu = !closeMenu, openMenu =! openMenu" to="/" class="tab-link">
        <div class="tab">Main Panel</div>
      </router-link>
      <router-link @click="closeMenu = !closeMenu, openMenu =! openMenu" to="/datasets" class="tab-link">
        <li class="tab">Datasets</li>
      </router-link>
      <router-link @click="closeMenu = !closeMenu, openMenu =! openMenu" to="/connections" class="tab-link">
        <div class="tab">Connections</div>
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
      closeMenu: false,
    };
  },
};
</script>

<style scoped>
.navbar-container {
  position: relative;
  background-color: var(--background);
  height: var(--nav-bar-height);
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-areas: "logo tabs";
  align-items: center;
  padding: 20px 30px;
  box-shadow: 1px 1px 3px 5px rgba(0, 0, 0, 0.15);
  z-index: 300;
}

.logo {
  width: 200px;
  grid-area: 'logo';
}

.logo-text {
  font-size: 1rem;
  margin: 0;
  letter-spacing: 2px;
}

.logo-router {
  text-decoration: none;
}

.tabs-desktop {
  list-style: none;
  display: flex;
  column-gap: 40px;
  grid-area: 'tabs';
}

.tab-link {
  text-decoration: none;
}

.tab:hover {
  color: var(--libackground);
}

.tab {
  font-weight: 400;
  letter-spacing: 1.25px;
  color: var(--white);
}

.router-link-active .tab {
  color: var(--libackground);
}

.hamburger-menu-icon {
  font-size: 2rem;
  color: var(--accent1);
  padding: 0;
  margin: 0;
}

.hamburger-menu-icon:hover{
  cursor: pointer;
}


.hamburger-menu {
  color: var(--accent1);
  grid-area: tabmob;
  display: none;
}

.mobile-menu {
  display: none;
  position: absolute;
  right: -100%;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
}

.open {
  transform: translateX(-100%);
}

.close{
  transform: translateX(-100%);
}

.mobile-tabs {
  list-style: none;
  padding: 0;
  text-align: center;
}

.mobile-tabs .tab {
  font-size: 1.8rem;
  padding: 20px;
  margin: 20px 0;
}

.exit-mobile-menu {
  position: absolute;
  left: 15px;
  top: 15px;
  color: var(--white);
  font-size: 2.5rem;
  padding: 20px;
  cursor: pointer;
}

@media (max-width: 850px) {

  .navbar-container {
    grid-template-areas: "logo tabmob";
    place-items: center;
    padding: 0 20px;
  }

  .hamburger-menu {
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  .tabs-desktop {
    display: none;
  }

  .mobile-menu {
    display: flex;
  }

  .logo {
    width: 175px;
  }

}
</style>