import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<main id="container-register">
			<form className="form-register col-10 col-md-8 col-lg-6">
				<div className="m-3">
					<input
						type="text"
						name="firstName"
						placeholder="Nombre"
						className="col-12 input-with-icon user"
						required
					/>
				</div>
				<div className="m-3">
					<input
						type="text"
						name="lastName"
						placeholder="Apellido"
						className="col-12 input-with-icon user"
						required
					/>
				</div>
				<div className="m-3">
					<input
						type="number"
						name="age"
						placeholder="Edad"
						className="col-12 input-with-icon user"
						required
					/>
				</div>
				<div className="m-3">
					<input
						type="email"
						name="email"
						placeholder="email"
						className="col-12 input-with-icon at"
						required
					/>
				</div>
				<div className="m-3">
					<input
						type="password"
						name="password"
						placeholder="password"
						className="col-12 input-with-icon pencil"
						required
					/>
				</div>
				<button className="btn-form-register">Registrarse</button>
			</form>
			<div className="col-10 col-md-8 col-lg-6 container-links-register">
				<p>
					¿Ya tienes cuenta?{' '}
					<Link to={'/login'} className="link-register">
						Inicia sesión aquí
					</Link>
				</p>
			</div>
		</main>
	);
};

export default Register;
