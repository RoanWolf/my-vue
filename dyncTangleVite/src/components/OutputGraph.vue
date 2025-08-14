<template>
  <section class="output">
    <div class="box-container" x>
      <!-- Set style -->
      <div class="box" :style="transformStyle"></div>
    </div>
  </section>
</template>

<script>
const obj = {
  props: ["x", "y", "z", "size"],
  computed: {
    transformStyle() {
      return {
        transform: `perspective(${this.size}px)rotateX(${this.x}deg)rotateY(${this.y}deg)rotateZ(${this.z}deg)`,
      };
    },
  },
};
export default obj;
</script>
