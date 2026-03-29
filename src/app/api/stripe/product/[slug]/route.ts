import { NextResponse } from "next/server";
import type Stripe from "stripe";
import getStripeClient from "@/lib/stripe";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    if (!slug || slug.length > 255) {
      return NextResponse.json(
        { error: "Invalid product slug" },
        { status: 400 }
      );
    }

    const stripe = getStripeClient();

    const result = await stripe.products.search({
      query: `active:"true" AND metadata["slug"]:"${slug}"`,
      expand: ["data.default_price"],
    });

    const product = result.data[0];

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    const defaultPrice = product.default_price as Stripe.Price | null;

    if (!defaultPrice) {
      return NextResponse.json(
        { error: "Product has no default price" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      id: product.id,
      name: product.name,
      description: product.description,
      price: {
        id: defaultPrice.id,
        amount: (defaultPrice.unit_amount ?? 0) / 100,
        currency: defaultPrice.currency,
        type: defaultPrice.type,
        ...(defaultPrice.recurring?.interval && {
          interval: defaultPrice.recurring.interval,
        }),
      },
    });
  } catch (err) {
    console.error("Stripe product fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
