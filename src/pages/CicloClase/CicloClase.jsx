import React, { Component } from 'react'

export default class CicloClase extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numero: 5
        }

        console.log('constructor, esto es lo primero que va a hacer mi componente en el ciclo de vida');

    }

    componentDidMount() {
        console.log('didMount, por ultimo esto es lo que va a hacer mi componente en la etapa de montaje')
    }

    componentDidUpdate() {
        console.log('me actualizo');
        if(this.state.numero === 10){
            console.log('el estado es 10')
        } else {
            console.log('el estado no es 10')
        }
    }

    componentWillUnmount(){
        console.log('dejo de existir')
    }

    changeState = () => {
        let random = Math.floor(Math.random() * 100) + 1;
        this.setState({ numero: random })
    }

    render() {
        console.log('render, esto es lo segundo que va a hacer mi componente o se va actualizar')

        return (
            <>
                <div>
                    <h1>El numero es: {this.state.numero}</h1>
                </div>
                <button onClick={this.changeState}>Cambiar estado</button>
            </>
        )
    }
}
