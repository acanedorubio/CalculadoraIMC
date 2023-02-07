import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

function App() {
  
  const [peso, setPeso] = useState(0)
  const [altura,setAltura] = useState(0)
  const [valido,setValido] = useState(false)
  const [imc,setImc] = useState(0)

  return (
    <div className="container">
      <Header />

      {valido ? <Resultado 
        imc={imc}
        setValido={setValido}
      /> : <Formulario 
        setPeso={setPeso}
        setAltura={setAltura}
        peso={peso}
        altura={altura}
        setValido={setValido}
        setImc={setImc}
      />}

    
      
    </div>
  )
}

export default App
