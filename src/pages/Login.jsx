import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<main id="container-login">
			<form className="form-login col-10 col-md-8">
				<div>
					<input
						type="email"
						name="email"
						placeholder="email"
						className="col-12 input-with-icon at"
						required
					/>
				</div>
				<div className="mb-3">
					<input
						type="password"
						name="password"
						placeholder="password"
						className="col-12 input-with-icon pencil"
						required
					/>
				</div>
				<button className="btn-form-login">Iniciar Sesión</button>
			</form>
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
	);
};

export default Login;
