import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import Layout from "./Layouts/Layout";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Team from "./Pages/Team";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home></Home>
              </Layout>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <Layout>
                <About></About>
              </Layout>
            }
          ></Route>
          <Route
            path="/events"
            element={
              <Layout>
                <Events></Events>
              </Layout>
            }
          ></Route>
          <Route
            path="/team"
            element={
              <Layout>
                <Team></Team>
              </Layout>
            }
          ></Route>
          <Route
            path="/gallery"
            element={
              <Layout>
                <Gallery></Gallery>
              </Layout>
            }
          ></Route>

          <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
