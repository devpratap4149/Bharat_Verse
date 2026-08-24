import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import PlaceDetails from "./pages/PlaceDetails";
import SoloWomen from "./pages/SoloWomen";
import Artisans from "./pages/Artisans";
import ArtisanDetails from "./pages/ArtisanDetails";
import AIGuide from "./pages/AIGuide";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/place/:id"
          element={<PlaceDetails />}
        />

        <Route path="/solo-women" element={<SoloWomen />} />

        <Route
          path="/artisans"
          element={<Artisans />}
        />

        <Route
          path="/artisan/:id"
          element={<ArtisanDetails />}
        />

        <Route
          path="/ai-guide"
          element={<AIGuide />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />


      </Routes>
    </>
  );
}

export default App;