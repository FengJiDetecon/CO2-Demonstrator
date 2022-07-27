<template>
  <div id="app" style="height: 100%">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <NavBar class="nav-bar" id="navBar"></NavBar>
    <router-view v-slot="{Component, route}" id="co2-page-content">
      <transition :name="route.meta.transition" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "co2-app",
  components: {
    NavBar,
    // Footer,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
:root {
  --mainblue: #063358;
  --brightblue: #0E73C6;
  --darkblue: #063358;
  --darkbackground: #01070C;
  --background: #042037;
  --libackground: #73BBF5;
  --accent2: #ff6b35;
  --gray: #384558;
  --darkgray: #292929;
  --white: #ecf7ff;
  --error: #e27373;
  --lightshadow: #47474765;
  --screen-size: calc(100vh - 60px);
  --nav-bar-height: 60px;
  font-size: 16px;
}
* {
  box-sizing: border-box;
  color: var(--white);
}

#app {
  font-family: 'IBM Plex Sans', sans-serif;
  height: 100vh;
  overflow: hidden;
  background-color: var(--background);
}

#page-content {
  height: calc(100% - var(--nav-bar-height));
}

#page-content::-webkit-scrollbar {
  width: 0.75rem;
}

#page-content::-webkit-scrollbar-track {
  background: #1e1e24;
}

#page-content::-webkit-scrollbar-thumb {
  background: var(--libackground);
}
.nav-bar {
  z-index: 100;
}

body,
html {
  margin: 0;
  height: 50%;
  width: 100%;
}

body {
  background: var(--background);
}

h1 {
  font-size: 3.5rem;
  font-weight: lighter;
  letter-spacing: -1.5px;
}

h2 {
  font-size: 4rem;
  font-weight: normal;
  letter-spacing: -0.5px;
}

h3 {
  font-size: 3.25rem;
}

h4 {
  font-size: 2.3rem;
  letter-spacing: 0.25px;
}

h5 {
  font-size: 1.625rem;
}

h6 {
  font-size: 1.375rem;
  font-weight: 600;
  letter-spacing: 0.15px;
}

p {
  font-size: 1rem;
  letter-spacing: 0.5px;
}

li {
  font-size: 1rem;
  letter-spacing: 0.5px;
}

button {
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1.25px;
}

.button {
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1.25px;
}

label {
  font-size: 1.1rem;
}

input,
textarea {
  font-size: 1rem;
  color: var(--gray);
}

.error {
  color: var(--error);
}

.bold {
    font-weight: 600;
}

.spacer-bottom {
    height: 100px;
}

/* Rules for sizing the icon. */
.material-icons.md-18 {
  font-size: 18px;
}
.material-icons.md-24 {
  font-size: 24px;
}
.material-icons.md-36 {
  font-size: 36px;
}
.material-icons.md-48 {
  font-size: 48px;
}

/* Rules for using icons as black on a light background. */
.material-icons.md-dark {
  color: rgba(0, 0, 0, 0.54);
}
.material-icons.md-dark.md-inactive {
  color: rgba(0, 0, 0, 0.26);
}

/* Rules for using icons as white on a dark background. */
.material-icons.md-light {
  color: rgba(255, 255, 255, 1);
}
.material-icons.md-light.md-inactive {
  color: rgba(255, 255, 255, 0.3);
}

.slide-to-side-enter-active,
.slide-to-side-leave-active {
  transition:opacity 0.5s;
}

.slide-to-side-enter-from,
.slide-to-side-leave-to {
  opacity: 0;
}


.page-wrapper {
  height: var(--screen-size);
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: 100vw;
  overflow-x: hidden;
}

.section {
    padding: 50px;
    width: 100%;
}

@media (max-height: 800px), (max-width: 750px) {
  :root {
    font-size: 14px;
  }

  #page-content::-webkit-scrollbar {
  width: 0.5rem;
  }


.page-wrapper {
  height: 100%;
  scroll-snap-type:initial;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: 100vw;
  overflow-x: hidden;
}

.section {
  padding: 30px;
}

}

.vue-enter-active,
.vue-leave-active {
  transition:opacity 1.5s;
}

.vue-enter-from,
.vue-leave-to {
  opacity: 0;
}
</style>