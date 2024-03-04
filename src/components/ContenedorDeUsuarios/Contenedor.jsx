import Usuario from '../Usuario/Usuario.jsx'

function Contenedor() {

    const listaUsuarios =[
        {nombre:'David', edad:30},
        {nombre:'Matias', edad:32},
        {nombre:'Marcela', edad:20},
        {nombre:'Laura', edad:25},
        {nombre:'Juan', edad:28},
    ]

    return (
        <>
            <h2 className='lista'>Yo soy una lista</h2>
            {
                listaUsuarios.map((usuario, indice) => <Usuario nombre={usuario.nombre} edad={usuario.edad} key={indice}/>)
            }

        </>
    )
}

export default Contenedor
