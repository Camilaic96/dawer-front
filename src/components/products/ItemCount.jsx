const ItemCount = () => {
	const counter = 0;
	// const counter = 5
	return (
		<div className="count-table">
			<div>
				<button className="btn-products">
					<img src={'../img/icons/minus-red.png'} alt="restar uno" />
				</button>
				<button className="btn-products">{counter}</button>
				<button className="btn-products">
					<img src={'../img/icons/plus-red.png'} alt="sumar uno" />
				</button>
			</div>
			<div>
				{counter === 0 ? (
					<button className="btn-products">
						<img
							src={'../img/icons/check-box-red.png'}
							alt="check box - contador en 0"
						/>
					</button>
				) : (
					<button className="btn-products">
						<img
							src={'../img/icons/check-box-checked-red.png'}
							alt="volver contador a 0"
						/>
					</button>
				)}
			</div>
		</div>
	);
};

export default ItemCount;
