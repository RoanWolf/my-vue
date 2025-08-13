const { createApp } = Vue;

const app = {
  data() {
    return {
      username: "",
      is_username_valid: "",
      password: "",
      is_password_valid: "",
    };
  },
  watch: {
    username(newValue, _oldValue) {
      if (newValue.length < 3) {
        this.is_username_valid = "input-error";
      } else {
        this.is_username_valid = "";
      }
    },
    password(newValue, _oldValue) {
      if (newValue.length < 3) {
        this.is_password_valid = "input-error";
      } else {
        this.is_password_valid = "";
      }
    },
  },
  methods: {
    handleSubmit() {
      this.is_username_valid = this.is_password_valid = "";
      if (this.username.length < 3 || this.password.length < 3) {
        alert("Username and password must be at least 3 characters long.");

        return;
      }
      this.username = this.password = "";
    },
  },
};

createApp(app).mount("#app");
