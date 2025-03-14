import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import Appstore from "./Utils/Appstore";
import Home from "./Components/Home";
import Browse from "./Components/Browse";
import Login from "./Components/Login";
import Header from "./Components/Header";
import TvShows from "./Components/TvShows";
import Movies from "./Components/Movies";
import LatestRelease from "./Components/LatestRelease";
import Watch from "./Components/Watch";

function App() {
  return (
    <Provider store={Appstore}>
      <BrowserRouter>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/TvShow" element={<TvShows />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/NewsAndpopular" element={<LatestRelease />} />
            <Route path="/watch/:movieid" element={<Watch />} />

          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
