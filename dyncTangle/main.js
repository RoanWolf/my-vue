/*
  1. Sync input value with vue data and show it on the label(v-model 2-ways binding)
  2. Implement reset(v-on and methods)
  3. Apply transform style to the cube(computed)
*/

// {
//   transform: `perspective(0px)rotateX(0deg)rotateY(0deg)rotateZ(0deg)`,
// }
const { createApp } = Vue;

const app = {
  data() {
    return {
      x: 0,
      y: 0,
      z: 0,
      size: 500,
    };
  },
  watch: {},
  methods: {
    reset() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.size = 500;
    },
  },
  computed: {
    transformStyle() {
       return {
        transform: `perspective(${this.size}px)rotateX(${this.x}deg)rotateY(${this.y}deg)rotateZ(${this.z}deg)`
       }
    },
  },
};

createApp(app).mount("#app");
