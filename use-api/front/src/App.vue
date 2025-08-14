<template>
  <h2>Advice</h2>
  <p>{{ isLoading ? "isloading..." : advice }}</p>
  <button @click="getAdvice" :disabled="isLoading" >try again</button>
</template>
<script>
export default {
  data() {
    return {
      advice: "",
      isLoading: false,
    };
  },

  methods: {
    async getAdvice() {
      this.isLoading = true;

      const response = await fetch("http://localhost:3000");

      const data = await response.json();
      this.advice = data.advice;

      this.isLoading = false;
    },
  },
  mounted() {
    this.getAdvice();
  },
};
</script>
