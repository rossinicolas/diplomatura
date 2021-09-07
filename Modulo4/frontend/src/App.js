import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Nav } from "./components/layout/Nav";
import { Categorias } from "./pages/Categorias";
import { Contacto } from "./pages/Contacto";
import { Galeria } from "./pages/Galeria";
import { HomePage } from "./pages/HomePage";
import { Nosotros } from "./pages/Nosotros";
import { Novedades } from "./pages/Novedades";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nosotros" exact component={Nosotros} />
        <Route path="/categorias" exact component={Categorias} />
        <Route path="/galeria" exact component={Galeria} />
        <Route path="/novedades" exact component={Novedades} />
        <Route path="/contacto" exact component={Contacto} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
