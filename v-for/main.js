// ["Vue", "React", "Nuxt", "NextJS", "Node", "NestJS", "React Native", "Electron", "Rust"]
const { createApp } = Vue;

const app = {
  data() {
    return {
      todoArray: [
        { name: "Vue", completed: false },
        { name: "react", completed: false },
        { name: "Nuxt", completed: false },
        { name: "NextJS", completed: false },
        { name: "Node", completed: false },
        { name: "NestJS", completed: false },
        
      ],
      todo: "",
    };
  },
  methods: {
    addTask() {
      if (this.todo.trim() === "") {
        alert("Please enter a valid todo item.");
        return;
      }
      this.todoArray.push({ name: this.todo, completed: false });
      this.todo = "";
    },

    delTask(index) {
      this.todoArray = this.todoArray.filter((_, idx) => idx !== index);
    },

    finishedTask(taskIdx) {
      this.todoArray = this.todoArray.map((todo, idx) => {
        if (idx === taskIdx) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
};
createApp(app).mount("#app");
