import { CountDownContainer, FormContainer, HomeContainer, MinuteAmountInput, Separator, StartCountDownBtn, TaskInput } from "./style";
import { useEffect, useState } from "react";
import { differenceInSeconds } from 'date-fns'
import { zodResolver } from '@hookform/resolvers/zod'
import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form'
import * as zod from 'zod';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1,'Please enter the task'),
  minutesAmount: zod
  .number()
  .min(5,'Cycle need to have minimum 5 minutes')
  .max(60,'Cycle need to have maximum 60 minutes'),

});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string,
  task: string,
  minutesAmount: number,
  startDate: Date,

}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [minutesAmountPast, setMinutesAmountPast] = useState(0);

  const {register, handleSubmit, watch, reset}= useForm<NewCycleFormData>({
    // passa(newCycleFormValidationSchema) as regras de validacao com base no schema (formato de como as coisas sao salvas)
   resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },

  });

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

  useEffect(()=> {
    let interval: any;

    if(activeCycle){
      interval = setInterval(()=> {
        setMinutesAmountPast(
          differenceInSeconds(new Date(),activeCycle.startDate))
      }, 1000);
    }
    return()=>{
      clearInterval(interval)
    }
  },[activeCycle]);

  function handleCreateNewCycle(data: NewCycleFormData){
    const id = String(new Date().getTime()); 

    const newCycle: Cycle ={
      id: id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setMinutesAmountPast(0);

    reset();
  }


  
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - minutesAmountPast : 0;
  
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60 ;

  const minutes = String(minutesAmount).padStart(2,'0');
  const seconds = String(secondsAmount).padStart(2,'0');

  useEffect(() => {
    if (activeCycle ){
    document.title = `${minutes}:${seconds}`
    }
  },
  [minutes, seconds, activeCycle]);

  const task =  watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form  onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">I will work on</label>
          <TaskInput 
            list="taskSuggestions"
            id="task" 
            placeholder="Please give a name to your project" 
            {...register('task')}
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
            min={5}
            max={60}    
            {...register('minutesAmount', {valueAsNumber:true})}   
          />

          <span>minutes.</span>
        </FormContainer>

        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>

        <StartCountDownBtn disabled={isSubmitDisabled} type="submit" >
          <Play/>
          Start
          </StartCountDownBtn>

      </form>
    </HomeContainer>
  )
}
