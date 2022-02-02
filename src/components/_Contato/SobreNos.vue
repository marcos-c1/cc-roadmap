<template>
  <div class="container">
    <div class="container-row">
      <img class="logo" src="../../assets/Photos/ifb-regular.png" alt="" />
      <div>
        <p>
          Os criadores do projeto são
          <a
            href="https://github.com/marcos-c1"
            target="_blank"
            @mouseover="showMarcos"
            @mouseout="showMarcos"
            >Marcos</a
          >
          e
          <a
            href="https://github.com/Nathalia-git"
            target="_blank"
            @mouseover="showNath"
            @mouseout="showNath"
            >Nathalia</a
          >. Atualmente, somos estudantes de Ciência da Computação pelo Instituto Federal de Brasília. Esperamos que esse projeto de RoadMap possa ajudar as pessoas a entender um pouco de Computação e Programação em geral.
        </p>
        <small
          >Qualquer sugestão ou critica, abra uma "issue" no
          <a
            href="https://github.com/marcos-c1/cc-roadmap"
            alt="git"
            target="_blank"
            >Github</a
          ></small
        >
      </div>
    </div>
    <div class="photos">
      <img src="../../assets/Photos/eu.jpg" alt="" />
      <h4 v-show="isShowingMarcos">Marcos</h4>
      <img src="../../assets/Photos/nath.jpeg" alt="" />
      <h4 v-show="isShowingNath">Nathalia</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuemSomos",
  components: [],
  data() {
    return {
      isShowingMarcos: null,
      isShowingNath: null,
    };
  },
  methods: {
    showMarcos() {
      this.isShowingMarcos = !this.isShowingMarcos;
    },
    showNath() {
      this.isShowingNath = !this.isShowingNath;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 15px 150px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 4px 6px 5px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background: #fff;
  .logo {
    margin-top: 40px;
  }
  @media (min-width: 450px) {
    margin: 0px;
    .logo {
      width: 200px;
      height: 150px;
    }
    .container-row > div {
      padding-top: 30px;
    }
    .container-row > div > p {
      font-size: 15px;
    }
    .container-row > div > small {
      padding-top: 30px;
    }
    .photos {
      margin-top: 20px;
      justify-content: center;
    }
    .photos > h4 {
      padding-top: 25px;
    }
  }
  @media (min-width: 600px) {
    margin: 0px;
    .logo {
      width: 200px;
      height: 150px;
    }
    .container-row > div {
      padding-top: 30px;
    }
    .container-row > div > p {
      font-size: 17px;
    }
    .container-row > div > small {
      padding-top: 30px;
    }
    .photos {
      margin-top: 20px;
      justify-content: center;
    }
    .photos > h4 {
      padding-top: 25px;
    }
  }
  @media (min-width: 800px) {
    margin: 0px;
    .logo {
      width: 200px;
      height: 150px;
    }
    .container-row > div {
      padding-top: 30px;
    }
    .container-row > div > p {
      font-size: 18px;
    }
    .container-row > div > small {
      padding-top: 50px;
    }
    .photos {
      margin-top: 20px;
      justify-content: flex-end;
    }
    .photos > h4 {
      padding-top: 25px;
    }
  }

  @media (min-width: 950px) {
    margin: 0 100px;
    .logo {
      width: 250px;
      height: 200px;
    }
    .container-row > div {
      padding-top: 30px;
    }
    .container-row > div > p {
      font-size: 18px;
    }
    .container-row > div > small {
      padding-top: 50px;
    }
    .photos {
      margin-top: 20px;
      justify-content: flex-end;
    }
    .photos > h4 {
      padding-top: 25px;
    }
  }

  @media (min-width: 1100px) {
    margin: 0 150px;
    .logo {
      width: 250px;
      height: 200px;
    }
    .container-row > div {
      padding-top: 30px;
    }
    .container-row > div > p {
      font-size: 20px;
    }
    .container-row > div > small {
      padding-top: 50px;
    }
    .photos {
      margin-top: 20px;
      justify-content: flex-end;
    }
    .photos > h4 {
      padding-top: 25px;
    }
  }

  .container-row {
    display: flex;
    flex-direction: row;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      a {
        font-weight: bold;
        color: red;
        cursor: pointer;
        &:hover {
          transition: all 0.5s ease;
          color: black;
          border-bottom: 1px solid black;
        }
      }
      small {
        font-size: 13px;
      }
    }
  }
  .photos {
    display: flex;
    flex-direction: row;
    //justify-content: flex-end;

    img {
      transition: all 0.5s ease;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      &:nth-child(odd) {
        margin-right: 20px;
      }
      &:hover {
        cursor: pointer;
        width: 80px;
        height: 80px;
      }
    }
    h4 {
      &:nth-child(even) {
        padding-right: 10px;
      }
    }
  }
}
</style>