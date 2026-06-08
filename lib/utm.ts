export function parseUtm(search: string): {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
} {
  const params = new URLSearchParams(search);
  const out: any = {};
  const src = params.get("utm_source");
  const med = params.get("utm_medium");
  const cmp = params.get("utm_campaign");
  if (src) out.utm_source = src;
  if (med) out.utm_medium = med;
  if (cmp) out.utm_campaign = cmp;
  return out;
}
