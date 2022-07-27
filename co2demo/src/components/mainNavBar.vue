<template>
<header :class="{'scrolled-nav': srolledNav}">
  <div class="nav-container">
    <div class="company-lego">
      <img src="@/assets/Detecon_Logo.svg" alt="Detecon_Lego">
    </div>
    <ul class="navigation" v-show="!mobile"> 
      <li class="nav-tab">
        <router-link class="link" to="/">Home</router-link>
      </li>
      <li class="nav-tab">
        <router-link :to="{name:'co2-home'}" class="link">CO2 Demostrator</router-link>
      </li>
      <li class="nav-tab">
        <router-link to="/" class="link">IoT Plattform</router-link>
      </li>
    </ul>
    <div class="icon">
      <i @click="toggleNavBar" v-show="mobile" class="far fa-bars" :class="{'icon-active': mobileNav}"></i>
    </div>
    <transition name="mobile-nav">
      <ul class="dropdown-navigation" v-show="mobileNav">
        <li class="nav-tab">
          <router-link class="link" to="/">Home</router-link>
        </li>
        <li class="nav-tab">
          <router-link :to="{name:'co2-home'}" class="link">CO2 Demostrator</router-link>
        </li>
        <li class="nav-tab">
          <router-link to="/" class="link">IoT Plattform</router-link>
        </li>
    </ul>
    </transition>
  </div>
</header>
</template>

<script>
export default {
  name: "main-nav-bar",
  data() {
    return {
      srolledNav: null,
      mobileNav: null, 
      mobile: true,
      windowWidth: null,
    };
  },
  methods: {
    toggleNavBar() {
      this.mobileNav = !this.mobileNav;
    },
    checkWindowWidth() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 850) {
        this.mobile = true;
      } else {
        this.mobile = false;
        this.mobileNav = false;
      }
    },
    updateScrollPosition() {
      console.log("updateScrollPosition");
      if (window.scrollY > 50) {
        this.srolledNav = true;
      } else {
        this.srolledNav = false;
      }
    },
    },
  created() {
     this.checkWindowWidth();
    window.addEventListener("resize", this.checkWindowWidth);
  },
  mounted() {
    window.addEventListener("scroll", this.updateScrollPosition);
  },
}
</script>

<style lang="scss" scoped>
header {
  background-color: rgba($color: grey, $alpha: 0.8);
  z-index: 99;
  width: 100%;
  transition: all 0.5s ease all;
  color: white;

  .nav-container {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 15px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media(min-width: 1200px){
      max-width: 1200px;
    }

    ul,
    .link {
      list-style: none;
      font-weight: 500;
      color: white;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link{
      font-size: 20px;
      transition: 0.8s ease all;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
      &:hover {
        color: var(--darkblue);
        border-color:var(--darkblue);
      } 
    }
    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }
    .company-lego {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      img {
        width: 150px;
        height: 150px;
        transition: 0.5s ease all;
      }
    }
    .icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: absolute;
      height: 100%;
      right: 25px;
      top: 0;
      scale: 1.5;

      i {
        font-size: 20px;
        transition: 0.8s ease all;
        cursor: pointer;
      }
    }
    .icon-active {
      transform: rotate(180deg);
    }
    .dropdown-navigation {
      display: flex;
      flex-direction: column;
      position: fixed;
      height: 100%;
      background-color: var(--lightshadow); 
      width: 100%;
      max-width: 250px;
      top: 0;
      left: 0;
      margin: 0;
      animation: slide 0.5s forwards;
      li {
        margin-left: 0;
        .link {
          color: white;

        }
      }
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: all 0.8s ease;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-100%);
    }
    .mobile-nav-enter-to 
    .mobile-nav-leave-from {
      transform: translateX(0);
    }
  }
}
.scrolled-nav {
  background-color: grey;
  color: white;
  .nav-container {
    .company-lego {
      img {
        width: 100px;
        height: 100px;
        transition: 2s ease all;
      }
    }
  }
}
.logo-router {
  text-decoration: none;
}
.tab-link {
  text-decoration: none;
} 
</style>