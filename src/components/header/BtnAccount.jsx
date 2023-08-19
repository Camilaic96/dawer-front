import { Link } from 'react-router-dom';

const btnAccount = () => {
	const userRole = 'ADMIN';
	// const userRole = 'USER';
	return (
		<div className="dropdown" id="btn-account-nav">
			<button
				className="dropdown-toggle border-0 d-flex align-items-center"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				<img src={'../img/icons/account.png'} width={36} alt="search icon" />
			</button>
			<ul className="dropdown-menu dropdown-menu-end">
				<li className="mb-3">
					<Link to={'/perfil'} className="li-btn-account">
						Perfil
					</Link>
				</li>
				{userRole === 'ADMIN' && (
					<li className=" mb-3">
						<Link to={'/panel'} className="li-btn-account">
							Panel
						</Link>
					</li>
				)}
				<li>
					<button className="li-btn-account">Cerrar Sesión</button>
				</li>
			</ul>
		</div>
	);
};

export default btnAccount;
