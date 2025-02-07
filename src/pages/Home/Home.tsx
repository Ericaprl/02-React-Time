import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, MinuteAmountInput, Separator, StartCountDownBtn, TaskInput } from "./style";


export function Home() {
  return (
    <HomeContainer>
      <form >
        <FormContainer>
          <label htmlFor="task">I will work on</label>
          <TaskInput 
            list="taskSuggestions"
            id="task" 
            placeholder="Please give a name to your project" 
          />
          <datalist id="taskSuggestions">
            <option value="Project 1"/>
            <option value="Project 2"/>
            <option value="Project 3"/>
            <option value="Project 4"/>
            <option value="Project 5"/>
          </datalist>

          <label htmlFor="minutesAmount">durant</label>
          <MinuteAmountInput 
            type="number" 
            id="minutesAmount" 
            placeholder="00" 
            step={1}
            min={1}
            max={60}       
          />

          <span>minutes.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownBtn type="submit" >
          <Play/>
          Start
          </StartCountDownBtn>

      </form>
    </HomeContainer>
  )
}
