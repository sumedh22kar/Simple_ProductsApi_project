import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="Container">
        <img src={product.thumbnail} alt={product.title} />

        <div className="card-body">
          <h2>{product.title}</h2>

          <p className="price">$ {product.price}</p>

          <p className="category">{product.category}</p>

          <p className="rating">⭐ {product.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
