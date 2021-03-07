const reducer = (state, action) => {
  switch (action.type) {
    case "SET-TASKS":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "EDIT-TASKS":
      const modifyTasks = [
        ...state.tasks.slice(0, action.index),
        { ...action.task, completed: true },
        ...state.tasks.slice(action.index + 1, state.tasks.length)
      ];

      return { ...state, tasks: modifyTasks };

    default:
      return state;
  }
};

export default reducer;
