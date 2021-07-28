<template>
  <!-- <button>{{ text }}</button> -->
  <div
    v-bind:class="iconName"
    style="cursor: pointer"
    v-on:click="clickEventHandler(text)"
  >
    <div class="tooltip">{{ text }}</div>
    <span><i v-bind:class="secondClass"></i></span>
    <v-icon class="v-icons">{{ path }}</v-icon>
  </div>
</template>


<script>
import {
  EmailLinker,
  GithubLinker,
  LinkedInLinker,
  FacebookLinker,
  ResumeLinker,
} from ".././configs";
export default {
  name: "FooterBtn",
  props: {
    iconName: String,
    text: String,
    secondClass: String,
    path: String,
  },
  methods: {
    clickEventHandler: (name) => {
      let linker;
      switch (name) {
        case "Email":
          linker = EmailLinker;
          break;
        case "Github":
          linker = GithubLinker;
          break;
        case "Linkedin":
          linker = LinkedInLinker;
          break;
        case "Facebook":
          linker = FacebookLinker;
          break;
        case "Resume":
          linker = ResumeLinker;
          break;
        default:
          linker = LinkedInLinker;
      }
      window.location.href = linker;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.icon {
  position: relative;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.icon:hover span,
.icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.github:hover,
.github:hover .tooltip,
.github:hover .tooltip::before {
  background-color: #333333;
  color: #ffffff;
}

.facebook:hover,
.facebook:hover .tooltip,
.facebook:hover .tooltip::before {
  background-color: #3b5999;
  color: #ffffff;
}

.linkedin:hover,
.linkedin:hover .tooltip,
.linkedin:hover .tooltip::before {
  background-color: #2867b2;
  color: #ffffff;
}
.resume:hover,
.resume:hover .tooltip,
.resume:hover .tooltip::before {
  background-color: #8a2be2;
  color: #ffffff;
}
.email:hover,
.email:hover .tooltip,
.email:hover .tooltip::before {
  background-color: #c71610;
  color: #ffffff;
}

/* i.v-icon.v-icon {
  background-color: transparent;
  color: black;
}

i.v-icon.v-icon:hover {
  background-color: transparent;
  color: white;
} */
</style>
