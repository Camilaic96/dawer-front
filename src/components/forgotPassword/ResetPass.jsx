const ResetPass = () => {
	return (
		<main id="container-forgot-pass">
			<p className="col-10 offset-1 col-md-8 offset-md-2">
				Ingresa tu correo y la nueva contraseña.
			</p>
			<form className="form-forgot-pass col-10 col-md-8">
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
				<button className="btn-form-forgot-pass">Restablecer contraseña</button>
			</form>
		</main>
	);
};

export default ResetPass;
