import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
      <Container className="my-4 taskContainer d-flex flex-column align-items-center gap-5">
        <h1 className="text-center text-light display-3">Lista de tareas</h1>
      <FormularioTarea/>

      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
