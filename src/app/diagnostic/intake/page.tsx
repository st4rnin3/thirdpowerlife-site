import IntakeClient from "./IntakeClient";

export default async function DiagnosticIntakePage({
  searchParams,
}: {
  searchParams?: Promise<{ email?: string; orderId?: string }>;
}) {
  const resolved = (await searchParams) || {};
  return <IntakeClient initialEmail={resolved.email || ""} initialOrderId={resolved.orderId || ""} />;
}
