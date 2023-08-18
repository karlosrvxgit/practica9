import { Fragment } from 'react'
import './App.css'

import Biografia from '/components/Biografia'
import Biografia2 from '/components/Biografia2'
import Biografia3 from '/components/Biograia3'

function App() {
  

  return (
    <Fragment>

        <div style={{
          height: "10px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center", alignItems: "center"
        }}>
          <Biografia foto='src/Imagen/m_jordan.png'/>
          <Biografia2 foto='src/Imagen/diego.jpg'/>
          <Biografia3 foto='src/Imagen/messi.jpg'/>
          
          
         
        </div >
      </Fragment>    
  )
}

export default App
