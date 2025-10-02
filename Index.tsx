import { MobileNav } from "@/components/MobileNav";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import productDress from "@/assets/product-dress.jpg";
import productRing from "@/assets/product-ring.jpg";
import productCottonLinen from "@/assets/product-cotton-linen.jpg";

const categories = [
  { title: "Linen Clothing", image: productDress, link: "/shop/clothing" },
  { title: "Cotton Linen Clothing", image: productCottonLinen, link: "/shop/cotton-linen" },
  { title: "Fine Jewelry", image: productRing, link: "/shop/jewelry" },
];

const featuredProducts = [
  {
    id: "1",
    name: "Elegant Linen Dress",
    price: 4999,
    image: productDress,
    category: "Linen Dresses"
  },
  {
    id: "2",
    name: "Silver Gemstone Ring",
    price: 3499,
    image: productRing,
    category: "Silver Jewelry"
  },
  {
    id: "3",
    name: "Linen Co-ord Set",
    price: 5999,
    image: productDress,
    category: "Linen Sets"
  },
  {
    id: "4",
    name: "Gold Micron Earrings",
    price: 2999,
    image: productRing,
    category: "Gold Jewelry"
  },
  {
    id: "5",
    name: "Cotton Linen Shirt",
    price: 3499,
    image: productCottonLinen,
    category: "Cotton Linen"
  },
  {
    id: "6",
    name: "Intaglio Necklace",
    price: 4499,
    image: productRing,
    category: "Silver Jewelry"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen pb-20">
      <AnnouncementBar />
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-[var(--shadow-soft)]">
        <div className="flex items-center justify-between px-4 h-16">
          <h1 className="text-2xl font-heading font-semibold">PehroDesign</h1>
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main>
        <HeroCarousel />

        <section className="px-4 py-12">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-3 gap-3 max-w-4xl mx-auto">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>

        <section className="px-4 py-12 bg-gradient-to-b from-transparent to-muted/30">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-semibold">Featured</h2>
            <Button variant="link" className="text-primary">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="px-4 py-16 text-center bg-primary/5 mt-12">
          <h2 className="text-3xl font-heading font-semibold mb-4">
            New Arrivals
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Discover our latest collection of premium linen clothing and handcrafted jewelry
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Explore Collection
          </Button>
        </section>
      </main>

      <MobileNav />
    </div>
  );
};

export default Index;
