// Proxy de imagens do CDN do Wix (usado em ambientes que bloqueiam
// acesso direto do navegador ao static.wixstatic.com — ex.: previews).
// Ativado no catálogo apenas quando PROXY_IMAGES=1.
export const runtime = "nodejs";

export async function GET(request) {
  const u = new URL(request.url).searchParams.get("u");
  if (!u) return new Response("missing u", { status: 400 });
  let target;
  try {
    target = new URL(u);
  } catch {
    return new Response("bad url", { status: 400 });
  }
  if (target.hostname !== "static.wixstatic.com") {
    return new Response("forbidden host", { status: 403 });
  }
  const res = await fetch(target, { cache: "force-cache" });
  if (!res.ok) return new Response("upstream error", { status: 502 });
  return new Response(res.body, {
    headers: {
      "Content-Type": res.headers.get("content-type") || "image/jpeg",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
