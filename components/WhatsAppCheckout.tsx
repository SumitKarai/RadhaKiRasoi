
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

  const [customerAddress, setCustomerAddress] = useState("");
  const [customerLocation, setCustomerLocation] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState("");

  // Restaurant WhatsApp number with country code.
  const whatsappNumber = "919479469001";

  const deliveryCharge = orderType === "delivery" ? 20 : 0;
  const packingCharge = orderType === "delivery" ? 10 : 0;
  const grandTotal = cartTotal + deliveryCharge + packingCharge;

  const orderItems = menu.filter((item) => (cart[item.id] || 0) > 0);

  // Automatically capture the customer's current location.
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError(
        "Your browser does not support location access. Please share your location manually."
      );
      return;
    }

    setLocationLoading(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;

        // This link opens Google Maps at the customer's coordinates.
        const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

        setCustomerLocation(mapsLink);
        setLocationLoading(false);

        if (accuracy > 100) {
          setLocationError(
            "Location captured, but accuracy may be limited. Please check the map link."
          );
        }
      },
      (error) => {
        setLocationLoading(false);

        if (error.code === error.PERMISSION_DENIED) {
          setLocationError(
            "Location permission was denied. Allow location access in your browser settings and try again."
          );
        } else if (error.code === error.TIMEOUT) {
          setLocationError(
            "Getting your location took too long. Please try again."
          );
        } else {
          setLocationError(
            "Unable to get your location. Please enable your device location and try again."
          );
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      }
    );
  };

  const sendOrder = () => {
    if (!customerName.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (orderType === "delivery" && !customerAddress.trim()) {
      alert("Please enter your full delivery address.");
      return;
    }

    if (orderItems.length === 0) {
      alert("Your cart is empty. Please add items before ordering.");
      return;
    }

    const message = [
      "*New Order - Radha Ki Rasoi*",
      "",
      `Customer: ${customerName.trim()}`,
      `Order Type: ${orderType === "delivery" ? "Delivery" : "Dine-in"}`,

      ...(orderType === "delivery"
        ? [
            "",
            "*Delivery Details:*",
            `Address: ${customerAddress.trim()}`,
            ...(customerLocation
              ? [
                  "",
                  "*Customer Location:*",
                  customerLocation,
                  "Tap the location link to open Google Maps.",
                ]
              : [
                  "",
                  "Customer has not shared their current GPS location.",
                ]),
          ]
        : []),

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

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

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
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-[#FAF7F0] p-5 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2
            id="whatsapp-checkout-title"
            className="text-2xl font-bold text-[#163E36]"
          >
            Your Order
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close checkout"
            className="text-2xl text-gray-500"
          >
            ×
          </button>
        </div>

        {/* Order type */}
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

        {/* Delivery information */}
        {orderType === "delivery" && (
          <div className="mb-5 space-y-4 rounded-xl border border-orange-200 bg-orange-50 p-4">
            <h3 className="font-semibold text-stone-900">
              📍 Delivery Details
            </h3>

            {/* Address */}
            <div>
              <label
                htmlFor="customer-address"
                className="mb-1 block text-sm font-medium text-stone-700"
              >
                Full Delivery Address *
              </label>

              <textarea
                id="customer-address"
                value={customerAddress}
                onChange={(event) =>
                  setCustomerAddress(event.target.value)
                }
                placeholder="House number, street, area, landmark..."
                rows={3}
                required
                className="w-full rounded-lg border border-stone-300 bg-white p-3 text-sm outline-none focus:border-orange-500"
              />
            </div>

            {/* Current location */}
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                Your Current Location
              </label>

              <button
                type="button"
                onClick={getCurrentLocation}
                disabled={locationLoading}
                className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {locationLoading
                  ? "Fetching Your Location..."
                  : customerLocation
                    ? "✓ Location Captured — Get Again"
                    : "📍 Use My Current Location"}
              </button>

              {customerLocation && (
                <div className="mt-3 rounded-lg border border-green-200 bg-white p-3">
                  <p className="mb-2 text-sm font-semibold text-green-800">
                    Your location has been captured!
                  </p>

                  <a
                    href={customerLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-700 underline"
                  >
                    View My Location on Google Maps ↗
                  </a>
                </div>
              )}

              {locationError && (
                <p className="mt-2 text-sm text-red-600">
                  {locationError}
                </p>
              )}

              <p className="mt-2 text-xs leading-5 text-stone-600">
                Allow location permission when prompted. Your location link
                will be included in the WhatsApp order so the restaurant can
                open it on Google Maps.
              </p>
            </div>
          </div>
        )}

        {/* Order items */}
        <div className="mb-5 space-y-3 rounded-xl bg-white p-4">
          <h3 className="mb-2 font-semibold text-stone-800">
            Order Summary
          </h3>

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

        {/* Price breakdown */}
        <div className="mb-5 space-y-3 border-t pt-3 text-sm">
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
            <span className="text-[#163E36]">₹{grandTotal}</span>
          </div>
        </div>

        {/* Customer name */}
        <label
          htmlFor="customer-name"
          className="mb-2 block text-sm font-semibold"
        >
          Your Name *
        </label>

        <input
          id="customer-name"
          value={customerName}
          onChange={(event) => setCustomerName(event.target.value)}
          placeholder="Enter your name"
          required
          className="mb-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#163E36]"
        />

        {/* Submit order */}
        <button
          type="button"
          onClick={sendOrder}
          className="w-full rounded-xl bg-[#167C42] px-4 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Send Order on WhatsApp ↗
        </button>

        <p className="mt-3 text-center text-xs text-gray-500">
          Review your order and press Send in WhatsApp.
        </p>
      </div>
    </div>
  );
}
