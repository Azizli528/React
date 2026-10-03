function ProductCard(props) {

  return (
    <div className="product-card">

      <img src={props.image} alt={props.name} className="product-image" />

      <div className="product-info">
        <span className="product-category">{props.category}</span>
        <h3 className="product-name">{props.name}</h3>
        <p className="product-price">${props.price}</p>
        <button
          className="add-btn"
          onClick={() => window.open("https://www.trendyol.com/")}
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;