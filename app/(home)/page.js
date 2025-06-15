import { ProductCard } from "../components/product-card";

export default async function HomePage({ searchParams }) {
  const {
    q = "",
    categories = "",
    min = 0,
    max = 15999,
  } = await searchParams || {};

  const categoryList = categories ? categories.split(",") : [];

  // Fetch all products (since dummyjson doesn't support real filter queries)
  const products = await fetch(
    `https://dummyjson.com/products/search?${q ? `q=${q}` : ""}&sortBy=rating&order=desc&limit=150&select=title,price,thumbnail,rating,category,brand,availabilityStatus,discountPercentage`
  )
    .then(res => res.json())
    .then(data => {
      return data.products.filter(product=>{
        const category = product.category.toLowerCase();
        const price = product.price;
        return categoryList.length === 0 || categoryList.map(c => c.toLowerCase()).includes(category);
      })  
      .filter(product=>{
        const price = product.price;
        return price >= min && price <= max;
      })
    });


  return (
    <main className="flex-1 p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Products</h1>
        <p className="text-muted-foreground">
          Discover our wide range of products with advanced filtering options.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
