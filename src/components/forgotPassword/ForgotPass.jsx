const ForgotPass = () => {
	return (
		<main id="container-forgot-pass">
			<p className="col-10 offset-1 col-md-8 offset-md-2">
				Ingresa tu correo y te enviaremos un enlace para restablecer tu
				contraseña.
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
				<button className="btn-form-forgot-pass">Restablecer</button>
			</form>
		</main>
	);
};

export default ForgotPass;
