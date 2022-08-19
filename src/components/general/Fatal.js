import React from "react";
import error_404 from '../../images/Error_404.png'

const Fatal = (props) => (
	<>
		<h2 className="center rojo">
				{props.mensaje}
		</h2>
		<div className="center">
			<img src={error_404} alt="Eror 404"></img>
		</div>
	</>
);

export default Fatal;