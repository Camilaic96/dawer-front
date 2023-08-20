import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/header/Header.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Error404 from './pages/Error404.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import PanelAdmin from './pages/PanelAdmin.jsx';
import Products from './pages/Products.jsx';
import Profile from './pages/Profile.jsx';
import Register from './pages/Register.jsx';
import DetailProduct from './pages/DetailProduct.jsx';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path={'/'} element={<Home />} />
					<Route path={'/productos/'} element={<Products />} />
					<Route path={'/productos/:catId'} element={<Products />} />
					<Route
						path={'/productos/:catId/detalle/:pid'}
						element={<DetailProduct />}
					/>
					<Route path={'/carrito'} element={<Cart />} />
					<Route path={'/ticket'} element={<Checkout />} />
					<Route path={'/login'} element={<Login />} />
					<Route path={'/registro'} element={<Register />} />
					<Route path={'/perfil'} element={<Profile />} />
					<Route path={'/password'} element={<ForgotPassword />} />
					<Route path={'/panel'} element={<PanelAdmin />} />
					<Route path={'*'} element={<Error404 />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
