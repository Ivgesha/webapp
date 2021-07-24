<template>
  <div class="cards-container">
    <div class="cards">
      <div class="cards-card" v-for="card in cards" :key="card.id">
        <div class="cards-card--image">
          <img src="../assets/vueImage.jpeg" alt="picture did not exists " />
        </div>
        <div class="cards-card--summary">
          <p>{{ card.summary }}</p>
          <v-btn>{{ card.source }}</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProjectCard",
  props: {
    image: String,
  },
  data: () => {
    return {
      cards: [
        {
          id: 1,
          image: "../assets/vueImage.jpeg",
          summary: "About project 1",
          source: "githnu1",
        },
        {
          id: 2,
          image: "../assets/vueImage.jpeg",
          summary: "About project 2",
          source: "githnu2",
        },
        {
          id: 3,
          image: "../assets/vueImage.jpeg",
          summary: "About project 3",
          source: "githnu3",
        },
      ],
    };
  },
};
</script>


<style>
.cards-container {
  display: flex;
  flex-direction: row;
}
.cards {
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
.cards-card {
  margin: 40px;
  position: relative;
  max-width: 350px;
  max-height: 550px;
  box-shadow: 0 40px 60px -6px black;
}

.cards-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: relative;
}

.cards-card--summary {
  display: block;
  font-size: 1.2rem;
  position: absolute;
  height: 0;
  width: 100%;
  top: 0;
  opacity: 0;
  padding: 18px;
  background-color: white;
  /* overflow-y: scroll; */
  transition: 0.6s ease;
}

.cards-card:hover .cards-card--summary {
  opacity: 1;
  height: 100%;
  width: 100%;
}
</style>
