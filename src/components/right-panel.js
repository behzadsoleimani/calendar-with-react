import Header from "./header"
import Calendar from "./calendar"
import { useSelector } from "react-redux";


function RightPanel() {
  const tasks = useSelector(state => state.tasks)

    return (
      <div style={{
        width: "60%",
        paddingLeft: "10px"
    }} >
        <Header />
        <Calendar tasks={tasks} />
      </div>
    );
  }
  
  export default RightPanel;
  