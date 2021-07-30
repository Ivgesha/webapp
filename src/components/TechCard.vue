<template>
  <div class="techCards-back">
    <div class="techCards">
      <div class="techCards-techCard">
        <div class="techCard-container" v-for="card in cards" :key="card.id">
          <div class="techCard-container--logo">
            <!-- <img src="../assets/vueImage.jpeg" alt="icon image " /> -->
            <v-icon class="v-icon" xx-large color="#000000">{{
              card.icon
            }}</v-icon>
          </div>
          <div class="techCard-container--title">{{ card.title }}</div>
          <div
            class="techCard-container--techList"
            v-for="tech in card.tec"
            :key="tech"
          >
            {{ tech }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "TechCard",
  data: () => {
    return {
      cards: [
        {
          id: 1,
          icon: "mdi-desktop-mac",
          title: "Front-End",
          tec: [
            "Vue",
            "React",
            "Angular",
            "Javascript",
            "Axios",
            "jQuery",
            "HTML",
            "CSS",
          ],
        },
        {
          id: 2,
          icon: "mdi-server",
          title: "Back-End",
          tec: [
            "Java",
            "Node.js",
            "Express.js",
            "PHP",
            "C#",
            "Python",
            "PL/SQL",
            "mySQL",
          ],
        },
        {
          id: 3,
          icon: "mdi-lightbulb-on",
          title: "Tools",
          tec: ["C", "C++", "Linux", "OOP", "Design patterns", "Github"],
        },
      ],
    };
  },
};
</script>



<style scoped>
.v-icon {
  padding: 50px 50px;
  font-size: 50px;
}
.techCards-back {
  /* background: #2c3e50; */
  padding: 50px;
}
.techCards {
  display: flex;
  flex-direction: row;
  /* background: #2c3e50; */
  /* width: 50%; */
}

.techCards-techCard {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: #34495e; */
  width: 100%;
  height: 800px;
  flex-wrap: wrap;
  justify-content: space-around;
}

img {
  max-width: 250px;
  max-height: 250px;
}
.techCard-container {
  padding: 20px;
  margin: 65px;
  border-style: solid;
  border-color: transparent;
  box-shadow: 0 40px 60px -6px black;
  background: #bdc3c7;
  border-radius: 3%;
  width: 300px;
  height: 600px;
  transition: 0.5s;
}
.techCard-container:hover {
  margin-top: -10px;
}
.techCard-container--title {
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  justify-content: center;
  margin: 5px 10px;
  color: #2c3e50;
  /* width: 75%; */
}
.techCard-container--techList {
  font-size: 20px;
  text-align: center;

  /* width: 75%; */
}
</style>
