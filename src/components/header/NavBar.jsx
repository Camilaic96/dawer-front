// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { SessionContext } from '../../context/SessionContext';
import BtnCart from './BtnCart';
import BtnLogin from './BtnLogin';
import BtnAccount from './BtnAccount';

const NavBar = () => {
	const { user } = useContext(SessionContext);

	const itemsNav = [
		{
			id: 'products',
			to: '../productos',
			title: 'Productos',
		},
		{
			id: 'about-us',
			to: '../#about-us',
			title: 'Quiénes somos',
		},
		{
			id: 'faqs',
			to: '../#faqs',
			title: '¿Cómo hacer un pedido?',
		},
		{
			id: 'footer',
			to: '../#footer',
			title: 'Contacto',
		},
	];
	/*
	const [itemsNav, setItemsNav] = useState([]);

	useEffect(() => {
		fetch('./src/json/itemsNav.json')
			.then(response => response.json())
			.then(data => {
				setItemsNav(data);
			})
			.catch(error => console.error('Error loading navigation items', error));
	}, []);
    */
	return (
		<nav
			className="navbar navbar-expand-lg bg-body-tertiary"
			id="navbar-header"
		>
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse col-lg-9"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 col-lg-12">
						{itemsNav.map(item => (
							<li className="nav-item" key={item.id}>
								<NavLink to={item.to} className={'nav-link nav-link-header'}>
									{item.title}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<div className="col-lg-3 mx-3 d-flex justify-content-end">
					{user ? (
						<>
							<BtnCart />
							<BtnAccount />
						</>
					) : (
						<>
							<BtnLogin />
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
