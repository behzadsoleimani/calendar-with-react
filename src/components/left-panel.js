import Avatar from "./avatar"
import ToDo from "./todo"
import Completed from "./completed"

function LeftPanel() {
  return (
    <div style={{
        width: "40%",
        borderRight: "1px solid #ccc",
        paddingRight: "10px"
    }} >
      <Avatar />
      <ToDo />
      <Completed />
    </div>
  );
}

export default LeftPanel;
