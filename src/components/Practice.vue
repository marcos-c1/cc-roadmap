<template>
  <div
    class="container"
    id="prac-container"
    :style="{
      backgroundImage:
        'url(' +
        require('../assets/practicePhotos/' + prac.imageBackground + '.png') +
        ')',
    }"
  >
    <div class="list">
      <ul>
        <li class="item" v-if="prac.showTitle">
          <h3 :style="{ color: prac.fontColor }">{{ prac.title }}</h3>
        </li>
        <li class="desc">
          <h3>
            {{ prac.description }}
          </h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Practice",
  components: {},
  async created() {
    //let item = await document.getElementsByClassName("item");
    //for(let i = 0; i < item.length; i++){
    //console.log(item[i].textContent)
    //}
  },
  methods: {
  },
  props: ["prac"],
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  min-height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  .list {
    text-align: center;
    padding-top: 50px;
    font-weight: bold;
  }
  .item {
    font-size: 40px;
  }
  .desc {
    background:rgba(0,0,0,0.4);
    border-radius: 10px;
    margin-top: 40px;
    max-width: 800px;
    padding: 20px;
  }
}
</style>