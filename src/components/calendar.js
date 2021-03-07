import React, { useEffect } from "react";
import { dates } from "../dates";

function Calendar({tasks}) {
  const [arr, setArr] = React.useState(dates);


  useEffect(() => {

    tasks.forEach(task => {
        const dateSelect = arr.filter(itm => itm.date === task.date)[0]
        const index = arr.findIndex(i => i.date === dateSelect.date)
        const modifyArr = [
            ...arr.slice(0, index),
            { ...dateSelect, description: task.task },
            ...arr.slice(index + 1, arr.length)
          ];
          setArr(modifyArr)
    });
    

  }, [tasks])

  return (
    <div className="calendar-container">
      <div className="ant-picker-date-panel">
        <div className="ant-picker-body">
          <table className="ant-picker-content">
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {arr.slice(0, 7).map(itm => (
                  <td className="ant-picker-cell ant-picker-cell-start ant-picker-cell-in-view">
                    <p>{itm.date}</p>
                    <p>{itm.description}</p>
                  </td>
                ))}
              </tr>
              <tr>
                {arr.slice(7, 14).map(itm => (
                  <td className="ant-picker-cell ant-picker-cell-start ant-picker-cell-in-view">
                    <p>{itm.date}</p>
                    <p>{itm.description}</p>
                  </td>
                ))}
              </tr>
              <tr>
                {arr.slice(14, 21).map(itm => (
                  <td className="ant-picker-cell ant-picker-cell-start ant-picker-cell-in-view">
                    <p>{itm.date}</p>
                    <p>{itm.description}</p>
                  </td>
                ))}
              </tr>
              <tr>
                {arr.slice(21, 28).map(itm => (
                  <td className="ant-picker-cell ant-picker-cell-start ant-picker-cell-in-view">
                    <p>{itm.date}</p>
                    <p>{itm.description}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
