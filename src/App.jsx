import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import toast, { Toaster } from "react-hot-toast";
import { ProductsList } from "./components/ProductsList";
import { Error404 } from "./components/Error404";
import { ProductDetails } from "./components/ProductDetails";
import { Home } from "./components/Home";

function App () {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <NavBar />
      <div className="w-full static">
        <Routes>
          <Route path={"/"} element = {<Home />}/>
          <Route exact path={"/product/:productID"} element = {<ProductDetails />}/>
          <Route path={"/404"} element = {<Error404 />}/>
          <Route path={"*"} element={<Navigate to="/404" />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
