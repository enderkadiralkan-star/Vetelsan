export function MedicineLegalNotice({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <aside className="mt-10 flex gap-3 border-l-2 border-primary py-1 pl-4 sm:mt-12">
      <span
        className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-muted/40 text-[10px] font-medium text-muted"
        aria-hidden="true"
      >
        i
      </span>
      <div className="min-w-0">
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink">
          {title}
        </p>
        <p className="mt-2 text-[13px] leading-[1.65] text-muted">{body}</p>
      </div>
    </aside>
  );
}
