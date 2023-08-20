import FilterSubcategories from './FilterSubcategories';
import ListProducts from './ListProducts';

const ContainerListProducts = () => {
	return (
		<section>
			<FilterSubcategories />
			<ListProducts />
		</section>
	);
};

export default ContainerListProducts;
