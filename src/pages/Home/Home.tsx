import { HomeContainer, StartCountDownBtn, StopCountDownBtn } from "./style";
import { FormProvider, useForm } from "react-hook-form";
import { HandPalm, Play } from "phosphor-react";
import { NewCycleForm } from "./components/NewCycleForm";
import { CyclesContext } from "../../contexts/CyclesContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { CountDown } from "./components/Countdown";
import { useContext } from "react";
import * as zod from 'zod';


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Please enter the task'),
  minutesAmount: zod
    .number()
    .min(1, 'Cycle need to have minimum 5 minutes')
    .max(60, 'Cycle need to have maximum 60 minutes'),

});

type NewCycleFormData = Zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const {activeCycle, createNewCycle,interruptCurrentCycle} = useContext(CyclesContext);

const newCycleForm = useForm<NewCycleFormData>({
  resolver: zodResolver(newCycleFormValidationSchema),   
  defaultValues: {
    task: '',
    minutesAmount: 0,
  },

});

  const {handleSubmit, watch, reset} = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData){
    createNewCycle(data);
    reset();
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        
          
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDown/>
     

        {activeCycle ? (
          <StopCountDownBtn onClick={interruptCurrentCycle} type="button" >
            <HandPalm />
            Stop
          </StopCountDownBtn>
        ) : (
          <StartCountDownBtn disabled={isSubmitDisabled} type="submit" >
            <Play />
            Start
          </StartCountDownBtn>
        )}

      </form>
    </HomeContainer>
  )
}
