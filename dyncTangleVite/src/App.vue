<template>
  <h2>CSS3 Perspective Playground</h2>
  <main>
    <Settings
      :x="x"
      @update-x="x = Number($event)"
      :y="y"
      @update-y="y = Number($event)"
      :z="z"
      @update-z="z = Number($event)"
      :size="size"
      @update-size="size = Number($event)"
    />
    <section class="output">
      <div class="box-container" x>
        <!-- Set style -->
        <div class="box" :style="transformStyle"></div>
      </div>
    </section>
  </main>
</template>

<script>
import Settings from "./components/Settings.vue";

/*
  1. Sync input value with vue data and show it on the label(v-model 2-ways binding)
  2. Implement reset(v-on and methods)
  3. Apply transform style to the cube(computed)
*/

// {
//   transform: `perspective(0px)rotateX(0deg)rotateY(0deg)rotateZ(0deg)`,
// }

const app = {
  components: { Settings },
  data() {
    return {
      x: 0,
      y: 0,
      z: 0,
      size: 500,
    };
  },
  watch: {},
  methods: {},
  computed: {
    transformStyle() {
      return {
        transform: `perspective(${this.size}px)rotateX(${this.x}deg)rotateY(${this.y}deg)rotateZ(${this.z}deg)`,
      };
    },
  },
};

export default app;
</script>

<style></style>
