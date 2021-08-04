<template>
  <footer class="footer">
    <div class="footer--container">
      <div class="footer--container-buttons">
        <FooterBtn
          class="icon github"
          text="Github"
          secondClass="fab fa-github"
          path="mdi-github"
        />
        <FooterBtn
          class="icon linkedin"
          text="Linkedin"
          secondClass="fab fa-linkedin"
          path="mdi-linkedin"
        />
        <FooterBtn
          class="icon resume"
          text="Resume"
          secondClass="fab fa-resume"
          path="mdi-domain"
        />
        <FooterBtn
          class="icon facebook"
          text="Facebook"
          secondClass="fab fa-facebook-f"
          path="mdi-facebook"
        />
        <FooterBtn
          class="icon email"
          text="Email"
          secondClass="fab fa-email"
          path="mdi-email"
        />
      </div>
      <div class="footer--container-copyright">
        <p>Copyright &copy; 2021 Evgeni Iseev</p>
      </div>
    </div>
  </footer>
</template>


<script>
import FooterBtn from "./FooterBtn.vue";

export default {
  name: "Footer",
  components: { FooterBtn },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus,
*:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
} */

.footer {
  display: grid;
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  place-items: center;
  /* background: linear-gradient(315deg, #ffffff, #d7e1ec); */
  text-align: center;
  margin: 100px;
}

.footer--container-buttons {
  margin-top: 50px;
  margin-bottom: 4ex;
  display: inline-flex;
}
.footer--container-copyright {
  margin: 1rem;
}
</style>