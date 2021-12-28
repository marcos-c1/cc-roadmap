<template>
  <div class="container-road">
    <div class="content-road">
      <h1 class="title">Computer Scientist</h1>
      <img style="float: right" src="../../assets/summary.png" alt="" />
    </div>
    <img class="roadmap" src="../../assets/roadmap.png" alt="" />
    <div class="references">
      <h1>Keep Learning</h1>
      <p>
        Make sure to read the books in our
        <router-link
          style="color: red"
          class="link"
          :to="{ name: 'References' }"
          >References </router-link
        >section
      </p>
    </div>
  </div>
</template>

<script>
//import RoadMap from "../assets/roadmap.svg"

export default {
  name: "Roadmap",
  components: {},
};
</script>

<style lang="scss" scoped>
.container-road {
  color: #fff;
  .content-road {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 450px) {
      .title {
        margin-top: 170px;
        margin-left: 10px;
        margin-right: 20px;
        font-size: 16px;
        padding: 10px 10px;
      }
      img {
        padding: 5px 15px;
      }
    }
    @media (min-width: 550px) {
      .title {
        margin-top: 170px;
        margin-left: 70px;
        margin-right: 20px;
        font-size: 18px;
        padding: 10px 10px;
      }
      img {
        padding: 5px 15px;
      }
    }
    @media (min-width: 800px) {
      .title {
        margin-top: 150px;
        margin-left: 100px;
        margin-right: 20px;
        font-size: 25px;
        padding: 10px 10px;
      }
      img {
        padding: 5px 15px;
      }
    }
    @media (min-width: 950px) {
      .title {
        margin-top: 160px;
        margin-left: 150px;
        font-size: 30px;
        padding: 10px 20px;
      }
      img {
        margin-right: 100px;
        margin-top: 20px;
        padding: 10px 30px;
      }
    }
    @media (min-width: 1100px) {
      .title {
        margin-top: 160px;
        margin-left: 150px;
        font-size: 35px;
        padding: 10px 20px;
      }
      img {
        margin-right: 100px;
        margin-top: 20px;
        padding: 10px 30px;
      }
    }
    .title {
      box-shadow: 2px 4px 6px 5px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      border-radius: 5px;
    }
    img {
      box-shadow: 2px 4px 6px 5px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }
  .roadmap {
    @media (min-width: 450px) {
      width: 430px;
      height: 300px;
    }

    @media (min-width: 550px) {
      width: 550px;
    }
    @media (min-width: 800px) {
      width: 780px;
      height: 500px;
    }
    @media (min-width: 950px) {
      width: 920px;
      height: 570px;
    }
    @media (min-width: 1100px) {
      width: unset;
      height: unset;
    }
  }
  .references {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    p {
      padding-top: 20px;
      font-weight: 600;
    }
  }
}
</style>