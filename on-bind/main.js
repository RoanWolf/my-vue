const { createApp } = Vue;

const app = {
  data() {
    return {
      textColor: "red-text",
      isDisabled: false,
    };
  },
  methods: {
    click1() {
      this.isDisabled = true;
    },
    click2(){
      this.isDisabled = false;
    }
  },
};

createApp(app).mount("#app");
