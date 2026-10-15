import { useGetProductsQuery } from '../app/productsApi'
import ProductCard from './ProductCard'

function ProductList() {
  const { data: products, isLoading, isError, error } = useGetProductsQuery()

  if (isLoading) {
    return (
      <div className="status">
        <div className="spinner"></div>
        <p>Yüklənir...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="status error">
        <p>Xəta baş verdi: {error?.status ?? 'Naməlum xəta'}</p>
        <p>Məhsulları yükləmək mümkün olmadı. Zəhmət olmasa sonra yenidən cəhd edin.</p>
      </div>
    )
  }

  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList