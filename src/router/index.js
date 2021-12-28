import Vue from "vue";
import VueRouter from "vue-router";

// English Language
import Home from "../en/views/Home.vue";
import Contact from "../en/views/Contact.vue";
import References from "../en/views/References.vue";
import RoadMap from "../en/views/Roadmap.vue"

// PT-BR
import Inicio from "../views/Inicio.vue";
import Contato from "../views/Contato.vue";
import Percurso from "../views/Percurso.vue";
import Referencias from "../views/Referencias.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/en",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/en/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },
  {
    path: "/en/roadmap",
    name: "RoadMap",
    component: RoadMap,
    meta: {
      title: 'RoadMap'
    }
  },
  {
    path: "/en/references",
    name: "References",
    component: References,
    meta: {
      title: 'References'
    }
  },
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
    meta: {
      title: 'Inicio'
    }
  },
  {
    path: "/contato",
    name: "Contato",
    component: Contato,
    meta: {
      title: 'Sobre nós'
    }
  },
  {
    path: "/roadmap",
    name: "Percurso",
    component: Percurso,
    meta: {
      title: 'Percurso'
    }
  },
  {
    path: "/referencias",
    name: "Referencias",
    component: Referencias,
    meta: {
      title: 'Referencias'
    }
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | RoadMap`;
  next();
})

export default router;
