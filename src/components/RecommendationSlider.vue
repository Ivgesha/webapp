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
              v-on:click="imgClick(dataObj, dataObj.recIndex)"
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
                v-on:click="pointClick(index)"
              ></div>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>



<script>
let timer;
const TIME_FOR_INTERVAL = 10000;
export default {
  name: "RecommendationSlider",
  data: () => {
    return {
      dataObj: {
        recommendation: [
          {
            recImg:
              "https://media-exp1.licdn.com/dms/image/C4D03AQHnyXHat4qRHg/profile-displayphoto-shrink_200_200/0/1601020654678?e=1653523200&v=beta&t=DxhQZsM5H6KgRBcFiPo5gMpY2fRrWsDRdOIE83W2Kx0",
            recAlt: "Gil",
            recName: "GiL Nagar",
            recPos: "System And Network Manager at 019Mobile",
            recPar:
              '" Evgeni is very talented guy with excellent learning skills and great teamwork player, I have the pleasure to work with him on different projects and learning from his knowledge. He is happy to assist in any time and know how to push things forward, on top all of that Evgeni is reliable and fun guy to work with him. "',
            recPage: "https://www.linkedin.com/in/gil-nagar-6a067a17b/",
          },
          {
            recImg:
              "https://media-exp1.licdn.com/dms/image/C4E03AQHX9InGA_SPuw/profile-displayphoto-shrink_200_200/0/1549802056022?e=2147483647&v=beta&t=m5NBuYTzrPuYSxVgmVonO7c1qdPwJo3XkBrATa2Z0Ck",
            recAlt: "Eliyahu Kriel",
            recPos: "Frontend Developer at Devalore",
            recPar:
              '" I worked with Evgeni at 019 Mobile for almost a year. Evgeni is a very talented, smart and creative Developer. Always accepted the complex tasks, and made sure to do them in the best way with a very impressive level of performance. Evgeni is excellent at teamwork, professional dialogue, mutual help, always shares the knowledge he has, and if he does not know something - he is not ashamed to ask - and learns very quickly. I recommend Evgeni as a professional Developer, is in constant learning, smart and thorough. "',
            recPage: "https://www.linkedin.com/in/elikri/",
          },
        ],
        recIndex: 0,
      },
      interval: 0,
    };
  },
  props: {
    recIndex: Number,
  },
  mounted() {
    this.setTimer();
  },
  methods: {
    imgClick: (dataObj, index) => {
      window.location.href = dataObj.recommendation[index].recPage;
      // window.open(dataObj.recommendation[index].recPage, "_blank");
    },
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
    pointClick(index) {
      this.dataObj.recIndex = index;
      clearTimeout(timer);
      this.setTimer();
    },
    setTimer: function () {
      timer = setInterval(() => {
        this.nextSlide();
      }, TIME_FOR_INTERVAL);
    },
  },
};
</script>


<style scoped>
.slide-recommandation {
  width: 100%;
  height: 100%;
  /* width: 100%; */
  position: flex;
  margin: auto;
  /* background: linear-gradient(90deg, #0b0c10, #1f2833); */
  /* margin-bottom: 10rem; */
}
.slide-recommandation-container--recPicture {
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}
.slide-recommandation-container {
  width: 60%;
  height: 450px;
}
@media only screen and (max-width: 1200px) {
  .slide-recommandation-container {
    width: 60%;
    height: 650px;
  }
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
  cursor: pointer;
  margin: 0.5rem;
  background-color: #c5c6c7;
  height: 10px;
  width: 10px;
  border-radius: 50%;
}
.selectedDot {
  /* cursor: pointer; */
  margin: 0.5rem;
  background-color: #45a29e;
  height: 10px;
  width: 10px;
  border-radius: 50%;
}
</style>