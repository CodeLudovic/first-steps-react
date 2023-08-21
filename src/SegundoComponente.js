import React from "react";

export const SegundoComponente = () => {
	const libros = ["Harry Potter", "Juego De Tronos", "Clean Code"];
	return (
		<div className="segundo-componente">
			<h1>Listado de Libro</h1>
			{libros.length >= 1 ? (
				<ul>
					{libros.map((libro, index) => (
						<li key={index}>{libro}</li>
					))}
				</ul>
			) : (
				<p>No hay Libros</p>
			)}
		</div>
	);
};
