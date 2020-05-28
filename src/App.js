import React from 'react'
import Input from './componects/Input'


function App(){
  const style1={
    textAlign:"center",
    color:"green"
  }
  const style2={
    textAlign:"center",
    color:"black",

  }
  const inputStyle={
    position:"relative",
    left:"30vw"
  }

  return(
    <div>
         <h1 style={style1}>To-Do list </h1>
         <h3 style={style2}>by Suman Das (sumandasddm@gmail.com)</h3>
         <Input />
         <input type="file"
         />
    </div>
  )
}
export default App
