<template>
  <div class="slide-recommandation">
    <div class="slide-recommandation-container" :data="dataObj.recommendation">
      <div class="slide-recommandation-container--RecTitle">
        Recommendations
      </div>
      <transition name="slide-fade" mode="out-in">
        <div :key="dataObj.recIndex">
          <div>
            <img
              class="slide-recommandation-container--recPicture"
              :src="dataObj.recommendation[dataObj.recIndex].recImg"
              :alt="dataObj.recommendation[dataObj.recIndex].recAlt"
            />
          </div>
          <div class="slide-recommandation-container--recName">
            <span>{{ dataObj.recommendation[dataObj.recIndex].recName }}</span>
          </div>
          <div class="slide-recommandation-container--recPos">
            <span>{{ dataObj.recommendation[dataObj.recIndex].recPos }}</span>
          </div>
          <div class="slide-recommandation-container--recPar">
            <p>{{ dataObj.recommendation[dataObj.recIndex].recPar }}</p>
          </div>
          <div>
            <ul class="slide-recommandation-container--points">
              <div
                v-for="(point, index) in dataObj.recommendation"
                :key="index"
                :class="getDot(index)"
              ></div>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>



<script>
export default {
  name: "RecommendationSlider",
  data: () => {
    return {
      dataObj: {
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
            recAlt: "Eliyahu Kriel",
            recPos: "Frontend Developer at Devalore",
            recPar:
              '" I worked with Evgeni at 019 Mobile for almost a year. Evgeni is a very talented, smart and creative Developer. Always accepted the complex tasks, and made sure to do them in the best way with a very impressive level of performance. Evgeni is excellent at teamwork, professional dialogue, mutual help, always shares the knowledge he has, and if he does not know something - he is not ashamed to ask - and learns very quickly. I recommend Evgeni as a professional Developer, is in constant learning, smart and thorough. "',
          },
        ],
        recIndex: 0,
      },
    };
  },
  props: {
    recIndex: Number,
  },
  methods: {
    nextSlide() {
      // maybe use this.$set(this.dataObj, "recIndex", temp);
      // or just use  this.dataObj.recIndex; + 1;
      /* 
      let temp = this.dataObj.recIndex;
      temp += 1;
      // console.log("recIndex: " + recIndex);
      this.$set(this.dataObj, "recIndex", temp);
      */
      if (this.dataObj.recIndex + 1 == this.dataObj.recommendation.length) {
        this.dataObj.recIndex = 0;
      } else {
        this.dataObj.recIndex += 1;
      }
    },
    getDot(index) {
      return index == this.dataObj.recIndex ? "selectedDot" : "regularDot";
    },
  },

  mounted() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  },
};
</script>


<style scoped>
.slide-recommandation {
  width: 60%;
  height: 250px;
  position: relative;
  margin: auto;
  background: transparent;
  margin-bottom: 10rem;
}
.slide-recommandation-container--recPicture {
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
  color: #45a29e;
}
.slide-recommandation-container--recPos {
  margin-bottom: 1.5rem;
  color: #45a29e;
}
.slide-recommandation-container--RecTitle {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #66fcf1;
}
.slide-recommandation-container--recPar {
  color: #c5c6c7;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.slide-recommandation-container--points {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.regularDot {
  margin: 0.5rem;
  background-color: #c5c6c7;
  height: 10px;
  width: 10px;
  border-radius: 50%;
}
.selectedDot {
  margin: 0.5rem;
  background-color: #45a29e;
  height: 10px;
  width: 10px;
  border-radius: 50%;
}
</style>