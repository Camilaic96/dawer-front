import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<main id="error404">
			<h2>Error 404</h2>
			<p>Página no encontrada</p>
			<Link to={'/'} className="link-404">
				Volver al inicio
			</Link>
		</main>
	);
};

export default Error404;
