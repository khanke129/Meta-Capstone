import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Booking from "./pages/Booking"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/booking"
					element={<Booking />}
				/>
			</Routes>
      <Footer />
      </div>
	)
}

export default App
