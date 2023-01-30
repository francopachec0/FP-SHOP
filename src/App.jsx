import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <NavBar />
      <div className="bg-[#dee2e6] w-full h-screen static pt-20">
        
      </div>
      <Footer />
    </>
  )
}

export default App
