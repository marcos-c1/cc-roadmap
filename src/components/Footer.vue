<template>
  <footer>
    <nav>
      <div class="branding">
        <router-link :to="{name : 'Inicio'}" class="header" 
          ><mappleLeaf class="icon" /> Roadmap</router-link
        >
        <small>&copy; Todos os direitos reservados.</small>
        <small>Criado por Marcos Campos e Nathalia Pinheiro</small>
      </div>
      <div class="social-medias">
        <a href="https://github.com/marcos-c1/cc-roadmap" target="_blank">
          <ul>
            <li>
                <img src="../assets/Icons/star.png" alt="" class="star-img" srcset="">
            </li>
            <li><Github class="icon" /></li>
          </ul>
        </a>
      </div>
    </nav>
  </footer>
</template>

<script>
import mappleLeaf from "../assets/Icons/mapple-leaf.svg";
import Github from "../assets/Icons/github-regular.svg";

export default {
  name: "footer",
  components: { mappleLeaf, Github },
  methods: {
    scrollUp(){
      let el = document.querySelector("#mainly-menu")
      el.scrollIntoView({ block: 'end', behavior: 'smooth'});
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  padding: 20px 25px;
  color: #fff;
  z-index: 1;
  nav {
    display: flex;
    justify-content: space-between;
    padding: 15px 150px;
    @media (max-width: 950px) {
      padding: 15px 0;
    }
    .branding {
      display: flex;
      flex-direction: column;
      small {
        padding-left: 25px;
        padding-top: 5px;
      }
    }
    .social-medias {
      cursor: pointer;
      ul {
        display: flex;
        li {
          padding: 5px 10px;
          .star-img {
            width: 25px;
            height: 25px;
          }
        }
        li:last-child {
          padding-left: 0px;
        }
      }
      align-self: center;
      border: 1px solid transparent;
      background: white;
      border-radius: 5px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      &:hover {
        background: rgba(0, 0, 0, 1);
        a {
          color: #fff;
        }
        path {
          fill: #fff;
        }
      }
      a {
        color: black;
        margin-bottom: 10px;
        font-weight: bold;
      }
    }
  }
}
</style>