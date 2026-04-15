import IntakeClient from "./IntakeClient";

export default async function DiagnosticIntakePage({
  searchParams,
}: {
  searchParams?: Promise<{ email?: string; orderId?: string; sessionId?: string }>;
}) {
  const resolved = (await searchParams) || {};
  return (
    <IntakeClient
      initialEmail={resolved.email || ""}
      initialOrderId={resolved.orderId || ""}
      initialSessionId={resolved.sessionId || ""}
    />
  );
}
