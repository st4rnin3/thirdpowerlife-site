import { NextResponse } from "next/server";
import getStripeClient from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const headers = Object.fromEntries(request.headers.entries());
    const host = headers["x-forwarded-host"] || headers["host"] || "";
    const protocol = headers["x-forwarded-proto"] || "https";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;

    const body = await request.json();
    const { priceId } = body;

    if (!priceId || typeof priceId !== "string") {
      return NextResponse.json(
        { error: "priceId is required" },
        { status: 400 }
      );
    }

    const stripe = getStripeClient();

    const price = await stripe.prices.retrieve(priceId);
    const productId =
      typeof price.product === "string" ? price.product : price.product.id;
    const product = await stripe.products.retrieve(productId);

    if (!product.active || !product.metadata.slug) {
      return NextResponse.json(
        { error: "Product is not available" },
        { status: 400 }
      );
    }

    const mode = price.type === "recurring" ? "subscription" : "payment";

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/order/success/${product.metadata.slug}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/order/cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
