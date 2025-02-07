import { HistoryContanier, HistoryList } from "./style";

export  function History() {
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
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months ago</td>
              <td>In progress</td>
              {/* <td>Interrupted</td>
              <td>Complete</td> */}
            </tr>

            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months ago</td>
              <td>In progress</td>
              {/* <td>Interrupted</td>
              <td>Complete</td> */}
            </tr>

            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months ago</td>
              <td>In progress</td>
              {/* <td>Interrupted</td>
              <td>Complete</td> */}
            </tr>
       
       
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months ago</td>
              <td>In progress</td>
              {/* <td>Interrupted</td>
              <td>Complete</td> */}
            </tr>

            
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months ago</td>
              <td>In progress</td>
              {/* <td>Interrupted</td>
              <td>Complete</td> */}
            </tr>


            
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months ago</td>
              <td>In progress</td>
              {/* <td>Interrupted</td>
              <td>Complete</td> */}
            </tr>


            
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months ago</td>
              <td>In progress</td>
              {/* <td>Interrupted</td>
              <td>Complete</td> */}
            </tr>
            
          </tbody>

        </table>
        </HistoryList>
      </HistoryContanier>
    )
  }
  