import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
	return (
		<BrowserRouter>
      <h1>Minu blogi</h1>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
