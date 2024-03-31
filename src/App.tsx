import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="p-3">
            <Header />
            <Body />
            <Footer />
          </div>
        }
      />
      <Route
        path="/cart"
        element={
          <div className="p-3">
            <Header />
            <Cart />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
