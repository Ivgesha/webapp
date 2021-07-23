<template>
  <div class="techCard">
    <div class="techCard-container" v-for="card in cards" :key="card.id">
      <div class="techCard-container--logo">{{ card.icon }}</div>
      <div class="techCard-container--title">{{ card.title }}</div>
      <div class="techCard-container--techList">{{ card.tec }}</div>
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
</style>
