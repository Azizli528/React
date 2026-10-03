import ProductCard from "./ProductCard";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 60,
    category: "Electronics",
    image: "https://picsum.photos/seed/headphones/300/200",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 90,
    category: "SPORTS",
    image: "https://picsum.photos/seed/shoes/300/200",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 74,
    category: "Fashion",
    image: "https://picsum.photos/seed/backpack/300/200",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 130,
    category: "Electronics",
    image: "https://picsum.photos/seed/watch/300/200",
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 50,
    category: "Home",
    image: "https://picsum.photos/seed/coffee/300/200",
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 24,
    category: "Sports",
    image: "https://picsum.photos/seed/yoga/300/200",
  },
];

function App() {

  return (
    <div className="container">

      <h1 className="title">Products</h1>
      
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>

    </div>
  );
}

export default App;