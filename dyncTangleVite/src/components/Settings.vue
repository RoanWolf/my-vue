<template>
  <section class="settings">
    <div class="settings-container">
      <label>perspective: {{ size }} px;</label>
      <input
        title="perspective"
        type="range"
        min="0"
        max="999"
        :value="size"
        @input="updateSize"
      />

      <label>rotateX: {{ x }} deg; </label>
      <input
        title="rotateX"
        type="range"
        min="-180"
        max="180"
        :value="x"
        @input="updateX"
      />

      <label>rotateY: {{ y }} deg; </label>
      <input
        title="rotateY"
        type="range"
        min="-180"
        max="180"
        :value="y"
        @input="updateY"
      />

      <label>rotateZ: {{ z }} deg; </label>
      <input
        title="rotateZ"
        type="range"
        min="-180"
        max="180"
        :value="z"
        @input="updateZ"
      />

      <button type="button" @click="reset">Reset</button>
    </div>
  </section>
</template>

<script>
const obj = {
  props: {
    x: Number,
    y: Number,
    z: Number,
    size: Number,
  },
  methods: {
    reset() {
      this.$emit("update-size", 500);
      this.$emit("update-x", 0);
      this.$emit("update-y", 0);
      this.$emit("update-z", 0);
    },
    updateSize(event) {
      this.$emit("update-size", Number(event.target.value));
    },
    updateX(event) {
      this.$emit("update-x", Number(event.target.value));
    },
    updateY(event) {
      this.$emit("update-y", Number(event.target.value));
    },
    updateZ(event) {
      this.$emit("update-z", Number(event.target.value));
    },
  },
};

export default obj;
</script>

<style></style>
