import type { ReactElement } from "react";

/**
 * Renders structured data as a JSON-LD script tag in the server-rendered HTML.
 * `<` is escaped so a value inside the data cannot close the script element.
 */
export default function JsonLd({
  data,
}: {
  data: Record<string, unknown>;
}): ReactElement {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
