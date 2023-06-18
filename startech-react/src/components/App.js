// Librerias
import React from "react";
import { Route, Switch} from "react-router-dom";

// Componentes
import GenresInDb from "./GenresInDb/GenresInDb";
import ContentWrapper from "./ContentWrapper/ContentWrapper";
import LastMovieInDb from "./LastMovieInDb/LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies/ContentRowMovies";
import Usuario from "./Usuarios/usuarios";
import { PanelLeft } from './nav/Nav'; 


function App() {
  return (
    <>
      <div id="wrapper">
        <PanelLeft />

        <Switch>
          <Route exact path="/">
            <ContentWrapper />
          </Route>

          <Route exact path="/genres">
            <GenresInDb />
          </Route>

          <Route exact path="/last">
            <LastMovieInDb />
          </Route>

          <Route exact path="/movies">
            <ContentRowMovies />
          </Route>

          <Route exact path="/usuarios">
            <Usuario />
          </Route>

          <Route exact path="*">
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b.png"/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
