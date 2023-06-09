import s from './ProductList.module.css';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className={s.products__list}>
      {products.map((elem, index) => (
        <ProductItem key={index} product={elem} />
      ))}
    </div>
  );
};

export default ProductList;
