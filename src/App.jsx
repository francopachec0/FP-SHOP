import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import toast, { Toaster } from "react-hot-toast";
import { ProductsList } from "./components/ProductsList";
import { Error404 } from "./components/Error404";

function App () {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <NavBar />
      <div className="bg-[#dee2e6] w-full h-screen static pt-20">
        <Routes>
          <Route path={"/"} element = {<ProductsList />}/>
          <Route exact path={"/product/:productID"} element = {<ProductsList />}/>
          <Route path={"/404"} element = {<Error404 />}/>
          <Route path={"*"} element={<Navigate to="/404" />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
