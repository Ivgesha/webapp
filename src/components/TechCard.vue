<template>
  <div class="techCards">
    <div class="techCards-techCard">
      <div class="techCard-container" v-for="card in cards" :key="card.id">
        <div class="techCard-container--logo">
          <img src="../assets/vueImage.jpeg" alt="icon image " />
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
</template>


<script>
export default {
  name: "TechCard",
  data: () => {
    return {
      cards: [
        {
          id: 1,
          icon: "iconName1",
          title: "title1",
          tec: ["tec1", "tec2", "tec3"],
        },
        {
          id: 2,
          icon: "iconName2",
          title: "title2",
          tec: ["tec21", "tec22", "tec23"],
        },
      ],
    };
  },
};
</script>



<style scoped>
.techCards {
  display: flex;
  flex-direction: row;
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
  border-color: red;
  box-shadow: 0 40px 60px -6px black;
  background: yellow;
}
.techCard-container--title {
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  justify-content: center;
  margin: 5px 10px;
  /* width: 75%; */
}
.techCard-container--techList {
  font-size: 1.5rem;
  text-align: center;

  /* width: 75%; */
}
</style>
