<template>
  <button
    @click="handleOnClick"
    :style="{ 'background-color': backgroundColor }"
    :class="[$style.button, $style[size]]"
  >
    {{ msg }}
  </button>
</template>
<script>
export default {
  name: "ButtonCustom",
  props: {
    msg: String,
    backgroundColor: String,
    size: String,
  },
  methods: {
    handleOnClick() {
      console.log(this.backgroundColor);
    },
  },
};
</script>
<style module>
.button {
  border: 1px solid #e7e2e2;
  border-radius: 16px;
  margin: 0 1rem;
  width: 68px;
  color: #fff;
}
.button-xl {
  height: 50px;
}
.button-md {
  height: 30px;
}
.button-sm {
  height: 20px;
}
</style>
