<template>
  <div class="slide-recommandation">
    <div class="slide-recommandation-container" :data="recommendation">
      <div>
        <img
          class="recPicture"
          :src="recommendation[recIndex].recImg"
          :alt="recommendation[recIndex].recAlt"
        />
      </div>
      <div class="slide-recommandation-container--recName">
        <span>{{ recommendation[recIndex].recName }}</span>
      </div>
      <div class="slide-recommandation-container--recPos">
        <span>{{ recommendation[recIndex].recPos }}</span>
      </div>
      <div>
        <p>{{ recommendation[recIndex].recPar }}</p>
      </div>
      <div>
        <span class="slideLocation">loc</span>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "RecommendationSlider",

  data: () => {
    return {
      recommendation: [
        {
          recImg:
            "https://media-exp1.licdn.com/dms/image/C4D03AQHnyXHat4qRHg/profile-displayphoto-shrink_100_100/0/1601020654678?e=1632960000&v=beta&t=CUH1Qpxx7GN0iwnOJFu0ZWYrKCvY_4f__B1FvAV3p0s",
          recAlt: "Gil",
          recName: "GiL Nagar",
          recPos: "System And Network Manager at 019Mobile",
          recPar:
            '" Evgeni is very talented guy with excellent learning skills and great teamwork player, I have the pleasure to work with him on different projects and learning from his knowledge. He is happy to assist in any time and know how to push things forward, on top all of that Evgeni is reliable and fun guy to work with him. "',
        },
        {
          recImg:
            "https://media-exp1.licdn.com/dms/image/C4E03AQHX9InGA_SPuw/profile-displayphoto-shrink_100_100/0/1549802056022?e=1632960000&v=beta&t=asJljt3ZJVoKsqKdG2_-y6hVBn48sF_WC8m8CfOZflk",
          recAlt: "Eliyahu",
          recPos: "Frontend Developer at Devalore",
          recPar:
            '" I worked with Evgeni at 019 Mobile for almost a year. Evgeni is a very talented, smart and creative Developer. Always accepted the complex tasks, and made sure to do them in the best way with a very impressive level of performance. Evgeni is excellent at teamwork, professional dialogue, mutual help, always shares the knowledge he has, and if he does not know something - he is not ashamed to ask - and learns very quickly. I recommend Evgeni as a professional Developer, is in constant learning, smart and thorough. "',
        },
      ],
      recIndex: 0,
    };
  },
};
</script>


<style scoped>
.slide-recommandation {
  max-width: 1000px;
  position: relative;
  margin: auto;
  background: transparent;
  margin-bottom: 10rem;
}
.recPicture {
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}
.slide-recommandation-container {
  color: #ffffff;
}
.slide-recommandation-container--recName {
  font-size: 1.5rem;
  margin-top: 1rem;
  font: bold;
}
.slide-recommandation-container--recPos {
  margin-bottom: 1.5rem;
}
</style>