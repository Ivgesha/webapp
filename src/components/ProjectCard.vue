<template>
  <div class="cards-container">
    <div class="cards">
      <div class="cards-card" v-for="card in cards" :key="card.id">
        <div class="cards-card--container">
          <div class="cards-card--image">
            <img
              :src="getImage(card)"
              alt="picture did not
            exists "
            />
          </div>
          <div class="cards-card--summary">
            <p>{{ card.summary }}</p>
            <v-btn class="vbtn" :href="card.source" rounded outlined
              ><span>&#60;</span> /Source <span>&#62;</span></v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProjectCard",
  props: {},
  data: () => {
    return {
      test: "website.png",
      cards: [
        {
          id: 1,
          image: "website",
          summary: "Portfolio website written with VueJs",
          source: "https://github.com/Ivgesha/webapp",
        },
        {
          id: 2,
          image: "Codility",
          summary: "Codility exams with solved algorithms",
          source: "https://github.com/Ivgesha/Codility",
        },
        {
          id: 3,
          image: "SecureVault",
          summary:
            "Encrypted and secure phone applications which desighn to store your data",
          source: "https://github.com/Ivgesha/SecureVault2019-1",
        },
        {
          id: 4,
          image: "CommunicationLTD",
          summary:
            "Web application which desight to text SQL injections and XSS attacks",
          source: "https://github.com/Ivgesha/communicationLTD",
        },
        {
          id: 5,
          image: "todo",
          summary:
            "Dynamic phone application which helps you keep track of your tasks",
          source: "https://github.com/Ivgesha/TodoList",
        },
        {
          id: 6,
          image: "email",
          summary: "Multi-threaded Email transfer program",
          source: "https://github.com/Ivgesha/Email_Queue",
        },
      ],
    };
  },
  methods: {
    getImage(card) {
      return `${require(`../assets/${card.image}.png`)}`;
    },
  },
};
</script>


<style>
.cards-container {
  display: flex;
  flex-direction: row;
  /* background: #2c3e50;*/
}
.cards {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: #34495e; */
  width: 80%;
  flex-wrap: wrap;
  flex-flow: wrap;
  padding: 3rem 3rem;

  justify-content: space-around;
}
.cards-card {
  margin: 40px;
  position: relative;
  justify-content: center;
  max-width: 350px;
  max-height: 166px;
  box-shadow: 0 40px 60px -6px black;
}

.cards-card img {
  width: 350px;
  height: 166px;
  object-fit: cover;
  display: block;
  /* position: relative; */
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
  background-color: #c5c6c7;
  /* overflow-y: scroll; */
  transition: 0.6s ease;
  /* padding: 40px; */
}

.cards-card:hover .cards-card--summary {
  opacity: 1;
  height: 100%;
  width: 100%;
}
.vbtn {
  text-transform: unset !important;
  font-weight: bold;
}
</style>
