<template>
  <div class="container">
    <div class="explaingText">
      <span class="number"
        ><h4>{{ info.infoId }}</h4></span
      >
      <p>{{ info.explainingText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: ["info"],
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  @media (min-width: 1100px) {
    padding: 0 150px;
  }

  @media (min-width: 850px) {
    padding: 0 75px;
  }

  @media (min-width: 700px) {
    padding: 0px 0px;
  }

  .explaingText {
    transition: 0.5s ease all;
    display: inline-block;
    text-align: center;
    position: relative;
    &:hover {
      padding: 10px;
    }
    p {
      line-height: 1.4;
      word-spacing: 1px;
      text-align: start;
      width: 100%;

      @media (min-width: 450px) {
        padding: 0 50px;
      }
    }
    .number {
      display: inline-block;
      height: 50px;
      width: 50px;
      color: black;
      font-weight: bolder;
      background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
      border-radius: 50%;
      margin: 20px 0px;
      h4 {
        position: relative;
        padding-top: 15px;
        text-align: center;
      }
    }
  }
}
</style>