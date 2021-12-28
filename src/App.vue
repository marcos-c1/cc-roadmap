<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation_EN v-if="this.en" />
      <Navigation v-else />
      <select name="language" id="lang" @change="changeLang">
        <option value="pt-br">Portuguese - Brazil</option>
        <option value="en">English</option>
      </select>
      <router-view />
      <Footer_EN v-if="this.en" />
      <Footer v-else />
    </div>
  </div>
</template>

<script>
import Navigation_EN from "./en/components/Navigation.vue";
import Footer_EN from "./en/components/Footer.vue";

import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: { Navigation_EN, Footer_EN, Navigation, Footer },
  data() {
    return {
      ptBR: null,
      en: null,
      path: null,
      selectElm: null,
    };
  },
  created() {},
  mounted() {
    this.selectElm = document.querySelector("#lang");
    this.path = window.location.pathname;
    if (/\ben\b/.test(this.path)) {
      this.selectElm.value = "en";
      this.en = true
      this.ptBR = false
   } else {
      this.selectElm.value = "pt-br";
      this.ptBR = true
      this.en = false
    }
  },
  methods: {
    changeLang(e) {
      this.path = window.location.pathname;
      if (e.target.value == "en") {
        this.en = true;
        this.ptBR = false;
      } else if(e.target.value == "pt-br") {
        this.ptBR = true;
        this.en = false;
      }
      switch (this.path) {
        case "/":
          if (this.en) {
            window.location.href = "/en";
            this.selectElm.value = "en";
          }
          break;

        case "/en":
          if (this.ptBR) {
            window.location.href = "/";
          }
          break;

        case "/contato":
          if (this.en) {
            window.location.href = "/en/contact";
          }
          break;

        case "/en/contact":
          if (this.ptBR) {
            window.location.href = "/contato";
          }
          break;

        case "/roadmap":
          if (this.en) {
            window.location.href = "/en/roadmap";
          }
          break;

        case "/en/roadmap":
          if (this.ptBR) {
            window.location.href = "/roadmap";
          }
          break;

        case "/referencias":
          if (this.en) {
            window.location.href = "/en/references";
          }
          break;

        case "/en/references":
          if (this.ptBR) {
            window.location.href = "/referencias";
          }
          break;
      }
    },
  },
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

:root {
  --bs: rgba(1, 25, 54, 1);
}

#lang {
  width: 150px;
  align-self: flex-end;

  padding: 7px;
  color: #fff;
  font-weight: bold;
  background: black;
  border: none;
  border-radius: 5px;
  @media (min-width: 450px) {
    margin-right: 0px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  @media (min-width: 750px) {
    margin-right: 60px;
    margin-top: 15px;
    margin-bottom: 25px;
  }
  @media (min-width: 950px) {
    margin-right: 200px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
}
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgb(205, 140, 90);
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.link-light {
  color: #fff;
}

.icon-light {
  path {
    fill: #fff;
  }
}

.showingCircle {
  background: salmon;
  width: 13px;
  height: 13px;
  margin: 1px;
  border-radius: 50%;
}
.icon {
  height: 20px;
  width: 20px;
}

.header {
  transition: 0.3s color ease;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 25px;
  color: #fff;
  text-decoration: none;
  @media (max-width: 600px) {
    font-size: 20px;
  }
  &:hover {
    font-weight: bold;
  }
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
