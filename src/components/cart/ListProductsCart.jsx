import ItemCount from '../products/ItemCount';
const ListProductsCart = () => {
	const products = [
		{
			_id: 1,
			variety: 'var1',
			presentation: 'pres1',
			name: 'Product 1',
			price: 100,
			quantity: 1,
			image: 'https://picsum.photos/200/300',
		},
		{
			_id: 2,
			variety: 'var2',
			presentation: 'pres2',
			name: 'Product 2',
			price: 200,
			quantity: 3,
			image: 'https://picsum.photos/200/300',
		},
	];
	return (
		<section id="cart-list">
			<h2 className="cart-title">Mi lista</h2>
			<div className="cart-body">
				{products.map(product => (
					<div key={product._id} className="row-table">
						<div className="col-md-1">
							<img src={product.image} alt="" height={50} />
						</div>
						<div className="row-table-info col-md-8">
							<div className="name-product-table col-lg-3">{product.name}</div>
							<div className="item-table col-lg-3">| {product.variety}</div>
							<div className="item-table col-lg-3">
								| {product.presentation}
							</div>
							<div className="item-table col-lg-2">
								| ${product.price * product.quantity}
							</div>
						</div>
						<div className="count-table col-md-3">
							<ItemCount />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ListProductsCart;
