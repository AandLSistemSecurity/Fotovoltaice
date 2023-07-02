<template>
  <div class="app">
    <header>
      <div class="top-scroller">
        <div class="top-scroll-bar" :style="`width: ${scrolled}%`"></div>
      </div>
      <svg-icon
        class="menu-icon"
        :iconPath="Icons.menuIcon"
        @click="drawerVisible = !drawerVisible"
      />
      <img class="logo mobile-logo" src="./assets/img/logo.svg" alt="" />
      <ul class="desktop-nav">
        <li><a href="#acasa">Acasa</a></li>
        <li><a href="#oferte">Oferte</a></li>
        <li><a href="#despre">Despre noi</a></li>
        <li><a href="#sisteme">Informatii Sisteme</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
    <main>
      <HomeViewVue />
      <OffersView />
      <AboutView />
      <SistemView />
      <ContactView />
    </main>
    <!-- <footer>
      <div class="attribution-container">
        Imagini furnizate de
       <a :href="attributions[0].authorLink">{{ attributions[0].author }}</a> |
       <a :href="attributions[1].authorLink">{{ attributions[1].author }}</a> |
       <a :href="attributions[2].authorLink">{{ attributions[2].author }}</a> si
       <a :href="attributions[3].authorLink">{{ attributions[3].author }}</a>
        de pe <a href="https://unsplash.com/">Unsplash</a>
      </div>
    </footer> -->
    <Sidebar v-model:visible="drawerVisible">
      <h2>Meniu</h2>
      <ul class="mobile-nav">
        <li><a href="#acasa">Acasa</a></li>
        <li><a href="#oferte">Oferte</a></li>
        <li><a href="#despre">Despre noi</a></li>
        <li><a href="#sisteme">Informatii Sisteme</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </Sidebar>
    <ScrollTop />
  </div>
</template>
<script setup>
import { ref } from "vue";
import HomeViewVue from "./views/HomeView.vue";
import Sidebar from "primevue/sidebar";
import SvgIcon from "./components/SvgIcon.vue";
import Icons from "./assets/modules/Icons.js";
import attributions from "./assets/modules/attributions.js";
import OffersView from "./views/OffersView.vue";
import SistemView from "./views/SistemView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import ScrollTop from "primevue/scrolltop";

const scrolled = ref(0);
let drawerVisible = ref(false);

window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolledCalc = (winScroll / height) * 100;
  scrolled.value = Math.round(scrolledCalc);
};
</script>
<style lang="scss">
header {
  width: 100%;
  height: 70px;
  position: fixed;
  background: var(--light);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  gap: 2rem;
}
.desktop-nav {
  display: flex;
  gap: 5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: var(--main);
  }
  a:hover {
    color: var(--light-accent);
  }
}

.mobile-nav {
  display: none;
}

.menu-icon {
  display: none;
}

.logo {
  height: 60px;
  margin-left: 20%;
  left: 0;
  position: absolute;
}

.top-scroller {
  width: 100%;
  height: 4px;
  background: var(--light);
  position: absolute;
  bottom: 0;
}

.top-scroll-bar {
  height: 4px;
  background: var(--main);
}

main {
  width: 100%;
  height: calc(100% - 70px);
  margin-top: 70px;
}

.placeholder {
  width: 100%;
  height: 100vh;
}

@media screen and (max-width: 1366px) {
  .logo {
    margin-left: 10%;
  }
}

@media screen and (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }
  .mobile-nav {
    display: flex;
    flex-flow: column;
    margin: 0;
    padding: 0;
    list-style-type: none;
    align-items: center;
    gap: 1rem;
    a {
      text-decoration: none;
      color: var(--light);
      font-size: 1.3rem;
    }
  }
  .mobile-logo {
    position: relative;
    margin-left: 0;
    left: 0;
  }
  .menu-icon {
    display: block;
    width: 50px;
    fill: var(--main);
    position: absolute;
    left: 1rem;
  }

  .p-sidebar {
    background: var(--main) !important;
    h2 {
      color: var(--light) !important;
      text-align: center;
      border-bottom: 1px solid var(--light);
      padding-bottom: 0.5rem;
    }
  }
}

footer {
  width: 100%;
  height: 40px;
  background: var(--main);
  display: flex;
  align-items: center;
}


.attribution-container {
  width: fit-content;
  margin: auto;
  font-size: 0.8rem;
  display: flex;
  gap: 0.3rem;
  color: var(--light);
  a{
    text-decoration: none;
    color: var(--success);
  }
}
</style>
