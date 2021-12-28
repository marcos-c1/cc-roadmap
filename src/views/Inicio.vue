<template>
  <div class="home">
    <Hero />
    <header>Passo a Passo</header>
    <section class="info-section">
      <Info
        :info="info"
        class="info"
        v-for="(info, index) in infoSection"
        :key="index"
      />
    </section>
    <section class="video-section">
      <header>Sugestão de canais</header>
      <h3>
        Uma boa maneira de aprender é assistir a tutoriais no youtube ou em outros sites como Udemy, FreeCodeCourse, Digital Innovation One. Para uma introdução é um bom lugar, mas se você quiser obter um conhecimento profundo e algo consistente, você deve continuar aprendendo e praticando todos os dias, não dependendo exclusivamente de tutorias simplórios.
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
      <header>Treino</header>
      <h3>
        Como acontece com qualquer outra atividade prática, a programação exige esforço e é longe de ser fácil. Para ter a resposta para cada problema, a experiência será um elemento decisivo para resolvê-los e a única maneira de consegui-la é praticando.
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
  name: "Inicio",
  components: { Hero, Info, Suggestion, Practice },
  data() {
    return {
      infoSection: [
        {
          infoId: 1,
          title: "Passo a Passo",
          explainingText:
            "A maioria dos autodidatas lutam para aprender adequadamente as disciplinas de ciência da computação, como Álgebra Linear ou o próprio conteúdo de Matemática. Este passo a passo, criado a partir do que aprendemos na faculdade, deve responder às suas dúvidas sobre essa área, além de preencher a lacuna de conhecimento que talvez não tenha ficado claro.",
          explainingTextImage: "teste",
        },
        {
          infoId: 2,
          title: "Passo a Passo",
          explainingText:
            "As etapas são baseadas na grade curricular de universidades como Harvard, Oxford e Cambridge. Mas você pode traçar seu próprio caminho para atingir seu objetivo, apenas certifique-se de manter sua ambição.",
          explainingTextImage: "test",
        },
      ],
      videoSuggestion: [
        {
          title: "Traversy Media",
          image: "traversy_media",
          description:
            "Traversy Media apresenta os melhores tutoriais de desenvolvimento e programação para todas as tecnologias web mais recentes, desde os blocos de construção em HTML, CSS e JavaScript a estruturas front-end como React e Vue, e para tecnologias de back-end como Node.js, Python e PHP.",
          tags: ["desenvolvimento", "diversos"],
          url: "https://www.youtube.com/c/TraversyMedia",
        },
        {
          title: "John Hammond",
          image: "john_hammond",
          description:
            "John Hammond mostra o mundo da segurança cibernética e como obter conhecimento para começar nesta área. Ele tem muita experiência em Pentesting e pode ser útil se este assunto lhe interessa.",
          tags: ["segurança", "testes de penetração"],
          url: "https://www.youtube.com/c/JohnHammond010",
        },
        {
          title: "Programming with Mosh",
          image: "mosh",
          description:
            "Programming with Mosh é um canal do youtube que tem como foco aprender linguagens, frameworks e muito mais. Pode ser útil se você quiser algo mais generalizado.",
          tags: ["programação", "diversos"],
          url: "https://www.youtube.com/c/programmingwithmosh",
        },
        {
          title: "MIT OpenCourseWare",
          image: "mit",
          description:
            "Recursos da faculdade MIT do Curso de Cientista da Computação. Tem muitos vídeos de Matemática, Estruturas de Dados, Algoritmos e Arquitetura de Computadores. Além disso, possui Lógica de Programação, um assunto importante que aparece de forma consistente em Algoritmos. Um ótimo canal e totalmente gratuito.",
          tags: ["matematica", "algoritmos", "estrutura de dados"],
          url: "https://www.youtube.com/c/mitocw",
        },
        {
          title: "freeCodeCamp",
          image: "freeCodeCamp",
          description:
            "freeCodeCamp é um canal do youtube com muito conteúdo útil sobre temas de Ciência da Computação. Lá você aprenderá muito sobre cada assunto. Também pode ser acessado pela sua plataforma web, que é um site totalmente gratuito que disponibiliza cursos em torno das tecnologias eminentes. ",
          tags: ["programação", "diversos"],
          url: "https://www.youtube.com/c/Freecodecamp",
        },
        {
          title: "edureka!",
          image: "edureka",
          description:
            "Uma plataforma de e-learning interativa e ao vivo com a missão de tornar o aprendizado acessível a todos. Eles oferecem cursos ministrados por instrutores, juntamente com suporte 24 horas por dia, 7 dias por semana, sob demanda, para atingir as taxas de conclusão de curso mais altas do setor. Completamente grátis.",
          tags: ["programação", "diversos"],
          url: "https://www.youtube.com/c/edurekaIN",
        },
      ],
      practiceSites: [
        {
          title: "BinarySearch",
          description:
            "Um lugar para praticar o que você aprendeu sobre algoritmos e lógica. Tópicos como DP, Recursão, Classificação e AD-Hoc aparecerão como um problema.",
          imageBackground: "bs-background",
          url: "https://binarysearch.com/",
          slideState: true,
          showTitle: true,
          fontColor: "#fff",
        },
        {
          title: "FrontEnd Mentor",
          description:
            "Um site para desenvolvedores front-end. Aqui você pode praticar suas habilidades em CSS, SCSS, Tailwind ou outro framework de folha de estilo.",
          imageBackground: "fm-background",
          url: "https://www.frontendmentor.io/",
          slideState: false,
          showTitle: false,
          fontColor: "black",
        },
        {
          title: "CodeForces",
          description:
            "Codeforces é uma rede social dedicada a maratonas de programação. É uma plataforma onde as competições são realizadas regularmente, sendo as habilidades do participante refletidas por sua classificação. As competições anteriores podem ser usadas para treino e preparação.",
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
