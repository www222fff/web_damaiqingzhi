import { Button } from "@/components/ui/button";
import { ProductCard } from "../product/ProductCard";
import { Link } from "react-router-dom";

// Sample product data
const products = [
  {
    id: "1",
    name: "大麦青汁基础版",
    description: "纯天然大麦草精华，每日健康饮品",
    price: 99,
    originalPrice: 129,
    image: "https://placehold.co/600x600/green/white?text=基础版",
  },
  {
    id: "2",
    name: "大麦青汁高级版",
    description: "添加多种水果精华，口感更佳",
    price: 129,
    originalPrice: 159,
    image: "https://placehold.co/600x600/darkgreen/white?text=高级版",
  },
  {
    id: "3",
    name: "大麦青汁家庭装",
    description: "30袋大容量，全家共享健康",
    price: 239,
    originalPrice: 299,
    image: "https://placehold.co/600x600/olivedrab/white?text=家庭装",
  },
  {
    id: "4",
    name: "大麦青汁礼盒装",
    description: "精美包装，送礼佳选",
    price: 299,
    originalPrice: 359,
    image: "https://placehold.co/600x600/lightgreen/black?text=礼盒装",
  },
];

export function ProductsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">精选产品</h2>
            <p className="text-muted-foreground">
              探索我们的热销大麦青汁产品系列
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/products">查看全部产品</Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
