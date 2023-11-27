import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Celebrity, Home, Movies, NotFound, TV, Login } from "./pages";
import Header from "./Components/Header.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movies/:movieId" element={<MovieDetail />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="/Login" element={<Login />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
