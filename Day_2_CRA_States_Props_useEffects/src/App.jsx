import  { useState } from 'react'
import Todo from './components/todo/Todo'
import UseEffectsUseCases from "./components/useEffects/UseEffectsUseCases"
import UseEffectRequestAPI from "./components/useEffects/UseEffectRequestAPI"
import StopWatch from './components/stopWatch/StopWatch'

import './App.css'

const App = () => {
  return (
    <>
      <div className='container'>
      {/* <Todo/> */}
      {/* <UseEffectsUseCases/> */}
      {/* <UseEffectRequestAPI/> */}
      <StopWatch/>
      </div>
    </>

  )

}

export default App
