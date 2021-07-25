<template>
  <div class="evgeni-intro-container">
    <div class="evgeni-intro-container--title">
      Software engineer && Fullstack developer
    </div>
    <div class="evgeni-intro-container--subtitle">
      I build and code softwares, and I love what i'm doing!
    </div>
    <div class="evgeni-intro-container--img">
      <img src="../assets/picture.jpg" alt="insert image here" />
    </div>
  </div>
</template>



<script>
</script>

<style >
.evgeni-intro-container {
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center;
  /* background: linear-gradient(315deg, #ffffff, #d7e1ec);*/
  /* background: linear-gradient(90deg, #005aa7, #fffde4); */
  background: #2c3e50;
  color: white;
  text-align: center;
}
.evgeni-intro-container--title {
  padding-top: 50px;
  font-weight: 800;
  font-size: xx-large;
  margin: 2%;
}
.evgeni-intro-container--subtitle {
  font-size: large;
  margin-bottom: 2%;
}
img {
  width: 450px;
  height: 550px;
  padding-bottom: 50px;
}
</style>
