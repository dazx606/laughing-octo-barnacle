import React, { Component } from 'react'

export default class ContadorClase extends Component {

    constructor(props) {
        super(props);

        this.state = {
            estado: 'Mi estado'
        }

        this.restar = this.restar.bind(this);

    }

    sumar = () => {
        this.props.setNumero(this.props.numero + 1);
    }

    restar (){
        this.props.setNumero(this.props.numero - 1);
    }

    render() {

        return (
            <div>
                <h1>Componente de clase</h1>
                <p>
                    estado de mi componente {this.props.numero}
                </p>

                <button onClick={this.sumar}>Sumar</button>
                <button onClick={this.restar}>Restar</button>

            </div>
        )
    }
}
