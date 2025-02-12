import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { Cycle, CyclesReducer } from "../reducers/cycles/reducer";
import { AddNewCycleAction, FinishedCycleAction, InterruptCycleAction } from "../reducers/cycles/action";

interface CreateCycleData {
    task: string
    minutesAmount: number
}


interface CyclesContextData {
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    minutesAmountPast: number;

    markCurrentCycleAsFinished: () => void;
    setSecondPassed: (seconds: number) => void;
    createNewCycle: (data: CreateCycleData) => void;
    interruptCurrentCycle: () => void;
}
export const CyclesContext = createContext({} as CyclesContextData);

interface CyclesContextProviderProps {
    children: ReactNode;
}


export function CyclesContextProvider({
    children
}: CyclesContextProviderProps) {
    const [cyclesState, dispatch] = useReducer(CyclesReducer,
    {   cycles: [],
        activeCycleId: null,
    },
    // aqui esta chamando  3 parametro
    (initialState) => { 
        const storedStageAsJSON = localStorage.getItem('@React-Time:cycles-states',)
        if(storedStageAsJSON){
            return JSON.parse(storedStageAsJSON);
        }
      return initialState;
    },
);

    const [minutesAmountPast, setMinutesAmountPast] = useState(0);

    useEffect(()=>{
        const stateJSON = JSON.stringify(cyclesState);
        localStorage.setItem('@React-Time:cycles-states', stateJSON)
    },[cyclesState])

    const { cycles, activeCycleId } = cyclesState;
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

    function setSecondPassed(seconds: number) {
        setMinutesAmountPast(seconds);
    }
    function createNewCycle(data: CreateCycleData) {
        const id = String(new Date().getTime());

        const newCycle: Cycle = {
            id: id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }
        dispatch(AddNewCycleAction(newCycle));
        setMinutesAmountPast(0);
    }

    function interruptCurrentCycle() {
        dispatch(InterruptCycleAction());
    }

    function markCurrentCycleAsFinished() {
        dispatch(FinishedCycleAction())
    }

    return (
        <CyclesContext.Provider
            value={{
                cycles,
                activeCycle,
                activeCycleId,
                minutesAmountPast,
                markCurrentCycleAsFinished,
                setSecondPassed,
                createNewCycle,
                interruptCurrentCycle
            }}>
            {children}
        </CyclesContext.Provider>
    )
}