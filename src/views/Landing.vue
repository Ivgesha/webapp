<template>
  <div>
    <Intro />
    <Footer />
  </div>
</template>



<script>
import Footer from "../components/Footer.vue";
import Intro from "../components/Intro.vue";
// now we can insert different components.
export default {
  name: "Landing",
  components: { Footer, Intro },
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
  background: linear-gradient(315deg, #ffffff, #d7e1ec);
  text-align: center;
}
</style>
