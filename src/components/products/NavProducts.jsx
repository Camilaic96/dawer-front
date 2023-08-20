/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const NavProducts = ({ categories, catId }) => {
	const catIdActive = catId || categories[0].id;
	const objActive = categories.find(category => category.id === catIdActive);

	const backgroundImageStyle = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${objActive.backgroundImage})`,
	};
	return (
		<section id="section-nav-products">
			<nav className="navbar navbar-expand-lg" id="navbar-products">
				<button
					className="navbar-toggler m-3"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContentProducts"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse row"
					id="navbarSupportedContentProducts"
				>
					<ul className="navbar-nav mb-lg-0">
						{categories.map(category => (
							<li key={category.id} className="nav-item col-md-2 text-center">
								<NavLink
									to={category.link}
									className={'nav-link nav-link-products'}
								>
									{category.category}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</nav>
			<div style={backgroundImageStyle} className="background-image">
				<p className="bold text-categories">{objActive.text}</p>
			</div>
		</section>
	);
};

export default NavProducts;
