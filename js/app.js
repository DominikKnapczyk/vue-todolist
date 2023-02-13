const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: {name: "", status: "todo"},
    };
  },

  methods: {
    addTask() {
      const newTask = {
        name: this.newTask.name,
        status: this.newTask.status,
      }

      this.tasks.push(newTask);
      console.log(this.newTask);
    },

    doneTask(i) {
      this.tasks[i].status = "done";
      console.log(this.tasks[i])
    },

    resetStatus(i) {
      this.tasks[i].status = "todo";
      console.log(this.tasks[i])
    },

    removeTask(i) {
      this.tasks.splice(i, 1)
    },
  }
});

app.mount("#app")