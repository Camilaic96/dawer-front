import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import cartService from '../services/cartService';

export const SessionContext = createContext();

// eslint-disable-next-line react/prop-types
const SessionContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState({});
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const userCookie = Cookies.get('user');
		console.log(userCookie);
		if (userCookie) {
			const userFromCookie = JSON.parse(userCookie);
			setUser(userFromCookie);
			console.log(userFromCookie);
			const cartCookie = cartService.getCartService(userFromCookie.cart);
			setCart(cartCookie);
		}
	}, []);

	return (
		<SessionContext.Provider
			value={{
				user,
				setUser,
				cart,
				setCart,
				products,
				setProducts,
			}}
		>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionContextProvider;
