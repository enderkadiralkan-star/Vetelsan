import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/* OG images run in Satori; next/image is not supported here. */
/* eslint-disable @next/next/no-img-element */

export const alt = "Vetelsan | Veteriner Sağlık Ürünleri";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(
    join(process.cwd(), "public/images/hero/veterinary.jpg"),
  );
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <img
          src={src}
          alt=""
          width={1200}
          height={630}
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 72,
            background:
              "linear-gradient(90deg, rgba(23,25,28,0.92) 0%, rgba(23,25,28,0.55) 72%, rgba(23,25,28,0.2) 100%)",
          }}
        >
          <div
            style={{
              color: "#e30613",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Vetelsan
          </div>
          <div
            style={{
              color: "white",
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.1,
              marginTop: 16,
              maxWidth: 820,
            }}
          >
            Veteriner Sağlık Ürünleri
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: 24,
              marginTop: 18,
            }}
          >
            1996’dan beri güvenilir çözüm ortağı
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
