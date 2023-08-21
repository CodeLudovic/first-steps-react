//Importar Modulos de React / Dependencias
import React from "react";

//Funcion del componente
const PrimerComponente = () => {
	let web = "www.whitebeartech.com";
	let usuario = {
		name: "Daniel",
		apellidos: "Ospina Ramirez",
		web: web,
	};
	return (
		<div className="mi-componente">
			{/* Invocar datos de un objeto en una vista. */}
			<h2>Componente Creado Por:</h2>
			<h3>Datos de Usuario:</h3>
			<ul>
				<li>
					Nombre: <strong>{usuario.name}</strong>
				</li>
				<li>
					Apellidos: <strong>{usuario.apellidos}</strong>
				</li>
				<li>
					Web: <strong>{usuario.web}</strong>
				</li>
			</ul>
			<p>Este es mi primer componente</p>
			<ul>
				<li>React</li>
				<li>Vue</li>
				<li>Angular</li>
			</ul>
		</div>
	);
};

// Export
export default PrimerComponente;
