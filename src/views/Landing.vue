<template>
  <div>
    <Intro />
    <About />
    <TechCard />
    <ProjectCard />
    <RecommendationSlider />
    <Footer />
  </div>
</template>



<script>
import Footer from "../components/Footer.vue";
import Intro from "../components/Intro.vue";
import About from "../components/About.vue";
import TechCard from "../components/TechCard.vue";
import ProjectCard from "../components/ProjectCard.vue";
import RecommendationSlider from "../components/RecommendationSlider.vue";
// now we can insert different components.
export default {
  name: "Landing",
  components: {
    Footer,
    Intro,
    About,
    TechCard,
    ProjectCard,
    RecommendationSlider,
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
  /* background: #2c3e50; */
  /* background: linear-gradient(90deg, #2c3e50, #78aade); */
  background: linear-gradient(90deg, #0b0c10, #1f2833);
}
</style>
