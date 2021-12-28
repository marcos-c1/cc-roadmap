<template>
  <div class="hero">
    <nav class="container">
      <h1>Want to be a Computer Scientist?</h1>
      <h2>This roadmap was designed for you</h2>
      <button class="btn" @click="showRoadMap">Show me</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "hero",
  components: {},
  methods: {
    showRoadMap() {
      window.location.href = "/en/roadmap"
    },
  },
};
</script>

<style lang="scss">
.hero {
  max-width: 1440px;
  .container {
    min-height: 300px;
    padding: 100px;
    text-align: center;
    color: white;
    @media (max-width: 600px) {
      padding: 50px;
    }
    h1 {
      font-size: 45px;
      @media (max-width: 600px) {
        font-size: 35px;
      }
    }
    h2 {
      padding-top: 10px;
      padding-bottom: 20px;
    }
    .btn {
      font: inherit;
      font-weight: bold;
      background: black;
      border: unset;
      color: white;
      box-shadow: 2px 4px 6px 5px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      border-radius: 8px;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background: white;
        color: black;
      }
    }
  }
}
</style>