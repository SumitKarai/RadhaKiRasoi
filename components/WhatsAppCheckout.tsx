
"use client";

import { useState } from "react";
import { menu } from "@/data/menu";

type WhatsAppCheckoutProps = {
  cart: Record<string, number>;
  cartTotal: number;
  onClose: () => void;
};

export default function WhatsAppCheckout({
  cart,
  cartTotal,
  onClose,
}: WhatsAppCheckoutProps) {
  const [customerName, setCustomerName] = useState("");
const [orderType, setOrderType] = useState<"dine-in" | "delivery">(
  "dine-in"
);
  // Replace with the restaurant's actual WhatsApp number.
  const whatsappNumber = "918518023863";
  const deliveryCharge = orderType === "delivery" ? 20 : 0;
const packingCharge = orderType === "delivery" ? 10 : 0;

  const grandTotal = cartTotal + deliveryCharge + packingCharge;
  const orderItems = menu.filter(
    (item) => (cart[item.id] || 0) > 0
  );

  const sendOrder = () => {
  if (!customerName.trim()) {
    alert("Please enter your name.");
    return;
  }

  const message = [
    "*New Order - Radha Ki Rasoi*",
    "",
    `Customer: ${customerName.trim()}`,
    `Order Type: ${orderType === "delivery" ? "Delivery" : "Dine-in"}`,
    "",
    "*Order Details:*",
    ...orderItems.map((item) => {
      const quantity = cart[item.id];
      return `${item.name} x ${quantity} = ₹${item.price * quantity}`;
    }),
    "",
    `Item Subtotal: ₹${cartTotal}`,
    ...(orderType === "delivery"
      ? [
          `Delivery Charge: ₹${deliveryCharge}`,
          `Packing Charge: ₹${packingCharge}`,
        ]
      : []),
    `*Grand Total: ₹${grandTotal}*`,
    "",
    "Please confirm my order.",
  ].join("\n");

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
};

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-checkout-title"
        className="w-full max-w-md rounded-2xl bg-[#FAF7F0] p-5 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2
            id="whatsapp-checkout-title"
            className="text-2xl font-bold text-[#163E36]"
          >
            Your Order
          </h2>

          <button
            onClick={onClose}
            aria-label="Close checkout"
            className="text-2xl text-gray-500"
          >
            ×
          </button>
        </div>

<div className="mb-5">
  <p className="mb-3 text-sm font-semibold text-gray-700">
    How would you like to order?
  </p>

  <div className="grid grid-cols-2 gap-3">
    <button
      type="button"
      onClick={() => setOrderType("dine-in")}
      className={`rounded-xl border-2 px-4 py-3 text-sm font-semibold transition ${
        orderType === "dine-in"
          ? "border-[#163E36] bg-[#163E36] text-white"
          : "border-gray-200 bg-white text-gray-700"
      }`}
    >
      🍽️ Dine-in
    </button>

    <button
      type="button"
      onClick={() => setOrderType("delivery")}
      className={`rounded-xl border-2 px-4 py-3 text-sm font-semibold transition ${
        orderType === "delivery"
          ? "border-[#163E36] bg-[#163E36] text-white"
          : "border-gray-200 bg-white text-gray-700"
      }`}
    >
      🛵 Delivery
    </button>
  </div>
</div>

        <div className="mb-5 space-y-3 rounded-xl bg-white p-4">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-3 text-sm"
            >
              <span>
                {item.name} × {cart[item.id]}
              </span>

              <span className="font-semibold">
                ₹{item.price * cart[item.id]}
              </span>
            </div>
          ))}
          </div>


          
<div className="space-y-3 border-t pt-3 text-sm">
  <div className="flex justify-between">
    <span>Item Subtotal</span>
    <span>₹{cartTotal}</span>
  </div>

  {orderType === "delivery" && (
    <>
      <div className="flex justify-between">
        <span>Delivery Charge</span>
        <span>₹{deliveryCharge}</span>
      </div>

      <div className="flex justify-between">
        <span>Packing Charge</span>
        <span>₹{packingCharge}</span>
      </div>
    </>
  )}

  <div className="flex justify-between border-t pt-3 text-base font-bold">
    <span>Grand Total</span>
    <span className="text-[#163E36]">
      ₹{grandTotal}
    </span>
  </div>
</div>


        <label
          htmlFor="customer-name"
          className="mb-2 block text-sm font-semibold"
        >
          Your name
        </label>

        <input
          id="customer-name"
          value={customerName}
          onChange={(event) => setCustomerName(event.target.value)}
          placeholder="Enter your name"
          className="mb-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#163E36]"
        />

        <button
          onClick={sendOrder}
          className="w-full rounded-xl bg-[#167C42] px-4 py-3 font-semibold text-white"
        >
          Send Order on WhatsApp ↗
        </button>

        <p className="mt-3 text-center text-xs text-gray-500">
          Review your message and press Send in WhatsApp.
        </p>
      </div>
    </div>
  );
}
