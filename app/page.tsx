
"use client";

import { useState } from "react";
import { menu } from "@/data/menu";
import WhatsAppCheckout from "@/components/WhatsAppCheckout";
import RestaurantInfo from "@/components/RestaurantInfo";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const categories = [
  "All",
  ...Array.from(new Set(menu.map((item) => item.category))),
];
 const displayCategories =
  selectedCategory === "All"
    ? categories.filter((category) => category !== "All")
    : [selectedCategory];

  const updateQuantity = (id: string, change: number) => {
    setCart((previous) => {
      const quantity = (previous[id] || 0) + change;
      const updated = { ...previous };

      if (quantity <= 0) {
        delete updated[id];
      } else {
        updated[id] = quantity;
      }

      return updated;
    });
  };

  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const cartTotal = menu.reduce(
    (total, item) => total + item.price * (cart[item.id] || 0),
    0
  );

  return (
    <main className="min-h-screen bg-[#FAF7F0] pb-28 text-gray-900">
      {/* Restaurant Header */}
      <header className="bg-[#163E36] px-5 py-8 text-center text-white">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
          Pure Vegetarian
        </p>

        <h1 className="text-3xl font-bold tracking-wide">
          Radha Ki Rasoi
        </h1>

        <p className="mt-2 text-sm text-amber-100">
          स्वाद, सेवा और संस्कार
        </p>

        <div className="mx-auto mt-5 h-1 w-16 rounded bg-amber-400" />

        <p className="mt-4 text-sm text-gray-200">
          Ghar Jaisa Swad, Har Baar!
        </p>
      </header>

      {/* Category Filter */}
      <nav className="sticky top-0 z-10 border-b bg-[#FAF7F0] px-4 py-3">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
                selectedCategory === category
                  ? "bg-[#163E36] text-white"
                  : "border border-gray-300 bg-white text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

     
{/* Menu Items */}
<section className="mx-auto max-w-2xl px-4 py-8">
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-[#163E36]">
      Our Menu
    </h2>
    <p className="mt-2 text-sm text-gray-500">
      Freshly prepared, just for you.
    </p>
  </div>

  <div className="space-y-10">
    {displayCategories.map((category) => {
      const categoryItems = menu.filter(
        (item) => item.category === category
      );

      return (
        <div key={category}>
          {/* Category Heading */}
          <div className="mb-4 border-b-2 border-[#D4AF37] pb-3">
            <div className="flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-[#D4AF37]" />

              <h3 className="text-2xl font-bold text-[#163E36]">
                {category}
              </h3>

              <span className="ml-auto rounded-full bg-[#163E36]/10 px-3 py-1 text-xs font-medium text-[#163E36]">
                {categoryItems.length} items
              </span>
            </div>
          </div>

          {/* Items in This Category */}
          <div className="rounded-2xl border-2 border-[#E9E1D2] shadow-sm">
            {categoryItems.map((item) => {
              const quantity = cart[item.id] || 0;

              return (
                <article
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-4 transition-shadow hover:shadow-md"
                >
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {item.name}
                    </h4>

                    <p className="mt-1 text-lg font-bold text-[#163E36]">
                      ₹{item.price}
                    </p>
                    {item.items && (
  <ul className="mt-3 flex flex-wrap gap-1.5">
    {item.items.map((subItem) => (
      <li
        key={subItem}
        className="rounded-md bg-[#FAF7F0] px-2 py-1 text-xs text-gray-600"
      >
        {subItem}
      </li>
    ))}
  </ul>
)}
                  </div>

                  {quantity === 0 ? (
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="rounded-lg border border-[#163E36] px-5 py-2 font-semibold text-[#163E36] active:bg-[#163E36] active:text-white"
                    >
                      ADD +
                    </button>
                  ) : (
                    <div className="flex items-center gap-4 rounded-lg bg-[#163E36] px-3 py-2 text-white">
                      <button
                        aria-label={`Remove one ${item.name}`}
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        −
                      </button>

                      <span className="font-semibold">
                        {quantity}
                      </span>

                      <button
                        aria-label={`Add one ${item.name}`}
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
</section>

      {/* Cart Summary */}
      {cartCount > 0 && (
        <div className="fixed bottom-0 left-0 z-20 w-full border-t bg-white p-4 shadow-lg">
          <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">
                {cartCount} item{cartCount !== 1 ? "s" : ""} selected
              </p>
              <p className="text-xl font-bold text-[#163E36]">
                ₹{cartTotal}
              </p>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="rounded-xl bg-[#163E36] px-6 py-3 font-semibold text-white"
            >
              View Order →
            </button>
          </div>
        </div>
      )}
      {isCheckoutOpen && (
  <WhatsAppCheckout
    cart={cart}
    cartTotal={cartTotal}
    onClose={() => setIsCheckoutOpen(false)}
  />
)}
<RestaurantInfo />
    </main>
  );
}
