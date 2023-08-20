const FormCart = () => {
	return (
		<section id="form-container">
			<h3>¡Último paso!</h3>
			<p>
				Dejanos tus datos para enviar el pedido. Serás redireccionado a Whatsapp
				para terminar de enviarlo.
			</p>
			<form action="" id="cart-form" className="row">
				<div className="body-cart-form">
					<div>
						<input
							type="text"
							placeholder="Nombre y Apellido"
							className="input-with-icon user col-12 col-lg-5"
						/>
						<input
							type="email"
							placeholder="Correo electrónico"
							className="input-with-icon at col-12 offset-lg-2 col-lg-5"
						/>
					</div>
					<input
						type="text"
						placeholder="Dejanos tu comentario (Opcional)"
						className="input-with-icon pencil col-12"
					/>
				</div>
				<div className="container-btn-cart-form">
					<button className="btn-cart-form btn-cart-form-delete">
						Eliminar
					</button>
					<button type="submit" className="btn-cart-form btn-cart-form-submit">
						Enviar
					</button>
				</div>
			</form>
		</section>
	);
};

export default FormCart;
