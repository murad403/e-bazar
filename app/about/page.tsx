"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to <span className="font-semibold text-purple-600">E-Bazar</span> — Your one-stop destination for quality products and trusted service.
          </p>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="text-gray-700 leading-7">
            In 2024, we began this journey with a simple mission: to bring high-quality products at affordable prices to customers everywhere. From our humble beginnings, we have grown into a trusted e-commerce platform, always focused on one thing — value and trust.
          </p>
        </section>
        <section className="space-y-6 bg-purple-200 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission & Vision</h2>
          <p className="text-gray-700 leading-7">
            Our mission is to offer premium products with exceptional service, ensuring every purchase is smooth and satisfying. We envision a world where online shopping is effortless, reliable and accessible to all.
          </p>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-purple-200 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600">Quality Products</h3>
              <p className="text-gray-700 mt-2">Each item is verified and brought to you from trusted vendors.</p>
            </div>
            <div className="p-4 bg-purple-200 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600">Fast & Secure Delivery</h3>
              <p className="text-gray-700 mt-2">From checkout to doorstep – reliable delivery you can count on.</p>
            </div>
            <div className="p-4 bg-purple-200 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600">24/7 Customer Support</h3>
              <p className="text-gray-700 mt-2">Our team is always ready to help you, day or night.</p>
            </div>
            <div className="p-4 bg-purple-200 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600">Secure Payments</h3>
              <p className="text-gray-700 mt-2">Checkout with peace of mind — all payments are encrypted and safe.</p>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Genuine customer reviews & 5-star ratings.</li>
            <li>Hassle-free returns and exchanges.</li>
            <li>Local & international shipping options.</li>
            <li>Regular deals and discounts for our loyal customers.</li>
          </ul>
        </section>
        <section className="text-center mt-10">
          <h3 className="text-xl font-semibold text-gray-800">Join our community today</h3>
          <div className="mt-5">
            <Link href={"/shop"} className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
            Browse Products
          </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default page;
