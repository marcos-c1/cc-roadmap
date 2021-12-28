<template>
  <div class="container">
    <ul>
      <li>
        <a :href="math.url"> {{ math.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Mathematics",
  props: ["math"],
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 40px;
  padding-top: 20px;

  ul > li {
    list-style: none;
    text-transform: capitalize;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 20px;
      &:hover {
        cursor: pointer;
          font-size: 25px;
          border-bottom: 1px solid #fff;
      }
    }
  }
}
</style>