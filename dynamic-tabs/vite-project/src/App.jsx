import  { useState } from 'react'
import {Tabs, Tab} from "react-bootstrap"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tabValue, setTabValue] = useState("")
  const [tabs, setTabs] = useState([])
  const [active, activeTab] = useState(0)

const addTab =()=>{
  setTabs((prev)=>[...prev,{name:tabValue}
  ])
}

  return (
    <div>
    <input type="text" value={tabValue}  onChange={ (event)=>setTabValue(event.target.value)}/>
    <button onClick={addTab}>Add</button>
    <button> Clear</button>
      <div className="tabs-button">  
        {tabs.map((tab,index) => (
          <button onClick={()=>activeTab(index)}> {tab.name}  </button>
        ))}
      </div>
      <div className="tabs-content">  
        {tabs.map((tab,index) => (
          <p className={`${index === active ? "active" : ""}` } key={index}>
            {tab.name}
          </p>
        ))}
      </div>
    
    </div>
  )
}

export default App
