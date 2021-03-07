
export const setTask = (task) => ({
  type: "SET-TASKS",
  payload: task
});

export const editTask = (task , index) => ({
  type: "EDIT-TASKS",
  task,
  index
});

