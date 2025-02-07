import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, MinuteAmountInput, Separator, StartCountDownBtn, TaskInput } from "./style";


export function Home() {
  return (
    <HomeContainer>
      <form >
        <FormContainer>
          <label htmlFor="task">I will work on</label>
          <TaskInput 
            id="task" 
            placeholder="Please give a name to your project" 
          />

          <label htmlFor="minutesAmount">durant</label>
          <MinuteAmountInput 
            type="number" 
            id="minutesAmount" 
            placeholder="00" 
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

        <StartCountDownBtn type="submit" disabled>
          <Play/>
          Start
          </StartCountDownBtn>

      </form>
    </HomeContainer>
  )
}
