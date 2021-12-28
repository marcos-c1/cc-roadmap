<template>
  <div class="home">
    <Hero />
    <header>Walkthrough</header>
    <section class="info-section">
      <Info
        :info="info"
        class="info"
        v-for="(info, index) in infoSection"
        :key="index"
      />
    </section>
    <section class="video-section">
      <header>Video Suggestions</header>
      <h3>
        A good way to learn is to watch tutorials on youtube or other sites like
        Udemy, FreeCodeCourse, Digital Innovation One. For a introduction is a
        good place, but if you want to get a deep knowledge and something
        consistent, you should keep learning and practicing every day.
      </h3>
      <section class="video">
        <Suggestion
          :video="video"
          v-for="(video, index) in videoSuggestion"
          :key="index"
        />
      </section>
    </section>
    <section class="practice-section">
      <header>Practice</header>
      <h3>
        As with any other practical activity, programming takes effort and is
        far from easy. In order to have the answer to each problem, the
        experience will be a great decisive difference to solve them and the
        only way to get it is to practice.
      </h3>
      <div class="slide">
        <div class="circle" @click="bsState">
          <div class="showingCircle"></div>
        </div>
        <div class="circle" @click="fmState"></div>
        <div class="circle" @click="cfState"></div>
      </div>
      <Practice
        :prac="prac"
        v-show="prac.slideState"
        v-for="(prac, index) in practiceSites"
        :key="index"
      />
    </section>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Info from "../components/Info.vue";
import Suggestion from "../components/Suggestion.vue";
import Practice from "../components/Practice.vue";

