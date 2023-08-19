import { Link } from 'react-router-dom';

import NavBar from './NavBar';

const Header = () => {
	return (
		<header id="header">
			<div className="banner-navbar blue-background">
				<Link to={'/'} className="banner-content">
					<img
						src={'../img/logo.png'}
						alt="Logo Dawer Sabores"
						className="logo-header"
					/>
				</Link>
			</div>
			<NavBar />
		</header>
	);
};

export default Header;
