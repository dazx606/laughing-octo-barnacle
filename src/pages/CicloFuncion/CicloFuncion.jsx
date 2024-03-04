import React, { useEffect, useState } from 'react'

const CicloFuncion = () => {

  const [estado, setEstado] = useState(5);

  const cambiarEstado = () =>{
    let random = Math.floor(Math.random() * 100) + 1;
    setEstado(random);
  }

  useEffect(()=>{
    console.log('se monta el componente')

    return ()=>{
      console.log('se desmonto el componente')
    }
  },[])

  useEffect(()=>{
    console.log('se cambio el estado nuevo estad: ', estado)
  },[estado])


  return (
    <div>
      <h1>Ciclo de vida componente de funcion</h1>
      <h2>El estado actual de mi componente es: {estado}</h2>
      <button onClick={cambiarEstado}>Cambiar estado</button>
    </div>
  )
}

export default CicloFuncion
