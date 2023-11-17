import Navbar from "./component/navbar";
import "./App.css";

import Footer from "./component/footer";
import Cover from "./component/cover";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { Signin } from "./pages/Signin";
import Resource from "./pages/resource";
import Sales from "./pages/sales";

function App() {
	return (
		<>
		   
			<Routes>
			    <Route path="/" element={<Home/>} />
				<Route path="sales" element={<Sales/>} />
				<Route path="Signin" element={<Signin />} />
				<Route path="SignUp" element={<SignUp />} />
				<Route path="resources" element={<Resource/>} />
			</Routes>	
				<Footer	/>
			
		</>
	);
}

export default App;
