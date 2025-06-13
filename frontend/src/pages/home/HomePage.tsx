import { RequestTypeToggle } from "@features/request-type/ui/RequestTypeToggle";
import { BasketView } from "@widgets/cart/BasketView";
import { ProductList } from "@widgets/catalog/ProductList";

export default function HomePage() {
    return (
        <main className="max-w-6xl mx-auto p-6">
            <header className="flex items-center justify-between">
                <h1 className="text-3xl font-bold mb-6">🛍 Product Store</h1>
                <RequestTypeToggle />
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <ProductList />
                </div>
                <div className="sticky top-6 self-start h-fit">
                    <BasketView />
                </div>
            </div>
        </main>
    );
}
