const FilterSubcategories = () => {
	const subcategories = ['vinos', 'espumantes'];
	const activeSubcategory = 'vinos';

	return (
		<div className="container-filter">
			<div className="d-flex justify-content-end">
				<button
					className="btn-filter"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseFilter"
					aria-expanded="false"
					aria-controls="collapseFilter"
				>
					Filtrar
					<img
						src="../img/icons/filter-blue.png"
						alt="filter icon"
						width="18"
					/>
				</button>
			</div>
			<div className="d-flex justify-content-start">
				<div className="collapse" id="collapseFilter">
					{subcategories.map(subcategory => (
						<button
							key={subcategory}
							className={`btn-filter-item ${
								activeSubcategory === subcategory ? 'active' : ''
							}`}
							type="button"
						>
							{subcategory}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default FilterSubcategories;
