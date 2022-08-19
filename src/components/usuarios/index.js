import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
import Fatal from '../general/Fatal';
import Spinner from '../general/Spinner';
import Tabla from './Tabla';

class Usuarios extends Component {

	componentDidMount() {
    this.props.traerTodos();
	}

	ponerFilas = () => this.props.usuarios.map((usuario) => (
		<tr key={ usuario.id }>
			<td>
				{ usuario.name }
			</td>
			<td>
				{ usuario.email }
			</td>
			<td>
				{ usuario.website }
			</td>
		</tr>
	));

  ponerContenido = () => {
    if (this.props.cargando) {
      return (
        <Spinner />
      )
    }
    if (this.props.error) {
      return (
        <Fatal mensaje={this.props.error}/>
      )
    }
    return(
      <Tabla />
    )
  }

	render() {
		return (
			<div>
        <h1>Usuarios</h1>
				{this.ponerContenido()}
			</div>
		)
	}
};

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
}

//El primer parámetro de los primeros parantesis son todos aquellos reducers que el proveedor le va a entregar al usuario
//Mientras que el segundo el componente
//En las llaves llevará todos los actions
export default connect(mapStateToProps, usuariosActions)(Usuarios);