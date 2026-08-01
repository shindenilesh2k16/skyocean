"use client";
import { useState } from "react";
const products = [
  {
    name: "SKYOCEAN 250ml",
    size: "250ml",
    image: "/products/250ml.png",
    specifications: {
  Capacity: "250ml",
  "Water Type": "Packaged Drinking Water",
  Source: "Purified Water",
  Packaging: "Food Grade PET Bottle",
  "Shelf Life": "12 Months",
}
  },
  {
    name: "SKYOCEAN 500ml",
    size: "500ml",
    image: "/products/500ml.png",
    specifications: {
  Capacity: "500ml",
  "Water Type": "Packaged Drinking Water",
  Source: "Purified Water",
  Packaging: "Food Grade PET Bottle",
  "Shelf Life": "12 Months",
}
  },
  {
    name: "SKYOCEAN 1L",
    size: "1L",
    image: "/products/1l.png",
    specifications: {
  Capacity: "1 Litre",
  "Water Type": "Packaged Drinking Water",
  Source: "Purified Water",
  Packaging: "Food Grade PET Bottle",
  "Shelf Life": "12 Months",
}
  },
  {
    name: "SKYOCEAN 2L",
    size: "2L",
    image: "/products/2l.png",
    specifications: {
  Capacity: "2 Litres",
  "Water Type": "Packaged Drinking Water",
  Source: "Purified Water",
  Packaging: "Food Grade PET Bottle",
  "Shelf Life": "12 Months",
}
  },
  {
    name: "SKYOCEAN 20L",
    size: "20L",
    image: "/products/20l.png",
    specifications: {
  Capacity: "20 Litres",
  "Water Type": "Packaged Drinking Water",
  Source: "Purified Water",
  Packaging: "Food Grade PET Bottle",
  "Shelf Life": "30 Days",
}
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  return (
    <section
      id="products"
      className="scroll-mt-24 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-[1500px] px-8">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            SKYOCEAN
          </p>

          <h2 className="text-4xl font-bold text-blue-950 md:text-5xl">
            Our Products
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Pure water. Perfectly packaged for every need.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">

          {products.map((product) => (
            <div
              key={product.size}
              className="group overflow-hidden rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Product Image */}
              <div className="flex h-72 w-full items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="block max-h-64 max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Name */}
              <h3 className="mt-5 text-lg font-bold text-blue-950">
                {product.name}
              </h3>

              {/* Product Size */}
              <p className="mt-1 text-sm text-gray-500">
                {product.size}
              </p>

              {/* View Details Button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(product)}
              className="mt-5 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-sky-700"
            >
              View Details
            </button>

            </div>
          ))}

        </div>
      </div>
      {selectedProduct && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    onClick={() => setSelectedProduct(null)}
  >
    <div
      className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-900">
          {selectedProduct.name}
        </h2>

        <button
          onClick={() => setSelectedProduct(null)}
          className="text-2xl font-bold text-gray-500 hover:text-red-500"
        >
          ×
        </button>
      </div>

      <div className="flex justify-center mb-6">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="h-60 object-contain"
        />
      </div>

      <table className="w-full border border-gray-200">
        <tbody>
          {Object.entries(selectedProduct.specifications).map(
            ([key, value]) => (
              <tr key={key} className="border-b">
                <td className="bg-gray-100 p-3 font-semibold">
                  {key}
                </td>

                <td className="p-3">
                  {String(value)}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <button
        onClick={() => setSelectedProduct(null)}
        className="mt-6 w-full rounded-lg bg-sky-600 py-3 font-semibold text-white hover:bg-sky-700"
      >
        Close
      </button>
    </div>
  </div>
)}
    </section>
  );
}
