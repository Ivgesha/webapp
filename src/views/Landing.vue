<template>
  <div>
    <Intro />
    <About />
    <TechCard />
    <ProjectCard />
    <Footer />
  </div>
</template>



<script>
import Footer from "../components/Footer.vue";
import Intro from "../components/Intro.vue";
import About from "../components/About.vue";
import TechCard from "../components/TechCard.vue";
import ProjectCard from "../components/ProjectCard.vue";
// now we can insert different components.
export default {
  name: "Landing",
  components: {
    Footer,
    Intro,
    About,
    TechCard,
    ProjectCard,
  },
};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  place-items: center;
  /* background: linear-gradient(315deg, #ffffff, #d7e1ec); */
  text-align: center;
}
</style>
