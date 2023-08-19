import { Link } from 'react-router-dom';

const BtnCart = () => {
	return (
		<Link to={'/carrito'} id="btn-cart-nav">
			<img src={'../img/icons/cart-red.png'} alt="cart icon" />
			<span className="badge rounded-pill">0 {/* {cartTotal()} */}</span>
		</Link>
	);
};

export default BtnCart;
