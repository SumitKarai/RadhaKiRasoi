
const restaurantName = "Radha Ki Rasoi";
const restaurantAddress = "1703, Hawa Bangala Rd, Opp. Sai Dwar, Dwarkapuri, Indore, Madhya Pradesh 452009";
const whatsappNumber = "919479469001"; // Country code + number
const phoneNumber = "+919479469001"; // Replace with your actual number
const upiId = "sumitkarari@ybl"; // Replace with your actual UPI ID

export default function RestaurantInfo() {
  const upiLink = `upi://pay?pa=${encodeURIComponent(
    upiId
  )}&pn=${encodeURIComponent(restaurantName)}&cu=INR`;

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    upiLink
  )}`;

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    restaurantAddress
  )}`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="bg-[#fffaf0] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
            Visit Us
          </p>

          <h2 className="mt-2 text-3xl font-bold text-stone-900 sm:text-4xl">
            Radha Ki Rasoi
          </h2>

          <p className="mt-3 text-stone-600">
            Good food, warm hospitality, and easy ordering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Restaurant Contact */}
          <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="mb-5 text-xl font-bold text-stone-900">
              Restaurant Information
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h4 className="font-semibold text-stone-900">Address</h4>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    {restaurantAddress}
                  </p>
                  <a
                    href={"https://maps.app.goo.gl/Ya6MPN9Vgtbavx8r5"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <h4 className="font-semibold text-stone-900">
                    Contact Us
                  </h4>
                  <p className="mt-1 text-sm text-stone-600">
                    Contact us for orders and enquiries.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block rounded-lg bg-green-600 px-4 py-2 m-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    Chat on WhatsApp
                  </a>
                  
<a
  href={`tel:${phoneNumber}`}
  className="mt-2 inline-block rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
>
  📞 Call Now
</a>

                </div>
              </div>
            </div>
          </div>

          {/* UPI Payment */}
          <div className="rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-sm">
            <h3 className="text-xl font-bold text-stone-900">
              Pay via UPI
            </h3>

            <p className="mt-2 text-sm text-stone-600">
              Scan the QR code with your preferred UPI app.
            </p>

            <div className="mx-auto my-5 flex w-fit items-center justify-center rounded-xl border border-stone-200 bg-white p-3">
              <img
                src={qrCodeUrl}
                alt="UPI payment QR code for Radha Ki Rasoi"
                width={200}
                height={200}
                className="h-[200px] w-[200px]"
              />
            </div>

            <p className="mb-4 break-all text-sm text-stone-600">
              UPI ID: <span className="font-semibold text-stone-900">{upiId}</span>
            </p>

            <a
              href={upiLink}
              className="inline-block rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
            >
              Pay with UPI App
            </a>

            <p className="mt-3 text-xs text-stone-500">
              Verify the recipient name and amount in your UPI app before paying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
