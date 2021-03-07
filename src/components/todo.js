import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { editTask, postItems, fetchItems } from "../redux/action";

function TODO() {
  const [open, setOpen] = React.useState(false);
  const [dateValue, setDateValue] = React.useState("");
  const [taskValue, setTaskValue] = React.useState("");
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
    setDateValue("");
    setTaskValue("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddClose = () => {
    setOpen(false);
    dispatch(
      postItems({
        task: taskValue,
        date: dateValue,
        completed: false,
        id: new Date().getMilliseconds()
      })
    );
  };

  const handleChangeRadio = (e, task) => {
    if (e.target.checked) {
      const index = tasks.findIndex(i => i.id === task.id);

      dispatch(editTask(task, index));
    }
  };

  const handelChaneText = (event, name) => {
    if (name === "date") {
      setDateValue(event.target.value);
    } else {
      setTaskValue(event.target.value);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "17px",
        marginBottom: "10px"
      }}
    >
      <Button
        variant="contained"
        startIcon={<AddCircleIcon />}
        style={{
          textTransform: "none",
          background: "#eee",
          width: " 53%",
          borderRadius: "50px"
        }}
        onClick={handleClickOpen}
      >
        Add a Task
      </Button>

      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1">
          {tasks.map(
            task =>
              !task.completed && (
                <FormControlLabel
                  value={task.task}
                  control={<Radio />}
                  label={task.task}
                  onChange={e => handleChangeRadio(e, task)}
                />
              )
          )}
        </RadioGroup>
      </FormControl>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          disableBackdropClick
        >
          <DialogTitle id="form-dialog-title">Write Taks</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="date"
              label="Date Number"
              type="number"
              inputProps={{
                max: 30,
                min: 1
              }}
              fullWidth
              onChange={e => handelChaneText(e, "date")}
              value={dateValue}
            />
            <TextField
              margin="dense"
              id="task"
              label="Task Label"
              fullWidth
              onChange={e => handelChaneText(e, "task")}
              value={taskValue}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAddClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default TODO;
