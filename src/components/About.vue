<template>
  <div class="evgni-about">
    <div class="evgeni-about--title">Hey, I'm Evgeni</div>
    <div class="evgeni-about--paragraph">
      <p>
        For the past three years I studied computer science and wrote different
        softwares while working both independently and during my work. I have
        experience in variety of programming languages and frameworks. At my
        current work I had the opportunity to design and code from scratch data
        transfer software using Oracle database and HTTP requests, build Task
        Scheduler for Oracle functions and linux commands and implemented
        different features for web applications. I'm a team player, full of
        curiosity, with a lot of passion to discover and learn more.
      </p>
    </div>
    <v-btn id="abountBtn" large rounded v-on:click="getResume()">
      Get my Resume
    </v-btn>
  </div>
</template>

<script>
import { ResumeLinker } from ".././configs";
export default {
  name: "About",
  methods: {
    getResume: () => {
      window.location.href = ResumeLinker;
    },
  },
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.evgeni-about--title {
  padding-top: 20px;
  padding-bottom: 15px;
  font-size: xx-large;
  color: white;
}

.evgeni-about--paragraph {
  width: 80%;
  color: #c5c6c7;
}
.evgeni-about--paragraph {
  font-size: large;
}

#abountBtn {
  margin: 2%;
  font-weight: bold;
  transition: 0.5s;
  font-size: 1rem;
  /* background: #1a2530; */
  background: #007373;
  /* color: #007373; */
  color: #c5c6c7;
}

#abountBtn:hover {
  background-color: #007373;
  color: white;
}
</style>
