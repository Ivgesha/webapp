<template>
  <div class="evgeni-intro-container">
    <div class="evgeni-intro-container--title">
      Software engineer && Fullstack developer
    </div>
    <div class="evgeni-intro-container--subtitle">
      I build and code softwares, and I love what i'm doing!
    </div>
    <div class="evgeni-intro-container--img">
      <img class="into-img" src="../assets/EvgeniPic.png" alt="Picture" />
    </div>
  </div>
</template>



<script>
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,300;1,700&family=Coming+Soon&display=swap");
.evgeni-intro-container {
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center;
  /* background: linear-gradient(315deg, #ffffff, #d7e1ec);*/
  /* background: linear-gradient(90deg, #005aa7, #fffde4); */
  /* background: #2c3e50; */
  color: white;
  text-align: center;
}
.evgeni-intro-container--title {
  padding-top: 50px;
  font-weight: 800;
  font-size: xx-large;
  margin: 2%;
  color: #66fcf1;
}
.evgeni-intro-container--subtitle {
  font-size: large;
  margin-bottom: 2%;
  color: #45a29e;
}
.evgeni-intro-container--img {
  width: 100%;
  height: 100%;

  /* width: 2rem; */
  /* height: 2rem; */
  padding-bottom: 50px;
}
.into-img {
  width: 20rem;
  height: 22rem;
}
</style>
