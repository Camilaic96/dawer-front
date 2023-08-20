const Profile = () => {
	const user = {
		first_name: '<NAME>',
		last_name: '<LAST_NAME',
		age: 26,
		email: '<EMAIL>',
	};
	console.log(user);
	return (
		<main id="profile">
			<h2 className="bold">Mi perfil</h2>
			<div className="container-profile-info">
				<p>
					Nombre: <span className="bold">{user.first_name}</span>
				</p>
				<p>
					Apellido: <span className="bold">{user.last_name}</span>
				</p>
				<p>
					Edad: <span className="bold">{user.age}</span>
				</p>
				<p>
					Correo: <span className="bold">{user.email}</span>
				</p>
			</div>
		</main>
	);
};

export default Profile;
