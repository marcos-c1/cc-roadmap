<template>
  <a :href="this.switch ? video.url : '/'" target="_blank" class="link">
    <div class="container-card">
      <div class="card" @mouseenter="switchCard" @mouseleave="switchCard">
        <h3 class="video-title" v-show="!this.switch">
          {{ video.title }}
        </h3>
        <img v-show="!this.switch"
          :src="require(`../assets/channelPhotos/${video.image}.png`)"
          alt=""
        />
        <h5 v-show="!this.switch" class="video-description">
          {{ video.description }}
        </h5>
        <small class="video-tags" v-show="!this.switch">
          tags:
          <span v-for="(tag, index) in video.tags" :key="index"
            >{{ tag }},
          </span>
        </small>
        <div class="switch-info" v-show="this.switch">
          <h3 v-show="this.switch">Veja este canal</h3>
          <Click class="icon icon-light"/>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
import Click from "../assets/Icons/click-regular.svg"
export default {
  name: "videoSuggestion",
  props: ["video"],
  components: { Click },
  data() {
      return {
        switch: null
      }
  },
  methods: {
    switchCard(){
      this.switch = !this.switch
    }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.container-card {
  max-width: 400px;
  background: rgba(22, 22, 22, 0.5);
  cursor: pointer;
  transition: 0.5s ease all;
  margin: 10px 10px;
  border-radius: 10px;
  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .icon{
    width: 30px;
    height: 30px;
  }

  .card {
    min-width: 400px;
    align-items: center;
    display: flex;
    height: 100%;
    z-index: 3;
    flex-direction: column;
    padding: 15px;
    border: 1px solid rgba(0, 0, 0, 0.06);

    @media (min-width: 1150px) {
      min-width: 300px;
    }

    @media(max-width: 1150px){
      min-width: 200px;
    }

    @media(max-width: 950px){
      min-width: 100px;
    }
    
    img {
      padding: 10px 0;
      border-radius: 50%;
    }

    small {
      padding: 10px 0;
    }

    .switch-info {
      height: 200px;
      padding-top: 80px;
      text-align: center;
    }
  }
}
</style>