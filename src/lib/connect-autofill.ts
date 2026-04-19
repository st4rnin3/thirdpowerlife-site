const STORAGE_KEY = "tpl_connect_visitor";

interface ConnectVisitorData {
  email?: string;
  phone?: string;
  level?: number;
  levelName?: string;
}

/** Persist email/phone from the CONNECT survey so other forms can pre-fill. */
export function saveConnectData(data: ConnectVisitorData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage unavailable (SSR, private mode) — silently ignore
  }
}

/**
 * Save survey level independently of the capture form.
 * Merges into any existing visitor data so email/phone are preserved
 * if the capture form was submitted first.
 */
export function saveSurveyLevel(level: number, levelName: string): void {
  try {
    const existing = getConnectData();
    const merged: ConnectVisitorData = { ...existing, level, levelName };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    // localStorage unavailable (SSR, private mode) — silently ignore
  }
}

/**
 * Retrieve previously saved CONNECT visitor data, or null if storage is
 * empty or unparseable. Returns partial data (e.g. level without email)
 * since survey completion and capture form submission are independent steps.
 */
export function getConnectData(): ConnectVisitorData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    return parsed as ConnectVisitorData;
  } catch {
    return null;
  }
}
