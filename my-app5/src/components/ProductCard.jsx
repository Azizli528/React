function ProductCard({ product }) {
  const { title, price, image, rating } = product

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-info">
          <span className="card-price">${price}</span>
          <span className="card-rating">
            ⭐ {rating?.rate} ({rating?.count})
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard