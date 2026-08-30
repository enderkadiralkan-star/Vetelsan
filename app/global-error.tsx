"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-[#17191c]">
        <h1 className="text-3xl font-semibold">Bir şeyler ters gitti</h1>
        <p className="mt-3 max-w-md text-[#667078]">
          Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <p className="mt-1 max-w-md text-sm text-[#667078]">
          Something went wrong. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full bg-[#e30613] px-6 py-3 text-sm font-medium text-white"
        >
          Tekrar dene / Try again
        </button>
      </body>
    </html>
  );
}
