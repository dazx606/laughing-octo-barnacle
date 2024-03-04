import { useState } from 'react';
import ContadorClase from './pages/ContadorClase/ContadorClase';
import ContadorFuncion from './pages/ContadorFuncion/ContadorFuncion';
import CicloClase from './pages/CicloClase/CicloClase';
import CicloFuncion from './pages/CicloFuncion/CicloFuncion';


function App() {

  const [contador, setContador] = useState(1);
  const [mostrarComponente, setMostrarComponente] = useState(true);

  const desmontarComponente =()=>{
    setMostrarComponente(!mostrarComponente);
  }

  return (



    <>
      {/* <ContadorClase numero={contador} setNumero={setContador}/>
      <ContadorFuncion numero={contador} setNumero={setContador}/> */}
      {
        mostrarComponente && <CicloFuncion/>
        // <CicloClase />
      }
      <button onClick={desmontarComponente}>Cambiar  estado del componente</button>
    </>
  )
}

export default App
