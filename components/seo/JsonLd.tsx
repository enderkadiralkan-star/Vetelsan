type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

function safeJsonLd(data: Record<string, unknown>) {
  // Prevent </script> breakout in JSON-LD script tags.
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export function JsonLd({ data }: JsonLdProps) {
  const graphs = Array.isArray(data) ? data : [data];

  return (
    <>
      {graphs.map((graph, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(graph) }}
        />
      ))}
    </>
  );
}
