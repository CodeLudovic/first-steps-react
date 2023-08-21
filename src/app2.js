//import React, { Component } from "react";

// export default class App2 extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			nombre: "Daniel",
// 		};
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hola soy {this.state.nombre}</h1>
// 				<button
// 					onClick={() => {
// 						//! Esto no se renderizara porque el estado debe mutar completamente.
// 						//this.state.nombre = "Rocket";

// 						//? De esta manera el estado si se renderizara, Nota: el estado modifico la
// 						//? propiedad nombre en el mas no cambia el objeto como tal
// 						this.setState({ nombre: "Rocket", raza: "Perro" });
// 						console.log(this.state);
// 					}}>
// 					Cambiar
// 				</button>
// 			</div>
// 		);
// 	}
// }
// import React from "react";

// export const App2 = () => {
// 	return <div>A</div>;
// };

import React, { Component } from "react";

export default class app2 extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		console.log("Estas en el mount");
	}

	render() {
		const disminuir = () => {
			this.setState({ count: this.state.count - 1 });
			console.log(this.state);
		};

		const aumentar = () => {
			this.setState({ count: this.state.count + 1 });
			console.log(this.state);
		};
		return (
			<div>
				<h1>life-cycle</h1>
				<h1>{this.state.count}</h1>
				<button onClick={aumentar}>+</button>
				<button onClick={disminuir}>-</button>
			</div>
		);
	}
}
