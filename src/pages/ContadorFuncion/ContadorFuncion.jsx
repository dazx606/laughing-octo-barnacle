import { useState } from "react"

const ContadorFuncion = ({ numero, setNumero }) => {

    const [estado, setEstado] = useState('Mi estad0');

    const sumar = () => {
        setNumero(numero + 1);
    }

    function restar (){
        setNumero(numero - 1);
    }

    return (
        <>
            <h1>
                Hola soy un componente de funcion
            </h1>
            <p>
                mi contador actual: {numero}
            </p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </>
    )
}

export default ContadorFuncion

