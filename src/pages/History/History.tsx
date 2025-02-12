import { HistoryContanier, HistoryList, Status } from "./style";
import { CyclesContext } from "../../contexts/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import { useContext } from "react";

export  function History() {
    const {cycles} = useContext(CyclesContext);
    return (
      <HistoryContanier>
        <h1>My History</h1>

        <HistoryList>

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
        {cycles.map(cycle => {
         return (
          <tr key={cycle.id}>
            <td>{cycle.task}</td>
            <td>{cycle.minutesAmount}</td>
            <td>{formatDistanceToNow(cycle.startDate,{addSuffix:true})}</td>
            <td>
              {cycle.finishedDate && <Status statusColor="green">Complete</Status>}
              {cycle.interruptedDate && <Status statusColor="red">Interrupt</Status>}
              {!cycle.finishedDate && !cycle.interruptedDate && (
                <Status statusColor="yellow">In progress</Status>
              )}
            </td>

          </tr>

         )
        })}
            
          </tbody>

        </table>
        </HistoryList>
      </HistoryContanier>
    )
  }
  