export default function Home() {
  const links = [
  { title: "Enter Beta v0.1", href: "/beta", note: "Primary entry point" },
  { title: "GitHub", href: "/github", note: "Source and builds" },
  { title: "Virtuals Protocol", href: "/virtuals", note: "Protocol presence" },
  { title: "Shop (Merch)", href: "/shop", note: "Shopify storefront" },
  { title: "X (Twitter)", href: "/x", note: "Updates & announcements" },
];

  return (
    <main
      style={{
        maxWidth: 820,
        margin: "0 auto",
        padding: "48px 20px",
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ fontSize: 42, margin: 0 }}>Illumina8 AI</h1>
      <p style={{ fontSize: 18, lineHeight: 1.5, marginTop: 12 }}>
        A project hub for Illumina8 — Light · Balance · Dark.
      </p>

      <div style={{ marginTop: 28, display: "grid", gap: 12 }}>
        {links.map((l) => (
          <a
            key={l.title}
            href={l.href}
            style={{
              display: "block",
              padding: 16,
              borderRadius: 14,
              border: "1px solid #ddd",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 650 }}>{l.title}</div>
            <div style={{ fontSize: 14, opacity: 0.75, marginTop: 4 }}>
              {l.note}
            </div>
          </a>
        ))}
      </div>

      <hr
        style={{
          margin: "36px 0",
          border: "none",
          borderTop: "1px solid #eee",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          fontSize: 14,
          opacity: 0.85,
        }}
      >
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/disclaimer">Disclaimer</a>
        <span style={{ opacity: 0.6 }}>
          © {new Date().getFullYear()} Illumina8 AI
        </span>
      </div>
    </main>
  );
}