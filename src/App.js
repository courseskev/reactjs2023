import "./App.css";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Components/ItemListContainer";

const saludo = "Listado de productos";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensajeTitulo={saludo} />
    </>
  );
}

export default App;
