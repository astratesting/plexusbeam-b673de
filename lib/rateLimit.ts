/**
 * In-memory IP rate limiter.
 *
 * TODO: Replace with Upstash Redis in production for multi-instance support.
 * This in-memory version works for single-instance deployments only.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

type Entry = { count: number; expiresAt: number };

const store = new Map<string, Entry>();

export function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = store.get(ip);

  // Clean up expired entries periodically (simple approach)
  if (Math.random() < 0.01) {
    const entries = Array.from(store.entries());
    for (const [key, val] of entries) {
      if (val.expiresAt < now) store.delete(key);
    }
  }

  if (!entry || entry.expiresAt < now) {
    // New or expired window
    store.set(ip, { count: 1, expiresAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((entry.expiresAt - now) / 1000);
    return { allowed: false, retryAfter };
  }

  entry.count++;
  return { allowed: true };
}
