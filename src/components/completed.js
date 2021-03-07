import React from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import {  useSelector } from "react-redux";

function Completed() {
  const tasks = useSelector(state => state.tasks)

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "17px",
    }}>
      <p>Completed</p>
      <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="gender1">
          {tasks.map(task => (
            task.completed && <FormControlLabel
              value={task.task}
              control={<Radio />}
              label={task.task}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default Completed;
