import logo from "./logo.svg";
import "./App.css";
import App2 from "./app2";
import PrimerComponente from "./PrimerComponente";
import { SegundoComponente } from "./SegundoComponente";
import { TercerComponente } from "./TercerComponente";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<div className="componentes">
					<App2 />
					<hr />
					<TercerComponente nombre="Daniel" apellido="Ospina" />
					<hr />
					<SegundoComponente />
					<hr />
					<PrimerComponente />
					<hr />
				</div>
				{/* Mi Componente */}
			</header>
		</div>
	);
}

export default App;
