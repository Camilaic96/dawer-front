import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useUser from '../hooks/useUser';

const Login = () => {
	const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	console.log(email);
	console.log(password);

	useEffect(() => {
		if (isLogged) {
			navigate('/');
		}
	}, [isLogged]);

	useEffect(() => {
		if (hasLoginError) {
			setEmail('');
			setPassword('');
		}
	}, [hasLoginError]);

	const handleSubmit = e => {
		e.preventDefault();

		const obj = {
			email,
			password,
		};
		login(obj);
	};

	return (
		<>
			{!isLoginLoading && (
				<main id="container-login">
					<form onSubmit={handleSubmit} className="form-login col-10 col-md-8">
						<div>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="col-12 input-with-icon at"
								onChange={e => setEmail(e.target.value)}
								value={email}
								required
							/>
						</div>
						<div className="mb-3">
							<input
								type="password"
								name="password"
								placeholder="password"
								className="col-12 input-with-icon pencil"
								onChange={e => setPassword(e.target.value)}
								value={password}
								required
							/>
						</div>
						<button className="btn-form-login">Iniciar Sesión</button>
					</form>
					{isLoginLoading && <strong>Cargando ...</strong>}
					{hasLoginError && <strong>Datos inválidos</strong>}
					<div className="col-10 col-md-8 container-links-login">
						<p>
							¿Aún no tienes cuenta?{' '}
							<Link to={'/registro'} className="link-login">
								Regístrate aquí
							</Link>
						</p>
						<p>
							<Link to={'/password'} className="link-login">
								Restablecer contraseña
							</Link>
						</p>
					</div>
				</main>
			)}
		</>
	);
};

export default Login;
