import { Routes, Route } from "react-router-dom";

import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";

import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";

function App() {
  return (
    <>
      <Container>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
