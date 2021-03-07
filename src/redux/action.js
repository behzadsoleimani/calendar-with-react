import http from "../api";

export const setTask = task => ({
  type: "SET-TASKS",
  payload: task,

});

export const editTask = (task, index) => ({
  type: "EDIT-TASKS",
  task,
  index
});

export const getTask = allTasks => ({
  type: "GET-TASKS",
  payload: allTasks,

});

// redux thunk ...

export const fetchItems = () => {       
  
  return async dispatch => {
    await http({
      url: "https://todo-list-28aef-default-rtdb.firebaseio.com/todo.json",
      method: "get",

    })
    // .then(resp =>  dispatch(setTask(Object.values(resp.data.listItems))))
    .then(resp => dispatch(getTask(Object.values(resp.data.listItems))))
    .catch(() => console.log("error"));
  };
};

export const postItems = task => {
  return async dispatch => {
    await http({
      url:
        "https://todo-list-28aef-default-rtdb.firebaseio.com/todo/listItems.json",
      method: "post",
      data: task
    })
      .then(resp => dispatch(setTask(task)))
      .catch(() => console.log("error"));
  };
};
