const Usuario = ({ nombre, edad }) => {



    return (
        <>
            {
                edad < 30 ?
                    <p id="usuario">Nombre: {nombre}, edad: {edad}</p>
                    :
                    <p>Usuario mayor de 30</p>
            }

        </>
    )
}

export default Usuario;