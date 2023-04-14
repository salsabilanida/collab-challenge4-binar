import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchedMovie from "./pages/SearchedMovie";
import All from "./pages/AllMovies";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavigationBar from "./components/NavigationBar";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scroll({ top: 0 });
  }, [location.pathname]);
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All" element={<All />} />
        <Route path="/search" element={<SearchedMovie />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
