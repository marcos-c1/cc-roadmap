<template>
  <div class="ref">
    <header>References</header>
    <h4>
      This books would guide you into the Computer Science. Its like the bible
      for us.
    </h4>
    <div class="prog-section">
      <h1>- Programming</h1>
      <Programming
        :prog="prog"
        class="prog"
        v-for="(prog, index) in programming"
        :key="index"
      />
    </div>
    <div class="prog-section">
      <h1>- Data Structures</h1>
      <DataStructure
        :ds="ds"
        class="prog"
        v-for="(ds, index) in dataStructure"
        :key="index"
      />
    </div>
    <div class="prog-section">
      <h1>- Algorithms</h1>
      <Algorithms
        :algo="algo"
        class="prog"
        v-for="(algo, index) in algorithms"
        :key="index"
      />
    </div>
    <div class="prog-section">
      <h1>- Mathematics</h1>
      <Mathematics
        :math="math"
        class="prog"
        v-for="(math, index) in mathematics"
        :key="index"
      />
    </div>
    <div class="ref-git">
      <h3>
        We would like to emphasis that every book can guide into your
        objectives, not only those mentioned or any particular. Every kind of
        knowledge is valid when you want to learn new kind of stuff.
      </h3>
      <small
        >All these books were hosted in <a :href="this.git">Manjunath</a> user
        github. There's a lot more if you check it out her repository.
      </small>
    </div>
  </div>
</template>

<script>
import Programming from "../components/_References/Programming.vue";
import DataStructure from "../components/_References/DataStructure.vue";
import Algorithms from "../components/_References/Algorithms.vue";
import Mathematics from "../components/_References/Mathematics.vue";

export default {
  name: "references",
  components: { Programming, DataStructure, Algorithms, Mathematics },
  data() {
    return {
      git: "https://github.com/manjunath5496",
      programming: [
        {
          title: "C - The complete reference",
          url: "https://github.com/manjunath4496/Computer-Science-Reference-Books/blob/master/comp(9).pdf",
        },
        {
          title:
            "Modern C++ Design: Generic Programming and Design Patterns Applied",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(45).pdf",
        },
        {
          title: "Clean Code: A Handbook of Agile Software Craftsmanship",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(105).pdf",
        },
        {
          title: "Patterns for Parallel Programming",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(59).pdf",
        },
        {
          title: "Compilers. Principles, Techniques & Tools",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(12).pdf",
        },
        {
          title: "Expert C Programming: Deep C Secrets",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(18).pdf",
        },
        {
          title: "Dynamic Programming: A Computational Tool",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(186).pdf",
        },
      ],
      dataStructure: [
        {
          title: "Data Structure and Algorithms in C++",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(242).pdf",
        },
        {
          title: "Data Structure and Algorithms for Big Databases",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(310).pdf",
        },
        {
          title: "Data Structures & Problem Solving Using Java",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(241).pdf",
        },
        {
          title: "Data Structures and Algorithms in Python",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(180).pdf",
        },
        {
          title: "Data Structures and Algorithms in JavaScript",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(181).pdf",
        },
        {
          title: "Learning F# Functional Data Structures and Algorithms",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(189).pdf",
        },
      ],
      algorithms: [
        {
          title: "Analysis of Algorithms: An Active Learning Approach",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(39).pdf",
        },
        {
          title:
            "The Art of Computer Programming, Volume 1: Fundamental Algorithms",
          url: "https://github.com/manjunath5496/The-Art-of-Computer-Programming-Books/blob/master/aoc(5).pdf",
        },
        {
          title:
            "The Art of Computer Programming, Volume 2: Seminumerical Algorithms",
          url: "https://github.com/manjunath5496/The-Art-of-Computer-Programming-Books/blob/master/aoc(6).pdf",
        },
        {
          title:
            "The Art of Computer Programming, Volume 3: Sorting and Searching",
          url: "https://github.com/manjunath5496/The-Art-of-Computer-Programming-Books/blob/master/aoc(7).pdf",
        },
        {
          title:
            "The Art of Computer Programming, Volume 4A: Combinatorial Algorithms, Part 1",
          url: "https://github.com/manjunath5496/The-Art-of-Computer-Programming-Books/blob/master/aoc(1).pdf",
        },
        {
          title: "Algorithm Design",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(252).pdf",
        },
        {
          title: "Data Mining Algorithms in C++",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(239).pdf",
        },
        {
          title: "Disk-Based Algorithms for Big Data",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(185).pdf",
        },
      ],
      mathematics: [
        {
          title: "Hacker's Delight",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(39).pdf",
        },
        {
          title:
            "Logic for Computer Science: Foundations of Automatic Theorem Proving",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(440).pdf",
        },
        {
          title: "Linear Algebra in R",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(428).pdf",
        },
        {
          title: "Mathematical Problems in Data Science",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(256).pdf",
        },
        {
          title: "Mathematics and Physics for Programmers",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(191).pdf",
        },
        {
          title: "Sets, Logic and Maths for Computing",
          url: "https://github.com/manjunath5496/Computer-Science-Reference-Books/blob/master/comp(193).pdf",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ref {
  header {
    text-align: center;
    font-weight: bold;
    color: #fff;
    font-size: 35px;
    padding-top: 50px;
  }
  @keyframes color_change {
    0% {
      color: orange;
    }
    25% {
      color: red;
    }
    50% {
      color: lawngreen;
    }
    75% {
      color: violet;
    }
    100% {
      color: pink;
    }
  }
  h1 {
    text-transform: uppercase;
    animation: color_change 10s infinite alternate;
  }
  h4 {
    text-align: center;
    font-weight: bold;
    color: #fff;
  }
  .prog-section {
    @media (min-width: 450px) {
      padding: 50px 50px;
    }
    @media (min-width: 750px) {
      padding: 50px 100px;
    }

    @media (min-width: 950px) {
      padding: 50px 150px;
    }
    @media (min-width: 1200px) {
      padding: 50px 200px;
    }

    .prog:nth-child(2) {
      padding-top: 30px;
    }
  }

  .ref-git {
    @media(min-width: 450px){
      h3 {
        padding: 0 50px;
        padding-bottom: 30px;
      }
    }

    @media(min-width: 600px){
      h3 {
        padding: 0 80px;
        padding-bottom: 30px;
      }
    }
    @media(min-width: 900px){
      h3 {
        padding: 0 100px;
        padding-bottom: 30px;
      }
    }

    @media(min-width: 1050px){
      h3 {
        padding: 0 150px;
        padding-bottom: 30px;
      }
    }

    @media(min-width: 1200px){
      h3 {
        padding: 0 170px;
        padding-bottom: 30px;
      }
    }
    text-align: center;
    color: #fff;
  

    small {
      font-size: 15px;
      font-weight: 700;
      a {
        text-decoration: none;
        color: red;
      }
    }
  }
}
</style>