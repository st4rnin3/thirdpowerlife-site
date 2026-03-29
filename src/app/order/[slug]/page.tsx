import type { Metadata } from "next";
import OrderClient from "./OrderClient";

export const metadata: Metadata = {
  title: "Order | Third Power Life",
};

export default async function OrderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <OrderClient slug={slug} />;
}
