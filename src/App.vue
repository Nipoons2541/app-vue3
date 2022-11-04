<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <InputCustom :rules="rules.THAI" labels="Thai only"></InputCustom>
  <InputCustom :rules="rules.ENGLISH" labels="Eng only"></InputCustom>
  <ButtonCustom
    msg="Click"
    backgroundColor="red"
    size="button-xl"
  ></ButtonCustom>
  <ButtonCustom
    msg="Click2"
    backgroundColor="blue"
    size="button-md"
  ></ButtonCustom>
  <ButtonCustom
    msg="Click3"
    backgroundColor="cyan"
    size="button-sm"
  ></ButtonCustom>
</template>

<script>
import ButtonCustom from "./components/ButtonCustom.vue";
import HelloWorld from "./components/HelloWorld.vue";
import InputCustom from "./components/InputCustom.vue";
import { validationRules } from "./utils/validation";
export default {
  name: "App",
  components: {
    HelloWorld,
    ButtonCustom,
    InputCustom,
  },
  data() {
    return {
      rules: validationRules,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
