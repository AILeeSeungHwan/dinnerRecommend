/**
 * pageview.js — health의 Supabase pageview_events 테이블에 기록
 * site: 'dinner' 로 구분됨 → health.ambitstock.com/searchAnalytics 에서 확인
 *
 * 필요한 Vercel 환경변수 (health 프로젝트와 동일한 Supabase 값 사용):
 *   SUPABASE_URL         = https://xxxxxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY = eyJ... (service_role key)
 */
import { createClient } from "@supabase/supabase-js";
import { createHash } from "crypto";

function getHealthClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

function detectDevice(ua) {
  if (!ua) return "unknown";
  const uaL = ua.toLowerCase();
  const bots = [
    "bot",
    "spider",
    "crawl",
    "fetch",
    "lighthouse",
    "pagespeed",
    "semrush",
    "ahrefs",
    "yandex",
    "baidu",
    "google-read-aloud",
  ];
  if (bots.some((p) => uaL.includes(p))) return "bot";
  if (/ipad|tablet/i.test(ua)) return "tablet";
  if (/mobile|android|iphone/i.test(ua)) return "mobile";
  return "desktop";
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const supabase = getHealthClient();
  if (!supabase)
    return res.json({
      ok: false,
      reason: "SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not configured",
    });

  const { slug, title, source, keyword } = req.body || {};
  if (!slug) return res.status(400).json({ error: "slug required" });

  const ip = (req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "")
    .toString()
    .split(",")[0]
    .trim();
  const ua = req.headers["user-agent"] || "";
  const referrer = req.headers["referer"] || null;

  // KST 날짜
  const kstDate = new Date(Date.now() + 9 * 3600000).toISOString().slice(0, 10);

  // session_hash: SHA256(ip + ua + kstDate) 앞 16자
  const sessionHash = createHash("sha256")
    .update(ip + ua + kstDate)
    .digest("hex")
    .slice(0, 16);

  const { error } = await supabase.from("pageview_events").insert({
    date: kstDate,
    slug,
    title: title || null,
    source: source || "unknown",
    keyword: keyword || null,
    referrer: referrer || null,
    session_hash: sessionHash,
    site: "dinner",
    device: detectDevice(ua),
  });

  if (error) return res.json({ ok: false, error: error.message });
  return res.json({ ok: true });
}
