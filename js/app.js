const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },

  methods: {
    addTask() {
      this.tasks.push(this.newTask);
    },

    removeTask(i) {
      this.tasks.splice(i, 1)
    }
  }
});

app.mount("#app")