<template>
<div class="app" style="height: 100%">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <MainNavBar class="nav-bar" id="navBar"/>
    <div id="main-page-content">
        <router-view />
    </div>
</div>
</template>

<script>
import MainNavBar from "./components/mainNavBar.vue";
export default {
    components: { MainNavBar }
}
</script>
<style lang="scss">
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
body{
    margin: 0;
}
</style>