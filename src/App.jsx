import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Home from "./components/pages/Home"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
