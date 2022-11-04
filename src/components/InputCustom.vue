<template>
  <div>
    <div class="input">
      <label>{{ labels }}</label>
      <input type="text" v-on:input="validationCharacter" />
      <div class="text text-invalid" v-if="inValid">invalid</div>
    </div>
  </div>
</template>

<script>
import { validationInput } from "@/utils/validation";
export default {
  data() {
    return {
      inValid: false,
    };
  },
  props: {
    rules: RegExp,
    labels: String,
  },
  methods: {
    validationCharacter(e) {
      console.log("tee", this.rules);
      this.inValid = validationInput(e.target.value, this.rules);
    },
  },
};
</script>

<style>
.input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}
.text {
  font-size: 16px;
}
.text-invalid {
  color: red;
}
</style>
