import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import useUser from '../hooks/useUser';

const Register = () => {
	const { isRegisterLoading, hasRegisterError, register, isLogged } = useUser();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		if (isLogged) {
			navigate('/');
		}
	}, [isLogged]);

	const handleSubmit = e => {
		e.preventDefault();
		const obj = {
			first_name: firstName,
			last_name: lastName,
			age,
			email,
			password,
		};
		register(obj);
	};

	return (
		<>
			{!isRegisterLoading && (
				<main id="container-register">
					<form
						onSubmit={handleSubmit}
						className="form-register col-10 col-md-8 col-lg-6"
					>
						<div className="m-3">
							<input
								type="text"
								name="firstName"
								placeholder="Nombre"
								className="col-12 input-with-icon user"
								onChange={e => setFirstName(e.target.value)}
								value={firstName}
								required
							/>
						</div>
						<div className="m-3">
							<input
								type="text"
								name="lastName"
								placeholder="Apellido"
								className="col-12 input-with-icon user"
								onChange={e => setLastName(e.target.value)}
								value={lastName}
								required
							/>
						</div>
						<div className="m-3">
							<input
								type="number"
								name="age"
								placeholder="Edad"
								className="col-12 input-with-icon user"
								onChange={e => setAge(e.target.value)}
								value={age}
								required
							/>
						</div>
						<div className="m-3">
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
						<div className="m-3">
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
						<button className="btn-form-register">Registrarse</button>
					</form>
					{isRegisterLoading && <strong>Cargando ...</strong>}
					{hasRegisterError && <strong>Datos inválidos</strong>}
					<div className="col-10 col-md-8 col-lg-6 container-links-register">
						<p>
							¿Ya tienes cuenta?{' '}
							<Link to={'/login'} className="link-register">
								Inicia sesión aquí
							</Link>
						</p>
					</div>
				</main>
			)}
		</>
	);
};

export default Register;
