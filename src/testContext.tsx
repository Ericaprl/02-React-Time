import { createContext,useContext, useState } from 'react'

const CycleContext = createContext({} as any)

function NewCycleForm(){
    const {activeCycle, setActiveCycle} = useContext(CycleContext)
    return(
     <h1>
        New Cycle Form {activeCycle}
        <button onClick={()=> {setActiveCycle(2)}}>
            change
        </button>
    </h1>
    )
}
function CountDown(){
    const {activeCycle} = useContext(CycleContext)
    return <h1>Count Down {activeCycle}</h1>

}


export  function Home() {
    const [activeCycle, setActiveCycle] = useState(0)
  return (
    <CycleContext.Provider value={{activeCycle, setActiveCycle}}>
    <div>
        
        <NewCycleForm/>
        <CountDown/>

    </div>
    </CycleContext.Provider>
  )
}
