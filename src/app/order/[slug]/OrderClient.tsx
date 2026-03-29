"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface ProductPrice {
  id: string;
  amount: number;
  currency: string;
  type: "one_time" | "recurring";
  interval?: string;
}

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: ProductPrice;
}

function formatPrice(amount: number, currency: string): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(amount);
}

export default function OrderClient({ slug }: { slug: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/stripe/product/${slug}`);

        if (!res.ok) {
          const data = await res.json();
          setError(data.error || "Product not found");
          return;
        }

        const data: Product = await res.json();
        setProduct(data);
      } catch {
        setError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  async function handleCheckout() {
    if (!product) return;

    setCheckoutLoading(true);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: product.price.id }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to start checkout");
        setCheckoutLoading(false);
        return;
      }

      const { url } = await res.json();

      if (!url) {
        setError("Failed to start checkout. Please try again.");
        setCheckoutLoading(false);
        return;
      }

      window.location.href = url;
    } catch {
      setError("Something went wrong. Please try again later.");
      setCheckoutLoading(false);
    }
  }

  /* ------------------------------------------------------------------ */
  /* Loading state                                                       */
  /* ------------------------------------------------------------------ */
  if (loading) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center" role="status" aria-label="Loading product">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-electric border-t-transparent"
            aria-hidden="true"
          />
          <p className="mt-4 text-light/50 font-heading text-sm">
            Loading product...
          </p>
        </div>
      </section>
    );
  }

  /* ------------------------------------------------------------------ */
  /* Error state                                                         */
  /* ------------------------------------------------------------------ */
  if (error || !product) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="glass rounded-2xl p-10 max-w-md w-full text-center">
          <h1 className="text-2xl font-heading font-bold text-white mb-4">
            {error === "Product not found"
              ? "Product Not Found"
              : "Something Went Wrong"}
          </h1>
          <p className="text-light/70 mb-8">
            {error || "We couldn't load this product. Please try again later."}
          </p>
          <Link
            href="/"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all"
          >
            Return Home
          </Link>
        </div>
      </section>
    );
  }

  /* ------------------------------------------------------------------ */
  /* Product card                                                        */
  /* ------------------------------------------------------------------ */
  const isRecurring = product.price.type === "recurring";
  const priceLabel = formatPrice(product.price.amount, product.price.currency);
  const intervalLabel = product.price.interval
    ? `/${product.price.interval}`
    : "";

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-midnight/50 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,87,255,0.15),transparent_60%)]" />

      <div className="relative z-10 glass rounded-2xl p-10 max-w-lg w-full text-center">
        <h1 className="text-3xl font-heading font-bold text-white mb-4">
          {product.name}
        </h1>

        {product.description && (
          <p className="text-light/70 mb-6 leading-relaxed">
            {product.description}
          </p>
        )}

        <p className="text-4xl font-heading font-bold text-electric mb-8">
          {priceLabel}
          {isRecurring && (
            <span className="text-lg text-light/50 font-normal">
              {intervalLabel}
            </span>
          )}
        </p>

        <button
          onClick={handleCheckout}
          disabled={checkoutLoading}
          className="bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {checkoutLoading
            ? "Redirecting..."
            : isRecurring
              ? "Subscribe"
              : "Pay Now"}
        </button>
      </div>
    </section>
  );
}
