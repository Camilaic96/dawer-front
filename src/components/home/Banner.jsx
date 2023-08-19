import { useState } from 'react';

const Banner = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleIndicatorClick = index => {
		setActiveIndex(index);
	};

	return (
		<section id="banner">
			<div id="carouselBanner" className="carousel slide">
				<div className="carousel-inner">
					<div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
						<img
							src={'../img/banner/banner1.png'}
							className="d-block w-100"
							alt="imagen 1 banner"
						/>
					</div>
					<div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
						<img
							src={'../img/banner/banner2.png'}
							className="d-block w-100"
							alt="imagen 2 banner"
						/>
					</div>
					<div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
						<img
							src={'../img/banner/banner3.png'}
							className="d-block w-100"
							alt="imagen 3 banner"
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselBanner"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselBanner"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="carousel-indicators">
				<button
					type="button"
					onClick={() => handleIndicatorClick(0)}
					className={`rounded-circle btn-banner ${
						activeIndex === 0 ? 'active' : ''
					}`}
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					onClick={() => handleIndicatorClick(1)}
					className={`rounded-circle btn-banner ${
						activeIndex === 1 ? 'active' : ''
					}`}
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					onClick={() => handleIndicatorClick(2)}
					className={`rounded-circle btn-banner ${
						activeIndex === 2 ? 'active' : ''
					}`}
					aria-label="Slide 3"
				></button>
			</div>
		</section>
	);
};

export default Banner;
