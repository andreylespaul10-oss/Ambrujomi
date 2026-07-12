import Anthropic from "@anthropic-ai/sdk";
import { getProducts } from "@/lib/catalog";

export const runtime = "nodejs";
export const maxDuration = 30;

const MODEL = "claude-opus-4-8";
const MAX_TURNS = 20; // limite de histórico por conversa

const PERSONA = `You are "Ana from BlissGlow", the friendly beauty assistant of Bliss Glow
(blissglow.store), a premium beauty & wellness online shop serving the United Kingdom.

Tone: warm, professional, concise. Always reply in British English (unless the
customer writes in another language — then answer in their language).
Sign off naturally as Ana when it fits; never say you are an AI language model,
but if asked directly whether you are an AI assistant, answer honestly that you
are Bliss Glow's AI-powered assistant.

STORE FACTS (authoritative — never contradict):
• FREE UK delivery on every order, no minimum spend. 2–4 working days, tracked.
• 30-day returns, no questions asked. Free returns for UK customers.
• Damaged/incorrect items: photo within 48h → free replacement or full refund.
• Payments: credit/debit cards, PayPal, Apple Pay, Google Pay (via secure Stripe checkout).
• Prices include VAT. No customs surprises.
• Discount codes: GLOW10 (10% off), WELCOME15 (15% off first order). Applied at checkout.
• Refunds are issued within 3–5 working days of approval.

RULES:
• Product questions: only recommend products from the catalogue provided below.
  Mention the price and link the product page as /product/{slug}.
• Order status: you cannot look up orders. Ask the customer to check the
  tracking link in their confirmation email; if they can't find it, tell them
  to reply to their order confirmation email and a human (Ana) will help
  within 24 hours, Monday to Saturday.
• Cosmetic guidance only — never medical advice. If a customer mentions a
  medical skin condition, kindly suggest they consult a GP or dermatologist.
• If you genuinely cannot help, or the customer is upset, apologise and hand
  over: "let me pass this to our team — please email us and a real person
  will reply within 24 hours."
• Never invent prices, stock levels, order numbers or delivery dates.
• Keep answers short (2–5 sentences). Use at most one emoji per message.`;

let catalogCache = { text: "", at: 0 };

async function catalogBlock() {
  if (Date.now() - catalogCache.at < 5 * 60 * 1000 && catalogCache.text) {
    return catalogCache.text;
  }
  try {
    const products = await getProducts();
    const lines = products.map(
      (p) =>
        `- ${p.name} — ${p.priceFmt}${p.compareAtFmt ? ` (was ${p.compareAtFmt})` : ""} — /product/${p.slug}${p.inStock ? "" : " — OUT OF STOCK"}`
    );
    catalogCache = { text: "CURRENT CATALOGUE:\n" + lines.join("\n"), at: Date.now() };
  } catch {
    catalogCache = { text: "CURRENT CATALOGUE: (temporarily unavailable — do not invent products)", at: Date.now() };
  }
  return catalogCache.text;
}

export async function POST(request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({
      reply:
        "Our live assistant is taking a short break. 💆 Please email us and a real person — Ana from BlissGlow — will reply within 24 hours, Monday to Saturday.",
      offline: true,
    });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const history = Array.isArray(body?.messages) ? body.messages : [];
  const messages = history
    .filter(
      (m) =>
        (m?.role === "user" || m?.role === "assistant") &&
        typeof m?.content === "string" &&
        m.content.length > 0 &&
        m.content.length <= 4000
    )
    .slice(-MAX_TURNS)
    .map((m) => ({ role: m.role, content: m.content }));

  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return Response.json({ error: "No message" }, { status: 400 });
  }

  const client = new Anthropic();

  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system: [
        { type: "text", text: PERSONA, cache_control: { type: "ephemeral" } },
        { type: "text", text: await catalogBlock() },
      ],
      messages,
    });

    if (response.stop_reason === "refusal") {
      return Response.json({
        reply:
          "I'm sorry, I can't help with that one — but for anything about our products or your order, I'm all yours! 🌸",
      });
    }

    const reply = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    return Response.json({
      reply:
        reply ||
        "Sorry, I didn't catch that — could you rephrase? Or email us and a real person will reply within 24 hours.",
    });
  } catch (e) {
    console.error("chat error:", e?.status, e?.message);
    return Response.json({
      reply:
        "I'm having a moment! 💆 Please try again in a few seconds — or email us and a real person will reply within 24 hours.",
    });
  }
}
