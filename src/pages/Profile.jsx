import { useContext, useEffect, useState } from 'react';

import { SessionContext } from '../context/SessionContext';

const Profile = () => {
	const { user } = useContext(SessionContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
		return () => {};
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}
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
