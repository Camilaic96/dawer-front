import { Link } from 'react-router-dom';

const BtnLogin = () => {
	return (
		<Link to={'/login'} className="btn btn-login-nav" id="btn-login-nav">
			Iniciar sesión
		</Link>
	);
};

export default BtnLogin;