export default {
  name: "Home",
  components: { Hero, Info, Suggestion, Practice },
  data() {
    return {
      infoSection: [
        {
          infoId: 1,
          title: "Walkthrough",
          explainingText:
            "Most of the self-learners struggle to learn properly computer science subjects like Linear Algebra or Mathematics content itself. With this walkthrough based on what we have learned at college, it should answer your questions around that theme besides it would help through your career to be a Computer Scientist",
          explainingTextImage: "teste",
        },
        {
          infoId: 2,
          title: "Walkthrough",
          explainingText:
            "The steps are based on curriculum grade of universities like Harvard, Oxford and Cambridge. But you can make your own path to your objective, just make sure to stick with your ambition.",
          explainingTextImage: "test",
        },
      ],
      videoSuggestion: [
        {
          title: "Traversy Media",
          image: "traversy_media",
          description:
            "Traversy Media features the best online web development and programming tutorials for all of the latest web technologies from the building blocks of HTML, CSS & JavaScript to frontend frameworks like React and Vue to backend technologies like Node.js, Python and PHP.",
          tags: ["developing", "miscellaneous"],
          url: "https://www.youtube.com/c/TraversyMedia",
        },
        {
          title: "John Hammond",
          image: "john_hammond",
          description:
            "John Hammond shows the cyber security world and how to get knowledge to begin in this area. He has a lot of experience at Pentesting and could be helpful if it interested you.",
          tags: ["security", "pentesting"],
          url: "https://www.youtube.com/c/JohnHammond010",
        },
        {
          title: "Programming with Mosh",
          image: "mosh",
          description:
            "Programming with Mosh is a youtube channel which have a focus on how to learn languages, frameworks and much more. Could be useful if you want something general.",
          tags: ["programming", "miscellaneous"],
          url: "https://www.youtube.com/c/programmingwithmosh",
        },
        {
          title: "MIT OpenCourseWare",
          image: "mit",
          description:
            "MIT resources from Computer Scientist Course. It has a lot of Mathematics, Data Structures, Algorithms, Computer Architeture videos. Besides that, it has Logic Proof, a important subject which consistently appears in Algorithms. A great resource, totally free.",
          tags: ["mathematics", "algorithms", "data structure"],
          url: "https://www.youtube.com/c/mitocw",
        },
        {
          title: "freeCodeCamp",
          image: "freeCodeCamp",
          description:
            "freeCodeCamp is a youtube channel which has a lot of useful content around Computer Science themes. There you will learn a lot about every single subject. Still, they had a platform, more likely a walkthrough in their website totally for free.",
          tags: ["programming", "miscellaneous"],
          url: "https://www.youtube.com/c/Freecodecamp",
        },
        {
          title: "edureka!",
          image: "edureka",
          description:
            "A live & interactive e-learning platform with the mission of making learning accessible to everyone. They offer instructor-led courses, along with 24/7 on-demand support to achieve highest course completion rates in the industry. Completely free.",
          tags: ["programming", "miscellaneous"],
          url: "https://www.youtube.com/c/edurekaIN",
        },
      ],
      practiceSites: [
        {
          title: "BinarySearch",
          description:
            "A place to practice what you have learned about algorithms and logic. Topics like DP, Recursion, Sorting and AD-Hoc will appear as a problem.",
          imageBackground: "bs-background",
          url: "https://binarysearch.com/",
          slideState: true,
          showTitle: true,
          fontColor: "#fff",
        },
        {
          title: "FrontEnd Mentor",
          description:
            "A website for frontend developers. Here you can practice your skills at CSS.",
          imageBackground: "fm-background",
          url: "https://www.frontendmentor.io/",
          slideState: false,
          showTitle: false,
          fontColor: "black",
        },
        {
          title: "CodeForces",
          description:
            "Codeforces is a social network dedicated to programming and programming contests. It is a platform where contests are held regularly, the participant's skills are reflected by their rating and the former contests can be used to prepare.",
          imageBackground: "cf-background",
          url: "https://codeforces.com/",
          slideState: false,
          showTitle: false,
          fontColor: "black",
        },
      ],
    };
  },
  mounted() {
    window.setInterval(this.changeState, 5000);
  },
  methods: {
    changeState() {
      let currentCircle = document.querySelectorAll(".circle");
      let position;
      for (let i = 0; i < currentCircle.length; i++) {
        if (currentCircle[i].childElementCount == 1) {
          position = i;
          currentCircle[i].removeChild(currentCircle[i].firstElementChild);
          this.practiceSites[i].slideState = false;
          let showCircle = document.createElement("div");
          showCircle.className = "showingCircle";
          switch (position) {
            case 0:
              currentCircle[position + 1].appendChild(showCircle);
              this.practiceSites[position + 1].slideState = true;
              break;
            case 1:
              currentCircle[position + 1].appendChild(showCircle);
              this.practiceSites[position + 1].slideState = true;
              break;
            case 2:
              currentCircle[0].appendChild(showCircle);
              this.practiceSites[0].slideState = true;
              break;
          }
          break;
        }
      }
    },
    bsState(e) {
      let currentCircle = document.querySelectorAll(".circle");
      if (e.target.className !== "showingCircle") {
        if (currentCircle[1].childElementCount == 1) {
          currentCircle[1].removeChild(currentCircle[1].firstElementChild);
          this.practiceSites[1].slideState = false;
        } else {
          currentCircle[2].removeChild(currentCircle[2].firstElementChild);
          this.practiceSites[2].slideState = false;
        }
        let showCircle = document.createElement("div");
        showCircle.className = "showingCircle";
        currentCircle[0].appendChild(showCircle);
        this.practiceSites[0].slideState = true;
      }
    },
    fmState(e) {
      let currentCircle = document.querySelectorAll(".circle");
      if (e.target.className !== "showingCircle") {
        if (currentCircle[0].childElementCount == 1) {
          currentCircle[0].removeChild(currentCircle[0].firstElementChild);
          this.practiceSites[0].slideState = false;
        } else {
          currentCircle[2].removeChild(currentCircle[2].firstElementChild);
          this.practiceSites[2].slideState = false;
        }
        let showCircle = document.createElement("div");
        showCircle.className = "showingCircle";
        currentCircle[1].appendChild(showCircle);
        this.practiceSites[1].slideState = true;
      }
    },
    cfState(e) {
      let currentCircle = document.querySelectorAll(".circle");
      if (e.target.className !== "showingCircle") {
        if (currentCircle[0].childElementCount == 1) {
          currentCircle[0].removeChild(currentCircle[0].firstElementChild);
          this.practiceSites[0].slideState = false;
        } else {
          currentCircle[1].removeChild(currentCircle[1].firstElementChild);
          this.practiceSites[1].slideState = false;
        }
        let showCircle = document.createElement("div");
        showCircle.className = "showingCircle";
        currentCircle[2].appendChild(showCircle);
        this.practiceSites[2].slideState = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #fff;
  header {
    text-align: center;
    font-size: 45px;
    font-weight: bolder;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding-top: 20px;
    @media (max-width: 600px) {
      font-size: 35px;
    }
  }
  h3 {
    text-align: center;
    @media (min-width: 900px) {
      padding: 50px 150px;
    }
    @media (max-width: 900px) {
      padding: 20px 10px;
    }
    @media (max-width: 650px) {
      padding: 40px 10px;
    }
  }
}

.info-section {
  display: flex;
  background: rgba(0, 0, 0, 0.8);
  padding-bottom: 60px;

  @media (max-width: 700px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
  .info {
    @media (min-width: 700px) {
      flex-direction: row;
      &:nth-child(even) {
        padding-top: 80px;
      }
    }
    position: relative;
  }
}

.video-section {
  padding-bottom: 20px;
  header {
    text-align: center;
    font-size: 45px;
    background: inherit;
    font-weight: bolder;
    padding-top: 20px;
    @media (max-width: 600px) {
      font-size: 35px;
    }
  }

  .video {
    display: grid;
    @media (min-width: 1150px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 0 20px;
    }
    @media (max-width: 1150px) {
      grid-template-columns: repeat(2, 1fr);
      padding-left: 50px;
    }
    @media (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
      padding-left: 120px;
    }
    @media (max-width: 580px) {
      padding-left: 70px;
    }

    @media (max-width: 530px) {
      padding-left: 40px;
    }
    @media (max-width: 500px) {
      padding-left: 10px;
    }
  }
}

.practice-section {
  h3 {
    background: rgba(0, 0, 0, 0.8);
  }
  .slide {
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 30px;
    transition: 0.5s ease all;
    .circle {
      cursor: pointer;
      align-self: center;
      background: white;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}
</style>
