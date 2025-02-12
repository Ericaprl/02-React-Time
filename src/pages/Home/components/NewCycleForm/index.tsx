import { FormContainer, MinuteAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {

  const { activeCycle } = useContext(CyclesContext);
  const {register} = useFormContext();
  return (
    <FormContainer>
      <label htmlFor="task">I will work on</label>
      <TaskInput
        list="taskSuggestions"
        id="task"
        placeholder="Please give a name to your project"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="taskSuggestions">
        <option value="Project 1" />
        <option value="Project 2" />
        <option value="Project 3" />
        <option value="Project 4" />
        <option value="Project 5" />
      </datalist>

      <label htmlFor="minutesAmount">durant</label>
      <MinuteAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={1}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>)
}
