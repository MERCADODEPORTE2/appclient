import React from "react";
import { Route, useLocation } from "react-router-dom";
import axios from "axios";

import { Home, Detail, Faqs, Catalogs, IAM, Map, Sizes } from "./pages/index";
import { Footer, PreFooter, Whatsapp, NavBar } from "./components";
import "./App.css";

import FaqsNav from "./components/sale/faqs";
axios.defaults.baseURL = "https://back-production-c55d.up.railway.app/";
// axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  const location = useLocation();
  // console.log(location.pathname);
  const eventInput = (setPaging) => {
    let fnResetPages = () => {
      setPaging((p) => (p = 0));
    };
  };

  return (
    <div className="App">
      <Route path="/">
        <NavBar />
      </Route>

      <Route exact path="/">
        <Home inputEvent={eventInput} />
      </Route>

      <Route
        path="/d/:name/:category/:id"
        render={({ match }) => (
          <Detail
            id={match.params.id}
            category={match.params.category}
            name={match.params.name}
          />
        )}
      />
      <Route exact path="/ayuda/faqs">
        <Faqs />
      </Route>

      <Route exact path="/sobre-mercado-deporte">
        <IAM />
      </Route>

      <Route exact path="/mapa-del-sitio">
        <Map />
      </Route>

      <Route exact path="/gua-de-tallas">
        <Sizes />
      </Route>

      {/* --------------------- */}

      <Route exact path="/productos">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/productos/:category">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/productos/:category/:name">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/productos/accesorio/medias">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/productos-destacados">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/productos-deportivos">
        <Catalogs inputEvent={eventInput} />
      </Route>
      {/* ------ teams ------ */}
      <Route exact path="/productos-deportivos/River Plate">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/productos-deportivos/Boca Juniors">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/productos-deportivos/Inter">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/productos-deportivos/Independiente">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/productos-deportivos/selección ARG">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/productos-deportivos/Racing">
        <Catalogs inputEvent={eventInput} />
      </Route>

      {/* <-------- --------> */}
      <Whatsapp />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
