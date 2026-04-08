const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getHeaders() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Missing Supabase environment variables');
  }

  return {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation',
  };
}

export async function supabaseInsert(table: string, payload: unknown) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Supabase insert failed: ${res.status} ${await res.text()}`);
  }

  return res.json();
}

export async function supabaseUpsert(table: string, payload: unknown, onConflict?: string) {
  const headers = {
    ...getHeaders(),
    Prefer: 'resolution=merge-duplicates,return=representation',
  } as Record<string, string>;
  const url = new URL(`${SUPABASE_URL}/rest/v1/${table}`);
  if (onConflict) url.searchParams.set('on_conflict', onConflict);

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Supabase upsert failed: ${res.status} ${await res.text()}`);
  }

  return res.json();
}

export async function supabaseUpdate(table: string, filters: Record<string, string>, payload: unknown) {
  const url = new URL(`${SUPABASE_URL}/rest/v1/${table}`);
  for (const [key, value] of Object.entries(filters)) {
    url.searchParams.set(key, `eq.${value}`);
  }

  const res = await fetch(url.toString(), {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Supabase update failed: ${res.status} ${await res.text()}`);
  }

  return res.json();
}

export async function supabaseSelect(table: string, query = '') {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}${query}`, {
    headers: getHeaders(),
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`Supabase select failed: ${res.status} ${await res.text()}`);
  }
  return res.json();
}
