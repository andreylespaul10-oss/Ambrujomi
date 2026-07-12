"use client";
import { useEffect, useRef, useState } from "react";

const HELLO =
  "Hi! 👋 I'm Ana, your Bliss Glow beauty assistant. Ask me anything about our products, delivery or returns!";

const SUGGESTIONS = [
  "What's good for tired eyes?",
  "How long does delivery take?",
  "Do you have a discount code?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: HELLO }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open, busy]);

  async function send(text) {
    const content = (text ?? input).trim();
    if (!content || busy) return;
    setInput("");
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) }), // sem a saudação fixa
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            data.reply ||
            "Sorry, something went wrong — please try again in a moment.",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Connection hiccup — please try again. 💆" },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        className="chat-fab"
        aria-label={open ? "Close chat" : "Chat with Ana"}
        onClick={() => setOpen(!open)}
      >
        {open ? "×" : "💬"}
      </button>

      {open ? (
        <div className="chat-panel" role="dialog" aria-label="Chat with Ana from BlissGlow">
          <div className="chat-head">
            <div className="chat-avatar">🌸</div>
            <div>
              <b>Ana from BlissGlow</b>
              <small>AI beauty assistant · online 24/7</small>
            </div>
          </div>
          <div className="chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={"chat-msg " + (m.role === "user" ? "me" : "her")}>
                {m.content}
              </div>
            ))}
            {busy ? <div className="chat-msg her typing">Ana is typing…</div> : null}
            {messages.length === 1 ? (
              <div className="chat-sugs">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              aria-label="Your message"
              maxLength={1000}
            />
            <button type="submit" disabled={busy} aria-label="Send">
              ➤
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
