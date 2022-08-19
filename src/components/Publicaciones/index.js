import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerPorUsuario: publicacionesTraerPorUsuario } = publicacionesActions;

function withParams(Component) {
	return props => <Component {...props} params={useParams()} />;
}

class Publicaciones extends Component {

	async componentDidMount() {
		if (!this.props.usuariosReducer.usuarios.lenght) {
			await this.props.usuariosTraerTodos();
		}
		this.props.publicacionesTraerPorUsuario(this.props.params.key);
	}

	render() {
		console.log(this.props.usuariosReducer.usuarios)
		console.log(this.props);
		return (
			<div>
				<h1>
					Publicaciones de {this.props.usuariosReducer.usuarios[this.props.params.key].name}
				</h1>
				{this.props.params.key}               
			</div>
		);
	}
}
// Antes se tenía un solo reducer, por eso se usaba de esta manera
// const mapStateToProps = (reducers) => {
// 	return reducers.usuariosReducer;
// }

//Ahora se tienen múlples Reducers
const mapStateToProps = ({usuariosReducer, publicacionesReducer}) => {
	return {
		usuariosReducer,
		publicacionesReducer,
	}
}

//Esto con multiples dispatch
const mapDispatchToProps = {
	usuariosTraerTodos,
	publicacionesTraerPorUsuario,
};


// export default connect(mapStateToProps, usuariosActions)(withParams(Publicaciones));
export default connect(mapStateToProps, mapDispatchToProps)(withParams(Publicaciones));